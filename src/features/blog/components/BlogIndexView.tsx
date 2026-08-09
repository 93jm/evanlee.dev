import type { BlogPostMeta, Category, Tag } from "@/features/content";

import { BlogPostList } from "./BlogPostList";
import { BlogTaxonomyNav } from "./BlogTaxonomyNav";
import * as css from "../styles/blog.css";

interface BlogIndexViewProps {
  title: string;
  description: string;
  posts: BlogPostMeta[];
  categories: Category[];
  tags: Tag[];
  activeCategory?: string;
  activeTag?: string;
}

export function BlogIndexView({
  title,
  description,
  posts,
  categories,
  tags,
  activeCategory,
  activeTag,
}: BlogIndexViewProps) {
  return (
    <div className={css.blogIndex}>
      <header className={css.blogHero}>
        <p className={css.eyebrow}>Evanlee.dev v2</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className={css.blogIndexGrid}>
        <BlogTaxonomyNav
          categories={categories}
          tags={tags}
          activeCategory={activeCategory}
          activeTag={activeTag}
        />
        <section aria-label="블로그 글 목록">
          <BlogPostList posts={posts} emptyMessage="아직 공개된 글이 없습니다." />
        </section>
      </div>
    </div>
  );
}
