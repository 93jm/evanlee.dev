import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/features/content";
import { BlogArticleView } from "@/features/blog/components/BlogArticleView";
import { extractTableOfContents } from "@/features/blog/utils/headings";
import { getAdjacentPosts } from "@/features/blog/utils/posts";
import { isPublicContentSlug } from "@/features/blog/utils/public-routes";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isPublicContentSlug(slug)) {
    return {
      title: "Blog Post Not Found | Evanlee.dev",
    };
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Evanlee.dev",
    };
  }

  return {
    title: `${post.title} | Evanlee.dev`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!isPublicContentSlug(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllPosts();
  const toc = extractTableOfContents(post.content);
  const adjacentPosts = getAdjacentPosts(posts, post.slug);

  return <BlogArticleView post={post} toc={toc} {...adjacentPosts} />;
}
