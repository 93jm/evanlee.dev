import type { ContentAsset, ContentAssetInput } from "../assets";

export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectCover = ContentAsset;

export interface ProjectPeriod {
  start: string;
  end: string;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  caseStudy?: string;
}

export interface ProjectMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  status: ProjectStatus;
  featured: boolean;
  draft: boolean;
  role: string;
  team: string;
  period: ProjectPeriod;
  stacks: string[];
  cover: ProjectCover;
  links: ProjectLinks;
  relatedPosts: string[];
  metrics: string[];
  company?: string;
}

export interface Project extends ProjectMeta {
  content: string;
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  status: ProjectStatus;
  featured: boolean;
  draft?: boolean;
  role: string;
  team: string;
  period: ProjectPeriod;
  stacks: string[];
  cover: ContentAssetInput;
  links?: ProjectLinks;
  relatedPosts?: string[];
  metrics?: string[];
  company?: string;
}
