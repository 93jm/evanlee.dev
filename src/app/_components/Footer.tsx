import * as css from "@/styles/layout.css";
import IMG_GITHUB from "/public/github.png";
import IMG_INSTAGRAM from "/public/instagram.png";
import IMG_NOTION from "/public/notion.png";
import IMG_KAKAO from "/public/kakao.png";
import IMG_BLOG from "/public/blog.png";
import Image from "next/image";
import Link from "next/link";

const IMG_ICON = [
  {
    id: "github",
    src: IMG_GITHUB,
    link: "https://github.com/93jm",
  },
  {
    id: "instagram",
    src: IMG_INSTAGRAM,
    link: "https://www.instagram.com/meeeeen93",
  },
  {
    id: "notion",
    src: IMG_NOTION,
    link: "https://93jm.notion.site/7cbfb7a93236454ab3e10f3d16780ad4?pvs=4",
  },
  {
    id: "kakao",
    src: IMG_KAKAO,
    link: "https://open.kakao.com/me/93jm",
  },
  {
    id: "blog",
    src: IMG_BLOG,
    link: "https://meeeeen93.tistory.com/",
  },
];

export default function Footer() {
  return (
    <footer className={css.footerSectionWrapper}>
      <div className={css.footerLinkWrapper}>
        {IMG_ICON.map((item) => (
          <div key={item.id}>
            <Link href={item.link} target="_blank">
              <Image src={item.src} alt={item.id} width={30} height={30} />
            </Link>
          </div>
        ))}
      </div>
      <p>© 2024 Jungmin Lee </p>
    </footer>
  );
}
