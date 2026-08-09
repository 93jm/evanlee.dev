import Image from "next/image";
import Link from "next/link";

import type { BlogPostMeta, Project } from "@/features/content";

import { ProjectMdx } from "../mdx-components/ProjectMdx";
import { formatProjectDate, formatProjectStatus, getProjectDateTime } from "../utils/format";
import * as css from "../styles/projects.css";

interface ProjectArticleViewProps {
  project: Project;
  relatedPosts: BlogPostMeta[];
}

const LINK_LABELS = {
  demo: "Demo",
  github: "GitHub",
  caseStudy: "Case study",
} as const;

const PROJECT_LINK_KEYS = ["demo", "github", "caseStudy"] as const;

export function ProjectArticleView({ project, relatedPosts }: ProjectArticleViewProps) {
  const projectLinks = PROJECT_LINK_KEYS.flatMap((key) => {
    const href = project.links[key];

    if (!href) {
      return [];
    }

    return [
      {
        key,
        label: LINK_LABELS[key],
        href,
      },
    ];
  });

  return (
    <article className={css.projectArticle}>
      <header className={css.projectArticleHeader}>
        <Link href="/projects" className={css.backLink}>
          Back to projects
        </Link>
        <p className={css.eyebrow}>{project.company ?? "Project"}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>

      <div className={css.projectCover}>
        <Image
          src={project.cover.publicUrl}
          alt={project.cover.alt}
          className={css.projectCoverImage}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 760px"
          unoptimized
        />
      </div>

      <div className={css.summaryGrid}>
        <section className={css.detailSection} aria-labelledby="project-details-title">
          <h2 id="project-details-title">Project Details</h2>
          <dl className={css.detailList}>
            <dt>Role</dt>
            <dd>{project.role}</dd>
            <dt>Team</dt>
            <dd>{project.team}</dd>
            <dt>Period</dt>
            <dd>
              {project.period.start} - {project.period.end}
            </dd>
            <dt>Status</dt>
            <dd>{formatProjectStatus(project.status)}</dd>
            <dt>Published</dt>
            <dd>
              <time dateTime={getProjectDateTime(project.date)}>
                {formatProjectDate(project.date)}
              </time>
            </dd>
          </dl>
        </section>

        <section className={css.detailSection} aria-labelledby="project-stack-title">
          <h2 id="project-stack-title">Stack</h2>
          <ul className={css.tagList}>
            {project.stacks.map((stack) => (
              <li key={stack} className={css.tag}>
                {stack}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.metrics.length > 0 && (
        <section className={css.detailSection} aria-labelledby="project-metrics-title">
          <h2 id="project-metrics-title">Metrics</h2>
          <ul className={css.metricList}>
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </section>
      )}

      {projectLinks.length > 0 && (
        <nav className={css.detailSection} aria-labelledby="project-links-title">
          <h2 id="project-links-title">Links</h2>
          <ul className={css.linkList}>
            {projectLinks.map((link) => (
              <li key={link.key}>
                <ProjectLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      )}

      {relatedPosts.length > 0 && (
        <section className={css.detailSection} aria-labelledby="project-related-posts-title">
          <h2 id="project-related-posts-title">Related Posts</h2>
          <ul className={css.relatedList}>
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className={css.relatedLink}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className={css.articleBody}>
        <ProjectMdx projectSlug={project.slug} source={project.content} />
      </div>
    </article>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={css.actionLink}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={css.actionLink} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
