import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllCategories,
  getAllPosts,
  getAllTags,
  getPostsByCategory,
} from "@/features/content";
import { BlogIndexView } from "@/features/blog/components/BlogIndexView";
import {
  getPublishedCategorySlugs,
  getPublishedTagSlugs,
  isPublicContentSlug,
} from "@/features/blog/utils/public-routes";

interface BlogCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  const publishedCategorySlugs = getPublishedCategorySlugs(getAllPosts());

  return getAllCategories()
    .filter((category) => publishedCategorySlugs.has(category.slug))
    .map((category) => ({
      category: category.slug,
    }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const posts = isPublicContentSlug(categorySlug) ? getPostsByCategory(categorySlug) : [];
  const category = getAllCategories().find((item) => item.slug === categorySlug);

  if (!category || posts.length === 0) {
    return {
      title: "Blog Category Not Found | Evanlee.dev",
    };
  }

  return {
    title: `${category.label} Posts | Evanlee.dev`,
    description: category.description ?? `${category.label} 카테고리의 블로그 글입니다.`,
    alternates: {
      canonical: `/blog/category/${category.slug}`,
    },
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category: categorySlug } = await params;

  if (!isPublicContentSlug(categorySlug)) {
    notFound();
  }

  const categories = getAllCategories();
  const category = categories.find((item) => item.slug === categorySlug);
  const posts = getPostsByCategory(categorySlug);

  if (!category || posts.length === 0) {
    notFound();
  }

  const allPosts = getAllPosts();
  const publishedCategorySlugs = getPublishedCategorySlugs(allPosts);
  const publishedTagSlugs = getPublishedTagSlugs(allPosts);
  const visibleCategories = categories.filter((item) => publishedCategorySlugs.has(item.slug));
  const visibleTags = getAllTags().filter((tag) => publishedTagSlugs.has(tag.slug));

  return (
    <BlogIndexView
      title={`${category.label} Posts`}
      description={category.description ?? `${category.label} 카테고리의 블로그 글입니다.`}
      posts={posts}
      categories={visibleCategories}
      tags={visibleTags}
      activeCategory={category.slug}
    />
  );
}
