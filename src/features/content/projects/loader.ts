import "server-only";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { resolveContentAsset, type ContentAssetInput } from "../assets";
import { assertContentSlug, normalizeContentSlug } from "../slugs";
import type {
  Project,
  ProjectFrontmatter,
  ProjectLinks,
  ProjectMeta,
  ProjectPeriod,
  ProjectStatus,
} from "./types";

interface ProjectVisibilityOptions {
  includeDrafts?: boolean;
}

const PROJECTS_ROOT = path.join(process.cwd(), "content", "projects");
const PROJECT_ORDER_PATH = path.join(PROJECTS_ROOT, "project-order.json");
const PROJECT_STATUSES: ProjectStatus[] = ["completed", "in-progress", "archived"];

export function getAllProjects(options: ProjectVisibilityOptions = {}): ProjectMeta[] {
  const projects = getProjectSlugs()
    .map((slug) => getProjectBySlug(slug, { includeDrafts: true }))
    .filter((project): project is Project => project !== null)
    .filter((project) => shouldIncludeProject(project, options))
    .map(toProjectMeta);

  return sortProjectsByOrder(projects);
}

export function getProjectBySlug(
  slug: string,
  options: ProjectVisibilityOptions = {},
): Project | null {
  const normalizedSlug = normalizeProjectSlug(slug);
  assertContentSlug(normalizedSlug, `project slug "${slug}"`);

  const filePath = path.join(PROJECTS_ROOT, normalizedSlug, "index.mdx");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const frontmatter = validateProjectFrontmatter(data, normalizedSlug);
  const project = toProject(frontmatter, content);

  if (!shouldIncludeProject(project, options)) {
    return null;
  }

  return project;
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((project) => project.featured);
}

function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_ROOT)) {
    return [];
  }

  return fs
    .readdirSync(PROJECTS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function toProject(frontmatter: ProjectFrontmatter, content: string): Project {
  const cover = resolveContentAsset({
    type: "project",
    slug: frontmatter.slug,
    asset: frontmatter.cover,
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    slug: frontmatter.slug,
    date: frontmatter.date,
    status: frontmatter.status,
    featured: frontmatter.featured,
    draft: frontmatter.draft ?? false,
    role: frontmatter.role,
    team: frontmatter.team,
    period: frontmatter.period,
    stacks: frontmatter.stacks,
    cover,
    links: frontmatter.links ?? {},
    relatedPosts: frontmatter.relatedPosts ?? [],
    metrics: frontmatter.metrics ?? [],
    company: frontmatter.company,
    content,
  };
}

function toProjectMeta(project: Project): ProjectMeta {
  const { content: _content, ...meta } = project;

  return meta;
}

function shouldIncludeProject(project: { draft: boolean }, options: ProjectVisibilityOptions): boolean {
  return options.includeDrafts === true || !project.draft;
}

function sortProjectsByOrder(projects: ProjectMeta[]): ProjectMeta[] {
  const order = readProjectOrder();
  const orderIndexBySlug = new Map(order.map((slug, index) => [slug, index]));

  return [...projects].sort((a, b) => {
    const aIndex = orderIndexBySlug.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderIndexBySlug.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    if (aIndex !== bIndex) {
      return aIndex - bIndex;
    }

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

function readProjectOrder(): string[] {
  if (!fs.existsSync(PROJECT_ORDER_PATH)) {
    return [];
  }

  const order = JSON.parse(fs.readFileSync(PROJECT_ORDER_PATH, "utf8")) as unknown;

  if (!Array.isArray(order)) {
    throw new Error("Invalid project-order.json: expected a string array.");
  }

  order.forEach((slug) => {
    if (typeof slug !== "string" || slug.trim().length === 0) {
      throw new Error("Invalid project-order.json: expected non-empty string values.");
    }
  });

  return order.map(normalizeProjectSlug);
}

function validateProjectFrontmatter(
  data: Record<string, unknown>,
  directorySlug: string,
): ProjectFrontmatter {
  const title = getRequiredString(data, "title");
  const description = getRequiredString(data, "description");
  const slug = normalizeProjectSlug(getRequiredString(data, "slug"));
  const date = getRequiredDateString(data, "date");
  const status = getRequiredProjectStatus(data, "status");
  const featured = getRequiredBoolean(data, "featured");
  const draft = getOptionalBoolean(data, "draft");
  const role = getRequiredString(data, "role");
  const team = getRequiredString(data, "team");
  const period = getRequiredPeriod(data, "period");
  const stacks = getRequiredStringArray(data, "stacks");
  const cover = getRequiredCover(data, "cover");
  const links = getOptionalLinks(data, "links");
  const relatedPosts = getOptionalStringArray(data, "relatedPosts");
  const metrics = getOptionalStringArray(data, "metrics");
  const company = getOptionalString(data, "company");

  if (slug !== directorySlug) {
    throw new Error(`Project slug mismatch: frontmatter "${slug}" does not match "${directorySlug}".`);
  }

  assertContentSlug(slug, `project(${directorySlug}).slug`);
  assertContentSlug(directorySlug, `project directory "${directorySlug}"`);

  return {
    title,
    description,
    slug,
    date,
    status,
    featured,
    draft,
    role,
    team,
    period,
    stacks,
    cover,
    links,
    relatedPosts,
    metrics,
    company,
  };
}

function normalizeProjectSlug(value: string): string {
  return normalizeContentSlug(value);
}

function getRequiredString(data: Record<string, unknown>, fieldName: string): string {
  const value = data[fieldName];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a non-empty string.`);
  }

  return value.trim();
}

function getOptionalString(data: Record<string, unknown>, fieldName: string): string | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a non-empty string.`);
  }

  return value.trim();
}

function getRequiredDateString(data: Record<string, unknown>, fieldName: string): string {
  const value = getRequiredString(data, fieldName);

  if (Number.isNaN(new Date(value).getTime())) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a valid date string.`);
  }

  return value;
}

function getRequiredBoolean(data: Record<string, unknown>, fieldName: string): boolean {
  const value = data[fieldName];

  if (typeof value !== "boolean") {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a boolean.`);
  }

  return value;
}

function getOptionalBoolean(data: Record<string, unknown>, fieldName: string): boolean | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "boolean") {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a boolean.`);
  }

  return value;
}

function getRequiredStringArray(data: Record<string, unknown>, fieldName: string): string[] {
  const value = data[fieldName];

  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a non-empty string array.`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Invalid project frontmatter "${fieldName}": expected string values.`);
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
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a string array.`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Invalid project frontmatter "${fieldName}": expected string values.`);
    }
  });

  return value.map((item) => item.trim());
}

function getRequiredProjectStatus(
  data: Record<string, unknown>,
  fieldName: string,
): ProjectStatus {
  const value = getRequiredString(data, fieldName);

  if (!PROJECT_STATUSES.includes(value as ProjectStatus)) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected a known project status.`);
  }

  return value as ProjectStatus;
}

function getRequiredPeriod(data: Record<string, unknown>, fieldName: string): ProjectPeriod {
  const value = data[fieldName];

  if (!isRecord(value)) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected an object.`);
  }

  return {
    start: getRequiredString(value, "start"),
    end: getRequiredString(value, "end"),
  };
}

function getRequiredCover(data: Record<string, unknown>, fieldName: string): ContentAssetInput {
  const value = data[fieldName];

  if (!isRecord(value)) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected an object.`);
  }

  return {
    src: getRequiredString(value, "src"),
    alt: getRequiredString(value, "alt"),
  };
}

function getOptionalLinks(data: Record<string, unknown>, fieldName: string): ProjectLinks | undefined {
  const value = data[fieldName];

  if (value === undefined) {
    return undefined;
  }

  if (!isRecord(value)) {
    throw new Error(`Invalid project frontmatter "${fieldName}": expected an object.`);
  }

  return {
    demo: getOptionalString(value, "demo"),
    github: getOptionalString(value, "github"),
    caseStudy: getOptionalString(value, "caseStudy"),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
