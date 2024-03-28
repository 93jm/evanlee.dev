"use client";

import * as css from "@/app/_component/componentLayout.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import logoBlack from "/public/e-logo-black.png";
import logoWhite from "/public/e-logo-white.png";
import Image from "next/image";
import { ToggleTheme, ProgressBar } from "@/app/_component";
import { useTheme } from "next-themes";

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
    link: "/about",
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
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "light" ? false : true;

  return (
    <header className={css.navSectionWrapper}>
      <nav className={css.navSectionFlex}>
        <div className={css.navLeftSection}>
          <Link href="/" className={css.imageBox}>
            <Image
              src={isDarkMode ? logoWhite : logoBlack}
              alt="블로그 로고"
              width={isDarkMode ? 36 : 35}
              height={isDarkMode ? 36 : 35}
            />
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
          <ToggleTheme />
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
