import Link from "next/link";

import { AppShell } from "@/components/layout";

import * as css from "./home.css";

export default function Home() {
  const links = [
    {
      href: "/about",
      label: "About",
      description: "저를 소개하는 페이지",
    },
    {
      href: "/projects",
      label: "Projects",
      description: "작업과 포트폴리오",
    },
    {
      href: "/resume",
      label: "Resume",
      description: "경력과 이력 정리",
    },
    {
      href: "/blog",
      label: "Blog",
      description: "기술 문서와 기록",
    },
  ] as const;

  return (
    <AppShell mainClassName={css.homeShell}>
      <section className={css.intro} aria-labelledby="home-title">
        <p className={css.eyebrow}>Evan Lee · Frontend Developer</p>
        <h1 id="home-title" className={css.title}>
          제품의 흐름을 읽고, 오래 유지되는 프론트엔드를 만듭니다.
        </h1>
        <p className={css.description}>
          v2 포트폴리오 블로그는 소개, 프로젝트, 이력, 기술 기록을 하나의
          일관된 경험으로 다시 설계하는 중입니다.
        </p>
      </section>

      <nav className={css.linkGrid} aria-label="주요 페이지">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={css.linkItem}>
            <span className={css.linkLabel}>{link.label}</span>
            <span className={css.linkDescription}>{link.description}</span>
          </Link>
        ))}
      </nav>
    </AppShell>
  );
}
