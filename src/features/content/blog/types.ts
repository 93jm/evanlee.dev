import type { ContentAsset, ContentAssetInput } from "../assets";

export interface Category {
  slug: string;
  label: string;
  description?: string;
}

export interface Tag {
  slug: string;
  label: string;
}

export type BlogCover = ContentAsset;

export interface BlogSeries {
  id: string;
  order: number;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedAt: string;
  category: Category;
  tags: Tag[];
  draft: boolean;
  featured: boolean;
  readingTime: number;
  cover?: BlogCover;
  series?: BlogSeries;
  canonicalUrl?: string;
  relatedProjects: string[];
  relatedPosts: string[];
  ogImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  draft: boolean;
  featured?: boolean;
  cover?: ContentAssetInput;
  series?: BlogSeries;
  canonicalUrl?: string;
  relatedProjects?: string[];
  relatedPosts?: string[];
  readingTimeOverride?: number;
  ogImage?: string;
}

export interface ContentVisibilityOptions {
  includeDrafts?: boolean;
}
