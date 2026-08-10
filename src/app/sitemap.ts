import type { MetadataRoute } from "next";

import {
  getAllCategories,
  getAllPosts,
  getAllProjects,
  getAllTags,
} from "@/features/content";
import {
  getPublishedCategorySlugs,
  getPublishedTagSlugs,
} from "@/features/blog/utils/public-routes";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const posts = getAllPosts();
  const projects = getAllProjects();
  const publishedCategorySlugs = getPublishedCategorySlugs(posts);
  const publishedTagSlugs = getPublishedTagSlugs(posts);

  const staticRoutes = ["", "/about", "/resume", "/projects", "/blog"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  const categoryRoutes = getAllCategories()
    .filter((category) => publishedCategorySlugs.has(category.slug))
    .map((category) => ({
      url: `${siteConfig.url}/blog/category/${category.slug}`,
      lastModified: now,
    }));

  const tagRoutes = getAllTags()
    .filter((tag) => publishedTagSlugs.has(tag.slug))
    .map((tag) => ({
      url: `${siteConfig.url}/blog/tag/${tag.slug}`,
      lastModified: now,
    }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: project.date,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes, ...tagRoutes, ...projectRoutes];
}
