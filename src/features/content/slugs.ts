export const CONTENT_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function normalizeContentSlug(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function assertContentSlug(value: string, fieldName: string): void {
  if (!CONTENT_SLUG_PATTERN.test(value)) {
    throw new Error(
      `Invalid ${fieldName}: expected lowercase kebab-case using letters, numbers, and single hyphens.`,
    );
  }
}

export function assertUniqueSlugs(slugs: string[], sourceName: string): void {
  const seenSlugs = new Set<string>();

  slugs.forEach((slug) => {
    if (seenSlugs.has(slug)) {
      throw new Error(`Duplicate slug "${slug}" in ${sourceName}.`);
    }

    seenSlugs.add(slug);
  });
}
