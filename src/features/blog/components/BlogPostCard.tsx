import Link from "next/link";
import { Badge } from "@seed-design/react";

import type { BlogPostMeta } from "@/features/content";

import { formatPostDate, getPostDateTime } from "../utils/date";
import * as css from "../styles/blog.css";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className={css.postCard}>
      <div className={css.postCardMeta}>
        <Link href={`/blog/category/${post.category.slug}`} className={css.categoryLink}>
          {post.category.label}
        </Link>
        <span aria-hidden="true">/</span>
        <time dateTime={getPostDateTime(post.date)}>{formatPostDate(post.date)}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}분</span>
      </div>
      <h2 className={css.postCardTitle}>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className={css.postCardDescription}>{post.description}</p>
      <ul className={css.tagList} aria-label={`${post.title} 태그`}>
        {post.tags.map((tag) => (
          <li key={tag.slug}>
            <Badge asChild tone="neutral" variant="weak">
              <Link href={`/blog/tag/${tag.slug}`}>#{tag.label}</Link>
            </Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
