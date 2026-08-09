import "server-only";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { resolveContentAsset, type ContentAssetInput } from "../assets";
import { calculateReadingTime } from "../mdx/reading-time";
import { assertContentSlug } from "../slugs";
import { normalizeTaxonomySlug, resolveCategory, resolveTags } from "./taxonomy";
import type {
  BlogPost,
  BlogPostFrontmatter,
  BlogPostMeta,
  BlogSeries,
  ContentVisibilityOptions,
} from "./types";

const POSTS_ROOT = path.join(process.cwd(), "content", "blog", "posts");

export function getAllPosts(options: ContentVisibilityOptions = {}): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug, { includeDrafts: true }))
    .filter((post): post is BlogPost => post !== null)
    .filter((post) => shouldIncludeContent(post, options))
    .map(toPostMeta)
    .sort(sortByLatestDate);
}

export function getLatestPosts(limit?: number): BlogPostMeta[] {
  const posts = getAllPosts();

  if (limit === undefined) {
    return posts;
  }

  return posts.slice(0, limit);
}

export function getPostBySlug(
  slug: string,
  options: ContentVisibilityOptions = {},
): BlogPost | null {
  const normalizedSlug = normalizeTaxonomySlug(slug);
  assertContentSlug(normalizedSlug, `post slug "${slug}"`);

  const filePath = path.join(POSTS_ROOT, normalizedSlug, "index.mdx");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const frontmatter = validatePostFrontmatter(data, normalizedSlug);
  const post = toPost(frontmatter, content);

  if (!shouldIncludeContent(post, options)) {
    return null;
  }

  return post;
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const normalizedCategory = normalizeTaxonomySlug(category);

  return getAllPosts().filter((post) => post.category.slug === normalizedCategory);
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const normalizedTag = normalizeTaxonomySlug(tag);

  return getAllPosts().filter((post) => post.tags.some((item) => item.slug === normalizedTag));
}

function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_ROOT)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function toPost(frontmatter: BlogPostFrontmatter, content: string): BlogPost {
  const readingTime = frontmatter.readingTimeOverride ?? calculateReadingTime(content);
  const cover =
    frontmatter.cover === undefined
      ? undefined
      : resolveContentAsset({
          type: "blog",
          slug: frontmatter.slug,
          asset: frontmatter.cover,
        });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    slug: frontmatter.slug,
    date: frontmatter.date,
    updatedAt: frontmatter.updatedAt ?? frontmatter.date,
    category: resolveCategory(frontmatter.category),
    tags: resolveTags(frontmatter.tags),
    draft: frontmatter.draft,
    featured: frontmatter.featured ?? false,
    readingTime,
    cover,
    series: frontmatter.series,
    canonicalUrl: frontmatter.canonicalUrl,
    relatedProjects: frontmatter.relatedProjects ?? [],
    relatedPosts: frontmatter.relatedPosts ?? [],
    ogImage: frontmatter.ogImage,
    content,
  };
}

function toPostMeta(post: BlogPost): BlogPostMeta {
  const { content: _content, ...meta } = post;

  return meta;
}

function shouldIncludeContent(
  content: { draft: boolean },
  options: ContentVisibilityOptions,
): boolean {
  return options.includeDrafts === true || !content.draft;
}

function sortByLatestDate(a: BlogPostMeta, b: BlogPostMeta): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function validatePostFrontmatter(
  data: Record<string, unknown>,
  directorySlug: string,
): BlogPostFrontmatter {
  const title = getRequiredString(data, "title");
  const description = getRequiredString(data, "description");
  const slug = normalizeTaxonomySlug(getRequiredString(data, "slug"));
  const date = getRequiredDateString(data, "date");
  const updatedAt = getOptionalDateString(data, "updatedAt");
  const category = normalizeTaxonomySlug(getRequiredString(data, "category"));
  const tags = getRequiredStringArray(data, "tags").map(normalizeTaxonomySlug);
  const draft = getRequiredBoolean(data, "draft");
  const featured = getOptionalBoolean(data, "featured");
  const cover = getOptionalCover(data, "cover");
  const series = getOptionalSeries(data, "series");
  const canonicalUrl = getOptionalString(data, "canonicalUrl");
  const relatedProjects = getOptionalStringArray(data, "relatedProjects");
  const relatedPosts = getOptionalStringArray(data, "relatedPosts");
  const readingTimeOverride = getOptionalPositiveNumber(data, "readingTimeOverride");
  const ogImage = getOptionalString(data, "ogImage");

  if (slug !== directorySlug) {
    throw new Error(`Post slug mismatch: frontmatter "${slug}" does not match "${directorySlug}".`);
  }

  assertContentSlug(slug, `post(${directorySlug}).slug`);
  assertContentSlug(directorySlug, `post directory "${directorySlug}"`);

  if (cover?.src && !cover.alt) {
    throw new Error(`Post "${slug}" cover.alt is required when cover.src exists.`);
  }

  return {
    title,
    description,
    slug,
    date,
    updatedAt,
    category,
    tags,
    draft,
    featured,
    cover,
    series,
    canonicalUrl,
    relatedProjects,
    relatedPosts,
    readingTimeOverride,
    ogImage,
  };
}

function getRequiredString(data: Record<string, unknown>, fieldName: string): string {
  const value = data[fieldName];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a non-empty string.`);
  }

  return value.trim();
}

function getOptionalString(data: Record<string, unknown>, fieldName: string): string | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a non-empty string.`);
  }

  return value.trim();
}

function getRequiredDateString(data: Record<string, unknown>, fieldName: string): string {
  const value = getRequiredString(data, fieldName);

  if (Number.isNaN(new Date(value).getTime())) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a valid date string.`);
  }

  return value;
}

function getOptionalDateString(
  data: Record<string, unknown>,
  fieldName: string,
): string | undefined {
  const value = getOptionalString(data, fieldName);

  if (value === undefined) {
    return undefined;
  }

  if (Number.isNaN(new Date(value).getTime())) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a valid date string.`);
  }

  return value;
}

function getRequiredBoolean(data: Record<string, unknown>, fieldName: string): boolean {
  const value = data[fieldName];

  if (typeof value !== "boolean") {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a boolean.`);
  }

  return value;
}

function getOptionalBoolean(data: Record<string, unknown>, fieldName: string): boolean | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "boolean") {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a boolean.`);
  }

  return value;
}

function getRequiredStringArray(data: Record<string, unknown>, fieldName: string): string[] {
  const value = data[fieldName];

  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a non-empty string array.`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Invalid post frontmatter "${fieldName}": expected string values.`);
    }
  });

  return value.map((item) => item.trim());
}

function getOptionalStringArray(data: Record<string, unknown>, fieldName: string): string[] {
  const value = data[fieldName];

  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value)) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a string array.`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Invalid post frontmatter "${fieldName}": expected string values.`);
    }
  });

  return value.map((item) => item.trim());
}

function getOptionalPositiveNumber(
  data: Record<string, unknown>,
  fieldName: string,
): number | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "number" || value <= 0) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected a positive number.`);
  }

  return value;
}

function getOptionalCover(
  data: Record<string, unknown>,
  fieldName: string,
): ContentAssetInput | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (!isRecord(value)) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected an object.`);
  }

  return {
    src: getRequiredString(value, "src"),
    alt: getRequiredString(value, "alt"),
  };
}

function getOptionalSeries(
  data: Record<string, unknown>,
  fieldName: string,
): BlogSeries | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (!isRecord(value)) {
    throw new Error(`Invalid post frontmatter "${fieldName}": expected an object.`);
  }

  return {
    id: getRequiredString(value, "id"),
    order: getOptionalPositiveNumber(value, "order") ?? 1,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
