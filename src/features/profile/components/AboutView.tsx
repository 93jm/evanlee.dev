import Image from "next/image";
import Link from "next/link";

import { aboutPrinciples, profileSummary } from "../data/profile";
import * as css from "../styles/profile.css";

import profileImage from "/public/standMe1.jpeg";

const quickFacts = [
  ["Role", profileSummary.role],
  ["Focus", "Frontend, UX, Product Quality"],
  ["Base", profileSummary.location],
  ["Stack", "React, Next.js, TypeScript"],
] as const;

export function AboutView() {
  return (
    <article className={css.page}>
      <header className={css.hero}>
        <div className={css.heroCopy}>
          <p className={css.eyebrow}>About</p>
          <h1>{profileSummary.headline}</h1>
          <p>{profileSummary.introduction}</p>
          <p>
            저는 좋은 개발자가 되기 전에 좋은 동료가 먼저 되어야 한다고 생각합니다.
            문제를 같이 정의하고, 이유를 설명할 수 있는 선택을 하고, 제품을 사용하는
            사람의 입장에서 세부 흐름을 확인하는 일을 중요하게 봅니다.
          </p>
        </div>
        <div className={css.profilePhoto}>
          <Image
            src={profileImage}
            alt="발표 중인 이정민"
            className={css.image}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 280px"
          />
        </div>
      </header>

      <dl className={css.quickFacts}>
        {quickFacts.map(([label, value]) => (
          <div key={label} className={css.quickFactItem}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <section className={css.section} aria-labelledby="about-principles-title">
        <div className={css.sectionHeader}>
          <p className={css.eyebrow}>Working Principles</p>
          <h2 id="about-principles-title">일할 때 반복해서 지키는 기준</h2>
        </div>
        <div className={css.principleGrid}>
          {aboutPrinciples.map((principle) => (
            <section key={principle.title} className={css.principleItem}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </section>
          ))}
        </div>
      </section>

      <section className={css.section} aria-labelledby="about-now-title">
        <div className={css.sectionHeader}>
          <p className={css.eyebrow}>Now</p>
          <h2 id="about-now-title">지금 집중하고 있는 것</h2>
          <p>
            개인 블로그 포트폴리오 v2를 다시 만들며 콘텐츠 모델, SEO, 접근성, 디자인
            시스템, Firebase 기반 인터랙션을 하나의 제품 경험으로 정리하고 있습니다.
          </p>
        </div>
        <Link href="/projects/evanlee-v2-redesign" className={css.contactLink}>
          Evanlee.dev v2 프로젝트 보기
        </Link>
      </section>
    </article>
  );
}
