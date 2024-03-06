"use client";

import * as css from "@/app/_component/componentLayout.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import ProgressBar from "./ProgressBar";
import e100 from "/public/e-100.png";
import Image from "next/image";
import IMG_NOTION from "/public/notion.png";

type Props = {
  name: string;
  link: string;
  active: boolean;
};

type ProgressbarProps = {
  target: React.RefObject<HTMLDivElement>;
};

const NAV_DATA = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Project",
    link: "/projects",
  },
  {
    name: "Resume",
    link: "/resume",
  },
];

export default function Navbar({ target }: ProgressbarProps) {
  const pathname = usePathname();

  return (
    <header className={css.navSectionWrapper}>
      <nav className={css.navSectionFlex}>
        <div className={css.navLeftSection}>
          <Link href="/" className={css.imageBox}>
            <Image src={e100} alt="블로그 로고" width={35} height={35} />
          </Link>
          <ul className={css.navSectionGrid}>
            {NAV_DATA.map((nav, idx) => {
              return (
                <Fragment key={idx}>
                  <NavButton
                    name={nav.name}
                    link={nav.link}
                    active={
                      pathname === nav.link ||
                      (pathname === "/about" && nav.link === "/")
                    }
                  />
                </Fragment>
              );
            })}
          </ul>
        </div>
        <div className={css.navRightSection}>
          <Link
            href="https://open.kakao.com/me/93jm"
            target="_blank"
            className={css.navRightBadge}
          >
            커피챗도 환영합니다
          </Link>
          <Link
            href="https://93jm.notion.site/7cbfb7a93236454ab3e10f3d16780ad4?pvs=4"
            target="_blank"
          >
            <Image
              src={IMG_NOTION}
              className={css.imageBox}
              alt="노션 버튼"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </nav>
      <div className={css.navSectionBottomBar} />
      <ProgressBar target={target} />
    </header>
  );
}

const NavButton = ({ name, link, active }: Props) => {
  return (
    <li>
      {active ? (
        <Link href={link} className={css.navSectionActiveButton}>
          {name}
        </Link>
      ) : (
        <Link href={link} className={css.navSectionButton}>
          {name}
        </Link>
      )}
    </li>
  );
};
