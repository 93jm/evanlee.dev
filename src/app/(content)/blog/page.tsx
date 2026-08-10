import type { Metadata } from "next";

import { getAllCategories, getAllPosts, getAllTags } from "@/features/content";
import { BlogIndexView } from "@/features/blog/components/BlogIndexView";
import {
  getPublishedCategorySlugs,
  getPublishedTagSlugs,
} from "@/features/blog/utils/public-routes";

export const metadata: Metadata = {
  title: "Blog | Evanlee.dev",
  description: "Evan Lee가 프론트엔드, 아키텍처, 프로젝트 경험을 기록하는 기술 블로그입니다.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Evanlee.dev",
    description: "Evan Lee가 프론트엔드, 아키텍처, 프로젝트 경험을 기록하는 기술 블로그입니다.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Evanlee.dev",
    description: "Evan Lee가 프론트엔드, 아키텍처, 프로젝트 경험을 기록하는 기술 블로그입니다.",
    images: ["/ogImage.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const publishedCategorySlugs = getPublishedCategorySlugs(posts);
  const publishedTagSlugs = getPublishedTagSlugs(posts);
  const categories = getAllCategories().filter((category) =>
    publishedCategorySlugs.has(category.slug),
  );
  const tags = getAllTags().filter((tag) => publishedTagSlugs.has(tag.slug));

  return (
    <BlogIndexView
      title="기술 블로그"
      description="프론트엔드 개발, 제품을 만드는 과정, 유지보수 가능한 코드 구조에 대해 기록합니다."
      posts={posts}
      categories={categories}
      tags={tags}
    />
  );
}
