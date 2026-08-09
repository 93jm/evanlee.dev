import "server-only";

import fs from "fs";
import path from "path";

import {
  assertContentSlug,
  assertUniqueSlugs,
  normalizeContentSlug,
} from "../slugs";
import type { Category, Tag } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const BLOG_ROOT = path.join(CONTENT_ROOT, "blog");
const CATEGORIES_PATH = path.join(BLOG_ROOT, "categories.json");
const TAGS_PATH = path.join(BLOG_ROOT, "tags.json");

export function normalizeTaxonomySlug(value: string): string {
  return normalizeContentSlug(value);
}

export function getAllCategories(): Category[] {
  const categories = readJsonFile<Category[]>(CATEGORIES_PATH).map(validateCategory);
  assertUniqueSlugs(
    categories.map((category) => category.slug),
    "blog categories",
  );

  return categories;
}

export function getAllTags(): Tag[] {
  const tags = readJsonFile<Tag[]>(TAGS_PATH).map(validateTag);
  assertUniqueSlugs(
    tags.map((tag) => tag.slug),
    "blog tags",
  );

  return tags;
}

export function resolveCategory(categorySlug: string): Category {
  const normalizedSlug = normalizeTaxonomySlug(categorySlug);
  const category = getAllCategories().find((item) => item.slug === normalizedSlug);

  if (!category) {
    throw new Error(`Unknown blog category: ${categorySlug}`);
  }

  return category;
}

export function resolveTags(tagSlugs: string[]): Tag[] {
  const tagsBySlug = new Map(getAllTags().map((tag) => [tag.slug, tag]));

  return tagSlugs.map((tagSlug) => {
    const normalizedSlug = normalizeTaxonomySlug(tagSlug);
    const tag = tagsBySlug.get(normalizedSlug);

    if (!tag) {
      throw new Error(`Unknown blog tag: ${tagSlug}`);
    }

    return tag;
  });
}

function readJsonFile<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

function validateCategory(category: Category): Category {
  assertNonEmptyString(category.slug, "category.slug");
  assertNonEmptyString(category.label, `category(${category.slug}).label`);
  assertTaxonomySlug(category.slug, "category.slug");

  return {
    ...category,
    slug: category.slug,
  };
}

function validateTag(tag: Tag): Tag {
  assertNonEmptyString(tag.slug, "tag.slug");
  assertNonEmptyString(tag.label, `tag(${tag.slug}).label`);
  assertTaxonomySlug(tag.slug, "tag.slug");

  return {
    ...tag,
    slug: tag.slug,
  };
}

function assertTaxonomySlug(value: string, fieldName: string): void {
  if (value !== normalizeTaxonomySlug(value)) {
    throw new Error(`Invalid ${fieldName}: taxonomy slugs must already be normalized.`);
  }

  assertContentSlug(value, fieldName);
}

function assertNonEmptyString(value: unknown, fieldName: string): asserts value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid ${fieldName}: expected a non-empty string.`);
  }
}
