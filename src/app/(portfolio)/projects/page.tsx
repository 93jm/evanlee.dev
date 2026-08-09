import type { Metadata } from "next";

import { getAllProjects } from "@/features/content";
import { ProjectIndexView } from "@/features/projects/components/ProjectIndexView";

export const metadata: Metadata = {
  title: "Projects | Evanlee.dev",
  description: "Evan Lee가 진행한 제품, 포트폴리오, 프론트엔드 프로젝트 기록입니다.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Evanlee.dev",
    description: "Evan Lee가 진행한 제품, 포트폴리오, 프론트엔드 프로젝트 기록입니다.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Evanlee.dev",
    description: "Evan Lee가 진행한 제품, 포트폴리오, 프론트엔드 프로젝트 기록입니다.",
    images: ["/ogImage.png"],
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return <ProjectIndexView projects={projects} />;
}
