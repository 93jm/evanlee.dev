import Link from "next/link";

import type { BlogPostMeta } from "@/features/content";

import * as css from "../styles/blog.css";

interface AdjacentPostNavigationProps {
  newerPost: BlogPostMeta | null;
  olderPost: BlogPostMeta | null;
}

export function AdjacentPostNavigation({
  newerPost,
  olderPost,
}: AdjacentPostNavigationProps) {
  if (!newerPost && !olderPost) {
    return null;
  }

  return (
    <nav className={css.adjacentNav} aria-label="인접한 블로그 글">
      {olderPost ? (
        <Link href={`/blog/${olderPost.slug}`} className={css.adjacentLink}>
          <span>이전 글</span>
          <strong>{olderPost.title}</strong>
        </Link>
      ) : (
        <div />
      )}
      {newerPost ? (
        <Link href={`/blog/${newerPost.slug}`} className={css.adjacentLink}>
          <span>다음 글</span>
          <strong>{newerPost.title}</strong>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
