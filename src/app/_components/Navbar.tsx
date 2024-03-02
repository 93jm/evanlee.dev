"use client";

import * as css from "@/styles/layout.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import ProgressBar from "./ProgressBar";
import e100 from "/public/e-100.png";
import Image from "next/image";

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

  return (
    <header className={css.navSectionWrapper}>
      <nav className={css.navSectionFlex}>
        <div>
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
                    active={pathname === nav.link}
                  />
                </Fragment>
              );
            })}
          </ul>
        </div>
        <div></div>
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
