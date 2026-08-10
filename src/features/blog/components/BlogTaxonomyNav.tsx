import Link from "next/link";
import { Badge } from "@seed-design/react";

import type { Category, Tag } from "@/features/content";

import * as css from "../styles/blog.css";

interface BlogTaxonomyNavProps {
  categories: Category[];
  tags: Tag[];
  activeCategory?: string;
  activeTag?: string;
}

export function BlogTaxonomyNav({
  categories,
  tags,
  activeCategory,
  activeTag,
}: BlogTaxonomyNavProps) {
  return (
    <aside className={css.taxonomyPanel} aria-label="블로그 분류">
      <section>
        <h2 className={css.taxonomyTitle}>카테고리</h2>
        <div className={css.taxonomyList}>
          <Badge asChild tone={activeCategory ? "neutral" : "brand"} variant="weak">
            <Link href="/blog">전체</Link>
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.slug}
              asChild
              tone={activeCategory === category.slug ? "brand" : "neutral"}
              variant="weak"
            >
              <Link href={`/blog/category/${category.slug}`}>{category.label}</Link>
            </Badge>
          ))}
        </div>
      </section>
      <section>
        <h2 className={css.taxonomyTitle}>태그</h2>
        <div className={css.taxonomyList}>
          {tags.map((tag) => (
            <Badge
              key={tag.slug}
              asChild
              tone={activeTag === tag.slug ? "brand" : "neutral"}
              variant="weak"
            >
              <Link href={`/blog/tag/${tag.slug}`}>#{tag.label}</Link>
            </Badge>
          ))}
        </div>
      </section>
    </aside>
  );
}
