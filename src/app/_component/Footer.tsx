"use client";

import * as css from "@/app/_component/componentLayout.css";
import IMG_GITHUB_BLACK from "/public/github.png";
import IMG_GITHUB_WHITE from "/public/github_white.png";
import IMG_INSTAGRAM_BLACK from "/public/instagram.png";
import IMG_INSTAGRAM_WHITE from "/public/instagram_white.png";
import IMG_NOTION_BLACK from "/public/notion.png";
import IMG_NOTION_WHITE from "/public/notion_white.png";
import IMG_KAKAO_BLACK from "/public/kakao.png";
import IMG_KAKAO_WHITE from "/public/kakao_white.png";
import IMG_BLOG_BLACK from "/public/blog.png";
import IMG_BLOG_WHITE from "/public/blog_white.png";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const IMG_ICON = [
  {
    id: "github",
    lightSrc: IMG_GITHUB_BLACK,
    darkSrc: IMG_GITHUB_WHITE,
    link: "https://github.com/93jm",
  },
  {
    id: "instagram",
    lightSrc: IMG_INSTAGRAM_BLACK,
    darkSrc: IMG_INSTAGRAM_WHITE,
    link: "https://www.instagram.com/meeeeen93",
  },
  {
    id: "notion",
    lightSrc: IMG_NOTION_BLACK,
    darkSrc: IMG_NOTION_WHITE,
    link: "https://93jm.notion.site/7cbfb7a93236454ab3e10f3d16780ad4?pvs=4",
  },
  {
    id: "kakao",
    lightSrc: IMG_KAKAO_BLACK,
    darkSrc: IMG_KAKAO_WHITE,
    link: "https://open.kakao.com/me/93jm",
  },
  {
    id: "blog",
    lightSrc: IMG_BLOG_BLACK,
    darkSrc: IMG_BLOG_WHITE,
    link: "https://meeeeen93.tistory.com/",
  },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "light" ? false : true;
  return (
    <footer className={css.footerSectionWrapper}>
      <div className={css.footerLinkWrapper}>
        {IMG_ICON.map((item) => (
          <div key={item.id}>
            <Link href={item.link} target="_blank">
              <Image
                src={isDarkMode ? item.darkSrc : item.lightSrc}
                alt={item.id}
                width={30}
                height={30}
              />
            </Link>
          </div>
        ))}
      </div>
      <p>© 2024 Jungmin Lee </p>
    </footer>
  );
}
