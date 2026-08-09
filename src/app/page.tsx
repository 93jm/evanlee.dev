import Link from "next/link";

import { AppShell } from "@/components/layout";
import { getLatestPosts } from "@/features/content/blog/loader";
import { getFeaturedProjects } from "@/features/content/projects/loader";

import * as css from "./home.css";

const principles = [
  {
    label: "Product-minded",
    description: "기능 구현보다 사용자가 실제로 통과하는 흐름과 지표를 먼저 봅니다.",
  },
  {
    label: "Readable architecture",
    description: "동료와 미래의 내가 빠르게 이해하고 바꿀 수 있는 구조를 선호합니다.",
  },
  {
    label: "Quality by default",
    description: "접근성, SEO, 성능, 운영 리스크를 구현 후반이 아니라 설계 초반에 둡니다.",
  },
] as const;

const primaryLinks = [
  {
    href: "/projects",
    label: "프로젝트 보기",
  },
  {
    href: "/blog",
    label: "기술 글 읽기",
  },
] as const;

const profileLinks = [
  {
    href: "/about",
    label: "About",
    description: "일하는 방식과 관심사를 정리합니다.",
  },
  {
    href: "/resume",
    label: "Resume",
    description: "경력, 경험, 이력 정보를 모아둡니다.",
  },
  {
    href: "/projects",
    label: "Projects",
    description: "문제 해결 과정과 결과물을 보여줍니다.",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "프론트엔드와 제품 개발 기록을 남깁니다.",
  },
] as const;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 2);
  const latestPosts = getLatestPosts(3);

  return (
    <AppShell mainClassName={css.homeShell}>
      <section className={css.hero} aria-labelledby="home-title">
        <div className={css.heroCopy}>
          <p className={css.eyebrow}>Evan Lee · Frontend Developer</p>
          <h1 id="home-title" className={css.title}>
            제품의 흐름을 읽고, 오래 유지되는 프론트엔드를 만듭니다.
          </h1>
          <p className={css.description}>
            QA 경험을 바탕으로 요구사항, 사용자 경험, 운영 품질을 함께 보는
            프론트엔드 개발자입니다. 이곳에는 제가 만든 제품, 배운 것, 그리고
            더 나은 인터페이스를 만들기 위한 기록을 모읍니다.
          </p>
          <div className={css.actionRow}>
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={css.primaryLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <aside className={css.snapshot} aria-label="프로필 요약">
          <dl className={css.snapshotList}>
            <div>
              <dt>Focus</dt>
              <dd>Frontend, UX, Product Quality</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>React, Next.js, TypeScript</dd>
            </div>
            <div>
              <dt>Now</dt>
              <dd>Portfolio Blog v2 redesign</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className={css.section} aria-labelledby="principles-title">
        <div className={css.sectionHeader}>
          <p className={css.sectionLabel}>Working Principles</p>
          <h2 id="principles-title">좋은 제품을 만들기 위해 반복해서 확인하는 기준</h2>
        </div>
        <div className={css.principleGrid}>
          {principles.map((principle) => (
            <article key={principle.label} className={css.principleItem}>
              <h3>{principle.label}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={css.section} aria-labelledby="projects-title">
        <div className={css.sectionHeaderRow}>
          <div className={css.sectionHeader}>
            <p className={css.sectionLabel}>Selected Work</p>
            <h2 id="projects-title">최근에 정리한 프로젝트</h2>
          </div>
          <Link href="/projects" className={css.textLink}>
            전체 프로젝트
          </Link>
        </div>
        {featuredProjects.length > 0 ? (
          <div className={css.projectGrid}>
            {featuredProjects.map((project) => (
              <article key={project.slug} className={css.projectItem}>
                <div>
                  <p className={css.metaText}>
                    {project.role} · {project.period.start} - {project.period.end}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className={css.tagList} aria-label={`${project.title} 기술 스택`}>
                  {project.stacks.slice(0, 5).map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <p className={css.emptyText}>아직 공개된 대표 프로젝트가 없습니다.</p>
        )}
      </section>

      <section className={css.section} aria-labelledby="posts-title">
        <div className={css.sectionHeaderRow}>
          <div className={css.sectionHeader}>
            <p className={css.sectionLabel}>Writing</p>
            <h2 id="posts-title">최근 기술 글</h2>
          </div>
          <Link href="/blog" className={css.textLink}>
            블로그로 이동
          </Link>
        </div>
        {latestPosts.length > 0 ? (
          <div className={css.postList}>
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={css.postItem}>
                <span className={css.metaText}>
                  {formatDate(post.date)} · {post.category.label} · {post.readingTime}분
                </span>
                <strong>{post.title}</strong>
                <span>{post.description}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className={css.emptyText}>아직 공개된 글이 없습니다.</p>
        )}
      </section>

      <nav className={css.profileGrid} aria-label="프로필 상세 페이지">
        {profileLinks.map((link) => (
          <Link key={link.href} href={link.href} className={css.profileItem}>
            <span className={css.profileLabel}>{link.label}</span>
            <span className={css.profileDescription}>{link.description}</span>
          </Link>
        ))}
      </nav>
    </AppShell>
  );
}
