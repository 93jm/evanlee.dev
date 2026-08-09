import type { BlogPostMeta } from "@/features/content";

import { BlogPostCard } from "./BlogPostCard";
import * as css from "../styles/blog.css";

interface BlogPostListProps {
  posts: BlogPostMeta[];
  emptyMessage: string;
}

export function BlogPostList({ posts, emptyMessage }: BlogPostListProps) {
  if (posts.length === 0) {
    return <p className={css.emptyState}>{emptyMessage}</p>;
  }

  return (
    <div className={css.postList}>
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
