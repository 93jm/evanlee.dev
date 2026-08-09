import type { BlogPostMeta } from "@/features/content/blog/types";
import { CONTENT_SLUG_PATTERN } from "@/features/content/slugs";

export function isPublicContentSlug(value: string): boolean {
  return CONTENT_SLUG_PATTERN.test(value);
}

export function getPublishedCategorySlugs(posts: BlogPostMeta[]): Set<string> {
  return new Set(posts.map((post) => post.category.slug));
}

export function getPublishedTagSlugs(posts: BlogPostMeta[]): Set<string> {
  return new Set(posts.flatMap((post) => post.tags.map((tag) => tag.slug)));
}
