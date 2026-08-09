const fs = require("fs");
const path = require("path");

const matter = require("gray-matter");

const CONTENT_ROOT = path.join(process.cwd(), "content");
const BLOG_ROOT = path.join(CONTENT_ROOT, "blog");
const BLOG_POSTS_ROOT = path.join(BLOG_ROOT, "posts");
const CATEGORIES_PATH = path.join(BLOG_ROOT, "categories.json");
const TAGS_PATH = path.join(BLOG_ROOT, "tags.json");
const PROJECTS_ROOT = path.join(CONTENT_ROOT, "projects");
const PROJECT_ORDER_PATH = path.join(PROJECTS_ROOT, "project-order.json");
const PROJECT_STATUSES = new Set(["completed", "in-progress", "archived"]);

function validateContent() {
  const categories = validateTaxonomyFile(CATEGORIES_PATH, "blog categories");
  const tags = validateTaxonomyFile(TAGS_PATH, "blog tags");
  const posts = validateBlogPosts({
    categorySlugs: new Set(categories.map((category) => category.slug)),
    tagSlugs: new Set(tags.map((tag) => tag.slug)),
  });
  const projects = validateProjects();

  validateProjectOrder(projects);
  validateRelatedReferences(posts, projects);

  return {
    categories: categories.length,
    tags: tags.length,
    posts: posts.length,
    projects: projects.length,
  };
}

function validateTaxonomyFile(filePath, sourceName) {
  const entries = readJsonArray(filePath, sourceName).map((entry, index) =>
    validateTaxonomyEntry(entry, `${sourceName}[${index}]`),
  );

  assertUniqueSlugs(
    entries.map((entry) => entry.slug),
    sourceName,
  );

  return entries;
}

function validateTaxonomyEntry(entry, sourceName) {
  assertRecord(entry, sourceName);

  const slug = getRequiredString(entry, "slug", sourceName);
  const label = getRequiredString(entry, "label", sourceName);
  const description = getOptionalString(entry, "description", sourceName);

  assertAlreadyNormalizedSlug(slug, `${sourceName}.slug`);

  return {
    slug,
    label,
    description,
  };
}

function validateBlogPosts({ categorySlugs, tagSlugs }) {
  const directorySlugs = getContentDirectorySlugs(BLOG_POSTS_ROOT, "blog posts");

  assertUniqueSlugs(
    directorySlugs.map(normalizeContentSlug),
    "blog post directories",
  );

  return directorySlugs.map((directorySlug) => {
    assertContentSlug(directorySlug, `blog post directory "${directorySlug}"`);

    const filePath = path.join(BLOG_POSTS_ROOT, directorySlug, "index.mdx");
    const { data } = matter(fs.readFileSync(filePath, "utf8"));
    const sourceName = `post(${directorySlug})`;
    const slug = normalizeContentSlug(getRequiredString(data, "slug", sourceName));
    const category = normalizeContentSlug(getRequiredString(data, "category", sourceName));
    const tags = getRequiredStringArray(data, "tags", sourceName).map(normalizeContentSlug);
    const cover = getOptionalCover(data, "cover", sourceName);

    assertContentSlug(slug, `${sourceName}.slug`);

    if (slug !== directorySlug) {
      throw new Error(`Post slug mismatch: frontmatter "${slug}" does not match "${directorySlug}".`);
    }

    if (!categorySlugs.has(category)) {
      throw new Error(`Unknown category "${category}" in ${sourceName}.`);
    }

    tags.forEach((tag) => {
      assertContentSlug(tag, `${sourceName}.tags`);

      if (!tagSlugs.has(tag)) {
        throw new Error(`Unknown tag "${tag}" in ${sourceName}.`);
      }
    });

    validateRequiredPostFields(data, sourceName);

    if (cover !== undefined) {
      assertContentAssetExists(resolveContentAsset({ type: "blog", slug, asset: cover }));
    }

    return {
      slug,
      relatedPosts: getOptionalStringArray(data, "relatedPosts", sourceName).map(normalizeContentSlug),
      relatedProjects: getOptionalStringArray(data, "relatedProjects", sourceName).map(
        normalizeContentSlug,
      ),
    };
  });
}

function validateRequiredPostFields(data, sourceName) {
  getRequiredString(data, "title", sourceName);
  getRequiredString(data, "description", sourceName);
  getRequiredDateString(data, "date", sourceName);
  getOptionalDateString(data, "updatedAt", sourceName);
  getRequiredBoolean(data, "draft", sourceName);
  getOptionalBoolean(data, "featured", sourceName);
  getOptionalPositiveNumber(data, "readingTimeOverride", sourceName);
  getOptionalString(data, "canonicalUrl", sourceName);
  getOptionalString(data, "ogImage", sourceName);
  validateOptionalSeries(data, sourceName);
}

function validateProjects() {
  const directorySlugs = getContentDirectorySlugs(PROJECTS_ROOT, "projects");

  assertUniqueSlugs(
    directorySlugs.map(normalizeContentSlug),
    "project directories",
  );

  return directorySlugs.map((directorySlug) => {
    assertContentSlug(directorySlug, `project directory "${directorySlug}"`);

    const filePath = path.join(PROJECTS_ROOT, directorySlug, "index.mdx");
    const { data } = matter(fs.readFileSync(filePath, "utf8"));
    const sourceName = `project(${directorySlug})`;
    const slug = normalizeContentSlug(getRequiredString(data, "slug", sourceName));
    const cover = getRequiredCover(data, "cover", sourceName);

    assertContentSlug(slug, `${sourceName}.slug`);

    if (slug !== directorySlug) {
      throw new Error(
        `Project slug mismatch: frontmatter "${slug}" does not match "${directorySlug}".`,
      );
    }

    validateRequiredProjectFields(data, sourceName);
    assertContentAssetExists(resolveContentAsset({ type: "project", slug, asset: cover }));

    return {
      slug,
      relatedPosts: getOptionalStringArray(data, "relatedPosts", sourceName).map(normalizeContentSlug),
    };
  });
}

function validateRequiredProjectFields(data, sourceName) {
  getRequiredString(data, "title", sourceName);
  getRequiredString(data, "description", sourceName);
  getRequiredDateString(data, "date", sourceName);
  getRequiredBoolean(data, "featured", sourceName);
  getOptionalBoolean(data, "draft", sourceName);
  getRequiredString(data, "role", sourceName);
  getRequiredString(data, "team", sourceName);
  getRequiredStringArray(data, "stacks", sourceName);
  getOptionalStringArray(data, "metrics", sourceName);
  getOptionalString(data, "company", sourceName);
  validateProjectStatus(data, sourceName);
  validateProjectPeriod(data, sourceName);
  validateProjectLinks(data, sourceName);
}

function validateProjectOrder(projects) {
  const orderedSlugs = readJsonArray(PROJECT_ORDER_PATH, "project-order.json").map((slug, index) => {
    if (typeof slug !== "string" || slug.trim().length === 0) {
      throw new Error(`Invalid project-order.json[${index}]: expected a non-empty string.`);
    }

    const normalizedSlug = normalizeContentSlug(slug);
    assertContentSlug(normalizedSlug, `project-order.json[${index}]`);

    return normalizedSlug;
  });

  assertUniqueSlugs(orderedSlugs, "project-order.json");

  const projectSlugs = new Set(projects.map((project) => project.slug));

  orderedSlugs.forEach((slug) => {
    if (!projectSlugs.has(slug)) {
      throw new Error(`Unknown project "${slug}" in project-order.json.`);
    }
  });
}

function validateRelatedReferences(posts, projects) {
  const postSlugs = new Set(posts.map((post) => post.slug));
  const projectSlugs = new Set(projects.map((project) => project.slug));

  posts.forEach((post) => {
    post.relatedPosts.forEach((slug) => {
      assertContentSlug(slug, `post(${post.slug}).relatedPosts`);

      if (!postSlugs.has(slug)) {
        throw new Error(`Unknown related post "${slug}" in post(${post.slug}).`);
      }
    });

    post.relatedProjects.forEach((slug) => {
      assertContentSlug(slug, `post(${post.slug}).relatedProjects`);

      if (!projectSlugs.has(slug)) {
        throw new Error(`Unknown related project "${slug}" in post(${post.slug}).`);
      }
    });
  });

  projects.forEach((project) => {
    project.relatedPosts.forEach((slug) => {
      assertContentSlug(slug, `project(${project.slug}).relatedPosts`);

      if (!postSlugs.has(slug)) {
        throw new Error(`Unknown related post "${slug}" in project(${project.slug}).`);
      }
    });
  });
}

function getContentDirectorySlugs(rootPath, sourceName) {
  if (!fs.existsSync(rootPath)) {
    return [];
  }

  return fs
    .readdirSync(rootPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function readJsonArray(filePath, sourceName) {
  const value = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!Array.isArray(value)) {
    throw new Error(`Invalid ${sourceName}: expected an array.`);
  }

  return value;
}

function validateProjectStatus(data, sourceName) {
  const status = getRequiredString(data, "status", sourceName);

  if (!PROJECT_STATUSES.has(status)) {
    throw new Error(`Invalid ${sourceName}.status: expected a known project status.`);
  }
}

function validateProjectPeriod(data, sourceName) {
  const period = data.period;

  assertRecord(period, `${sourceName}.period`);
  getRequiredString(period, "start", `${sourceName}.period`);
  getRequiredString(period, "end", `${sourceName}.period`);
}

function validateProjectLinks(data, sourceName) {
  const links = data.links;

  if (links === undefined) {
    return;
  }

  assertRecord(links, `${sourceName}.links`);
  getOptionalString(links, "demo", `${sourceName}.links`);
  getOptionalString(links, "github", `${sourceName}.links`);
  getOptionalString(links, "caseStudy", `${sourceName}.links`);
}

function validateOptionalSeries(data, sourceName) {
  const series = data.series;

  if (series === undefined) {
    return;
  }

  assertRecord(series, `${sourceName}.series`);
  getRequiredString(series, "id", `${sourceName}.series`);
  getOptionalPositiveNumber(series, "order", `${sourceName}.series`);
}

function getOptionalCover(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  return validateCover(value, `${sourceName}.${fieldName}`);
}

function getRequiredCover(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (value === undefined) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected an object.`);
  }

  return validateCover(value, `${sourceName}.${fieldName}`);
}

function validateCover(value, sourceName) {
  assertRecord(value, sourceName);

  return {
    src: getRequiredString(value, "src", sourceName),
    alt: getRequiredString(value, "alt", sourceName),
  };
}

function getRequiredString(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a non-empty string.`);
  }

  return value.trim();
}

function getOptionalString(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a non-empty string.`);
  }

  return value.trim();
}

function getRequiredDateString(data, fieldName, sourceName) {
  const value = getRequiredString(data, fieldName, sourceName);

  if (Number.isNaN(new Date(value).getTime())) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a valid date string.`);
  }

  return value;
}

function getOptionalDateString(data, fieldName, sourceName) {
  const value = getOptionalString(data, fieldName, sourceName);

  if (value === undefined) {
    return undefined;
  }

  if (Number.isNaN(new Date(value).getTime())) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a valid date string.`);
  }

  return value;
}

function getRequiredBoolean(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (typeof value !== "boolean") {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a boolean.`);
  }

  return value;
}

function getOptionalBoolean(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "boolean") {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a boolean.`);
  }

  return value;
}

function getRequiredStringArray(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a non-empty string array.`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Invalid ${sourceName}.${fieldName}: expected string values.`);
    }
  });

  return value.map((item) => item.trim());
}

function getOptionalStringArray(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value)) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a string array.`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Invalid ${sourceName}.${fieldName}: expected string values.`);
    }
  });

  return value.map((item) => item.trim());
}

function getOptionalPositiveNumber(data, fieldName, sourceName) {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "number" || value <= 0) {
    throw new Error(`Invalid ${sourceName}.${fieldName}: expected a positive number.`);
  }

  return value;
}

function assertRecord(value, sourceName) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`Invalid ${sourceName}: expected an object.`);
  }
}

function assertAlreadyNormalizedSlug(value, fieldName) {
  if (value !== normalizeContentSlug(value)) {
    throw new Error(`Invalid ${fieldName}: slug must already be normalized.`);
  }

  assertContentSlug(value, fieldName);
}

// Keep these policy helpers aligned with slugs.ts and assets.ts.
// The validation script stays CommonJS so build/CI can run it without a TS runner.
function normalizeContentSlug(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

function assertContentSlug(value, fieldName) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    throw new Error(
      `Invalid ${fieldName}: expected lowercase kebab-case using letters, numbers, and single hyphens.`,
    );
  }
}

function assertUniqueSlugs(slugs, sourceName) {
  const seenSlugs = new Set();

  slugs.forEach((slug) => {
    if (seenSlugs.has(slug)) {
      throw new Error(`Duplicate slug "${slug}" in ${sourceName}.`);
    }

    seenSlugs.add(slug);
  });
}

function resolveContentAsset({ type, slug, asset }) {
  assertRelativeContentAssetPath(asset.src, `${type}(${slug}).cover.src`);

  const contentPath = getContentAssetPath(type, slug, asset.src);

  return {
    ...asset,
    contentPath,
    sourcePath: path.join(process.cwd(), contentPath),
  };
}

function getContentAssetPath(type, slug, assetSrc) {
  const contentDirectory =
    type === "blog"
      ? path.join("content", "blog", "posts", slug)
      : path.join("content", "projects", slug);

  return path.join(contentDirectory, assetSrc).replaceAll(path.sep, "/");
}

function assertContentAssetExists(asset) {
  if (!asset.sourcePath.startsWith(CONTENT_ROOT)) {
    throw new Error(`Invalid content asset path outside content root: ${asset.contentPath}`);
  }

  if (!fs.existsSync(asset.sourcePath)) {
    throw new Error(`Missing content asset: ${asset.contentPath}`);
  }
}

function assertRelativeContentAssetPath(value, fieldName) {
  if (path.isAbsolute(value) || value.startsWith("http://") || value.startsWith("https://")) {
    throw new Error(`Invalid ${fieldName}: expected a relative content asset path.`);
  }

  const normalizedPath = path.normalize(value);

  if (normalizedPath.startsWith("..")) {
    throw new Error(`Invalid ${fieldName}: parent directory traversal is not allowed.`);
  }
}

module.exports = {
  validateContent,
};

if (require.main === module) {
  try {
    const result = validateContent();

    console.log(
      `Content validation passed: ${result.posts} posts, ${result.projects} projects, ${result.categories} categories, ${result.tags} tags.`,
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}
