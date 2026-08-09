import Link from "next/link";
import type { ReactNode } from "react";

import {
  coreSkills,
  credentials,
  earlierExperiences,
  profileSummary,
  resumeHighlights,
  workExperiences,
} from "../data/profile";
import * as css from "../styles/profile.css";

export function ResumeView() {
  return (
    <article className={css.page}>
      <header className={css.resumeHeader}>
        <div className={css.heroCopy}>
          <p className={css.eyebrow}>Resume</p>
          <h1>
            {profileSummary.name} ({profileSummary.englishName})
          </h1>
          <p>{profileSummary.headline}</p>
        </div>
        <ul className={css.contactList} aria-label="연락처">
          <li>
            <a href={`mailto:${profileSummary.email}`} className={css.contactLink}>
              Email
            </a>
          </li>
          <li>
            <a
              href={profileSummary.github}
              className={css.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <Link href="/projects" className={css.contactLink}>
              Projects
            </Link>
          </li>
        </ul>
      </header>

      <section className={css.section} aria-labelledby="resume-summary-title">
        <div className={css.sectionHeader}>
          <p className={css.eyebrow}>Summary</p>
          <h2 id="resume-summary-title">핵심 요약</h2>
        </div>
        <ul className={css.highlightList}>
          {resumeHighlights.map((highlight) => (
            <li key={highlight} className={css.highlightItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section className={css.section} aria-labelledby="resume-skills-title">
        <div className={css.sectionHeader}>
          <p className={css.eyebrow}>Skills</p>
          <h2 id="resume-skills-title">주요 기술</h2>
        </div>
        <ul className={css.skillList}>
          {coreSkills.map((skill) => (
            <li key={skill} className={css.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className={css.section} aria-labelledby="resume-experience-title">
        <div className={css.sectionHeader}>
          <p className={css.eyebrow}>Experience</p>
          <h2 id="resume-experience-title">경력</h2>
          <p>가장 최근 경력과 제품 영향도가 큰 프로젝트 중심으로 정리했습니다.</p>
        </div>
        <div className={css.experienceList}>
          {workExperiences.map((experience) => (
            <section key={experience.company} className={css.companyBlock}>
              <div className={css.companyMeta}>
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <p>{experience.period}</p>
                <p>{experience.summary}</p>
              </div>
              <div className={css.projectStack}>
                {experience.projects.map((project) => {
                  const projectLink = "link" in project ? project.link : "";
                  const results = "results" in project ? project.results : [];

                  return (
                    <section key={project.title} className={css.resumeProject}>
                      <div className={css.projectTitleRow}>
                        <h4>{project.title}</h4>
                        {projectLink && (
                          <LinkOrAnchor
                            href={projectLink}
                            className={css.projectLink}
                            ariaLabel={`${project.title} 자세히 보기`}
                          >
                            자세히
                          </LinkOrAnchor>
                        )}
                      </div>
                      <p className={css.metaText}>{project.period}</p>
                      <p className={css.description}>{project.description}</p>
                      <ul className={css.bulletList}>
                        {project.contributions.map((contribution) => (
                          <li key={contribution}>{contribution}</li>
                        ))}
                        {results.map((result) => (
                          <li key={result}>{result}</li>
                        ))}
                      </ul>
                      <ul className={css.skillList} aria-label={`${project.title} 사용 기술`}>
                        {project.skills.map((skill) => (
                          <li key={skill} className={css.skill}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className={css.section} aria-labelledby="resume-background-title">
        <div className={css.sectionHeader}>
          <p className={css.eyebrow}>Background</p>
          <h2 id="resume-background-title">이전 경험과 자격</h2>
        </div>
        <div className={css.compactGrid}>
          <section aria-labelledby="earlier-experiences-title">
            <h3 id="earlier-experiences-title" className={css.eyebrow}>
              Earlier
            </h3>
            <ul className={css.compactList}>
              {earlierExperiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="credentials-title">
            <h3 id="credentials-title" className={css.eyebrow}>
              Credentials
            </h3>
            <ul className={css.compactList}>
              {credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </article>
  );
}

function LinkOrAnchor({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ariaLabel} 새 창에서 열기`}
    >
      {children}
    </a>
  );
}
