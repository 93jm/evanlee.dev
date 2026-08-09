import Link from "next/link";
import { Badge } from "@seed-design/react";

import type { BlogPost, BlogPostMeta } from "@/features/content";

import { BlogMdx } from "../mdx-components/BlogMdx";
import { formatPostDate, getPostDateTime } from "../utils/date";
import type { TableOfContentsItem } from "../utils/headings";
import { AdjacentPostNavigation } from "./AdjacentPostNavigation";
import { BlogInteractionSlot } from "./BlogInteractionSlot";
import { TableOfContents } from "./TableOfContents";
import * as css from "../styles/blog.css";

interface BlogArticleViewProps {
  post: BlogPost;
  toc: TableOfContentsItem[];
  newerPost: BlogPostMeta | null;
  olderPost: BlogPostMeta | null;
}

export function BlogArticleView({ post, toc, newerPost, olderPost }: BlogArticleViewProps) {
  const hasUpdatedDate = post.updatedAt !== post.date;

  return (
    <div className={css.articleGrid}>
      <article className={css.article}>
        <header className={css.articleHeader}>
          <Link href={`/blog/category/${post.category.slug}`} className={css.categoryLink}>
            {post.category.label}
          </Link>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className={css.articleMeta}>
            <time dateTime={getPostDateTime(post.date)}>{formatPostDate(post.date)}</time>
            {hasUpdatedDate && (
              <>
                <span aria-hidden="true">/</span>
                <span>Updated {formatPostDate(post.updatedAt)}</span>
              </>
            )}
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}분 읽기</span>
          </div>
          <ul className={css.tagList} aria-label="글 태그">
            {post.tags.map((tag) => (
              <li key={tag.slug}>
                <Badge asChild tone="neutral" variant="weak">
                  <Link href={`/blog/tag/${tag.slug}`}>#{tag.label}</Link>
                </Badge>
              </li>
            ))}
          </ul>
        </header>
        <div className={css.articleBody}>
          <BlogMdx postSlug={post.slug} source={post.content} />
        </div>
        <AdjacentPostNavigation newerPost={newerPost} olderPost={olderPost} />
        <BlogInteractionSlot slug={post.slug} />
      </article>
      <aside className={css.articleAside}>
        <TableOfContents items={toc} />
      </aside>
    </div>
  );
}
