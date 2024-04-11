"use client";

import * as css from "@/app/_component/componentLayout.css";
import { useBreakpoints } from "../_hooks";
import { Fragment, useContext, useEffect } from "react";
import { SideMenuContext } from "./ThemeAndSideProvider";
import { NAV_DATA } from "@/mocks/common";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import X_BLACK from "/public/x-black.png";
import X_WHITE from "/public/x-white.png";
import Image from "next/image";
import { flexRowBetween } from "../styles/layout";
import { ToggleTheme } from ".";

type Props = {
  name: string;
  link: string;
  active: boolean;
};

export default function MobileNavbar() {
  const pathname = usePathname();
  const { checkMobile } = useBreakpoints();
  const { resolvedTheme } = useTheme();
  const { isSideMenuOpen, toggleSideMenu } = useContext(SideMenuContext);
  const isDarkMode = resolvedTheme === "light" ? false : true;

  useEffect(() => {
    //페이지 이탈하여 컴포넌트 언마운트가 될때에
    return () => {
      toggleSideMenu(false);
    };
  }, []);

  if (!checkMobile || !isSideMenuOpen) {
    return null;
  }

  return (
    <>
      <div className={css.mobileNavDim} onClick={() => toggleSideMenu(false)} />
      <nav className={css.mobileNavContainer}>
        <div
          style={{
            ...flexRowBetween,
            marginBottom: 20,
          }}
        >
          <button
            className={css.mobileNavMenuButton}
            onClick={() => toggleSideMenu(false)}
          >
            <Image src={isDarkMode ? X_BLACK : X_WHITE} alt="닫기" width={25} />
          </button>
          <ToggleTheme />
        </div>

        <ul className={css.mobileNavGrid}>
          {NAV_DATA.map((nav, idx) => {
            return (
              <Fragment key={idx}>
                <MobileNavButton
                  name={nav.name}
                  link={nav.link}
                  active={pathname === nav.link}
                />
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export const MobileNavButton = ({ name, link, active }: Props) => {
  return (
    <li className={css.mobileNavMenuList}>
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
