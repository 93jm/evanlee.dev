import Image from "next/image";
import Link from "next/link";

import type { ProjectMeta } from "@/features/content";

import { formatProjectDate, formatProjectStatus, getProjectDateTime } from "../utils/format";
import * as css from "../styles/projects.css";

interface ProjectIndexViewProps {
  projects: ProjectMeta[];
}

export function ProjectIndexView({ projects }: ProjectIndexViewProps) {
  return (
    <section className={css.projectIndex} aria-labelledby="projects-title">
      <header className={css.projectHero}>
        <p className={css.eyebrow}>Projects</p>
        <h1 id="projects-title">제품과 코드 사이의 기록</h1>
        <p>
          문제 정의, 역할, 구현 방향, 결과를 함께 남긴 프로젝트 기록입니다. 각 프로젝트는
          MDX 기반 case study로 관리합니다.
        </p>
      </header>

      {projects.length > 0 ? (
        <ul className={css.projectList}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className={css.projectCard}>
                <div className={css.projectCardMedia}>
                  <Image
                    src={project.cover.publicUrl}
                    alt={project.cover.alt}
                    className={css.projectCardImage}
                    fill
                    sizes="(max-width: 800px) 100vw, 220px"
                    unoptimized
                  />
                </div>
                <div className={css.projectCardBody}>
                  <div className={css.projectCardHeader}>
                    <h2>{project.title}</h2>
                    <span className={css.projectStatus}>{formatProjectStatus(project.status)}</span>
                  </div>
                  <p className={css.projectDescription}>{project.description}</p>
                  <div className={css.projectCardMeta}>
                    <span>{project.role}</span>
                    <span aria-hidden="true">/</span>
                    <span>{project.team}</span>
                    <span aria-hidden="true">/</span>
                    <time dateTime={getProjectDateTime(project.date)}>
                      {formatProjectDate(project.date)}
                    </time>
                  </div>
                  <ul className={css.tagList} aria-label={`${project.title} 기술 스택`}>
                    {project.stacks.slice(0, 6).map((stack) => (
                      <li key={stack} className={css.tag}>
                        {stack}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.emptyState}>아직 공개된 프로젝트가 없습니다.</p>
      )}
    </section>
  );
}
