import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  CONTENT_SLUG_PATTERN,
  getAllPosts,
  getAllProjects,
  getProjectBySlug,
} from "@/features/content";
import { ProjectArticleView } from "@/features/projects/components/ProjectArticleView";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isPublicProjectSlug(slug)) {
    return {
      title: "Project Not Found | Evanlee.dev",
    };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Evanlee.dev",
    };
  }

  return {
    title: `${project.title} | Evanlee.dev`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      publishedTime: project.date,
      images: [
        {
          url: `https://evanlee.dev${project.cover.publicUrl}`,
          alt: project.cover.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (!isPublicProjectSlug(slug)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedPosts = getAllPosts().filter((post) => project.relatedPosts.includes(post.slug));

  return <ProjectArticleView project={project} relatedPosts={relatedPosts} />;
}

function isPublicProjectSlug(value: string): boolean {
  return CONTENT_SLUG_PATTERN.test(value);
}
