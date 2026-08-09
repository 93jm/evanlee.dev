import type { BlogPostMeta } from "@/features/content";

export interface AdjacentPosts {
  newerPost: BlogPostMeta | null;
  olderPost: BlogPostMeta | null;
}

export function getAdjacentPosts(posts: BlogPostMeta[], slug: string): AdjacentPosts {
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {
      newerPost: null,
      olderPost: null,
    };
  }

  return {
    newerPost: posts[currentIndex - 1] ?? null,
    olderPost: posts[currentIndex + 1] ?? null,
  };
}
