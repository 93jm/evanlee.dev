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

const MAIN_URL = "https://evanlee-dev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const posts = getAllPosts();
  const projects = getAllProjects();
  const publishedCategorySlugs = getPublishedCategorySlugs(posts);
  const publishedTagSlugs = getPublishedTagSlugs(posts);

  const staticRoutes = ["", "/about", "/resume", "/projects", "/blog"].map((route) => ({
    url: `${MAIN_URL}${route}`,
    lastModified: now,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${MAIN_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  const categoryRoutes = getAllCategories()
    .filter((category) => publishedCategorySlugs.has(category.slug))
    .map((category) => ({
      url: `${MAIN_URL}/blog/category/${category.slug}`,
      lastModified: now,
    }));

  const tagRoutes = getAllTags()
    .filter((tag) => publishedTagSlugs.has(tag.slug))
    .map((tag) => ({
      url: `${MAIN_URL}/blog/tag/${tag.slug}`,
      lastModified: now,
    }));

  const projectRoutes = projects.map((project) => ({
    url: `${MAIN_URL}/projects/${project.slug}`,
    lastModified: project.date,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes, ...tagRoutes, ...projectRoutes];
}
