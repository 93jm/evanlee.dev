import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllCategories, getAllPosts, getAllTags, getPostsByTag } from "@/features/content";
import { BlogIndexView } from "@/features/blog/components/BlogIndexView";
import {
  getPublishedCategorySlugs,
  getPublishedTagSlugs,
  isPublicContentSlug,
} from "@/features/blog/utils/public-routes";

interface BlogTagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export function generateStaticParams() {
  const publishedTagSlugs = getPublishedTagSlugs(getAllPosts());

  return getAllTags()
    .filter((tag) => publishedTagSlugs.has(tag.slug))
    .map((tag) => ({
      tag: tag.slug,
    }));
}

export async function generateMetadata({ params }: BlogTagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const posts = isPublicContentSlug(tagSlug) ? getPostsByTag(tagSlug) : [];
  const tag = getAllTags().find((item) => item.slug === tagSlug);

  if (!tag || posts.length === 0) {
    return {
      title: "Blog Tag Not Found | Evanlee.dev",
    };
  }

  return {
    title: `#${tag.label} Posts | Evanlee.dev`,
    description: `#${tag.label} 태그가 붙은 Evanlee.dev 기술 블로그 글입니다.`,
    alternates: {
      canonical: `/blog/tag/${tag.slug}`,
    },
  };
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { tag: tagSlug } = await params;

  if (!isPublicContentSlug(tagSlug)) {
    notFound();
  }

  const tags = getAllTags();
  const tag = tags.find((item) => item.slug === tagSlug);
  const posts = getPostsByTag(tagSlug);

  if (!tag || posts.length === 0) {
    notFound();
  }

  const allPosts = getAllPosts();
  const publishedCategorySlugs = getPublishedCategorySlugs(allPosts);
  const publishedTagSlugs = getPublishedTagSlugs(allPosts);
  const categories = getAllCategories().filter((category) =>
    publishedCategorySlugs.has(category.slug),
  );
  const visibleTags = tags.filter((item) => publishedTagSlugs.has(item.slug));

  return (
    <BlogIndexView
      title={`#${tag.label}`}
      description={`#${tag.label} 태그가 붙은 글을 모았습니다.`}
      posts={posts}
      categories={categories}
      tags={visibleTags}
      activeTag={tag.slug}
    />
  );
}
