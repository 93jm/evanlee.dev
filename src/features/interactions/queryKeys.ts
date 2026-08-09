export const interactionQueryKeys = {
  stats: (slug: string) => ["post-interactions", "stats", slug] as const,
  like: (slug: string, userKey: string) =>
    ["post-interactions", "like", slug, userKey] as const,
  likeScope: (slug: string) => ["post-interactions", "like", slug] as const,
  comments: (slug: string) => ["post-interactions", "comments", slug] as const,
  author: () => ["post-interactions", "comment-author"] as const,
};
