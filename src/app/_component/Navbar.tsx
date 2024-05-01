"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useContext, useEffect, useState } from "react";
import {} from "firebase/auth";
import Image, { StaticImageData } from "next/image";
import { ToggleTheme, ProgressBar } from "@/app/_component";
import { useTheme } from "next-themes";
import { useBreakpoints } from "../_hooks";
import { SideMenuContext } from "./ThemeAndSideProvider";
import { NAV_DATA } from "@/mocks/common";
import * as css from "@/app/_component/componentLayout.css";
import logoBlack from "/public/e-logo-black.png";
import logoWhite from "/public/e-logo-white.png";
import MENU_BLACK from "/public/menu-black.png";
import MENU_WHITE from "/public/menu-white.png";
import { signInWithPopup, GithubAuthProvider, getAuth } from "@/data/firestore";

type Props = {
  name: string;
  link: string;
  active: boolean;
};

type ProgressbarProps = {
  target: React.RefObject<HTMLDivElement>;
};

export default function Navbar({ target }: ProgressbarProps) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { checkMobile, checkDesktop } = useBreakpoints();
  const { isSideMenuOpen, toggleSideMenu } = useContext(SideMenuContext);

  const [imageUrl, setImageUrl] = useState<StaticImageData | null>(null);
  const isDarkMode = resolvedTheme === "light" ? false : true;

  useEffect(() => {
    setImageUrl(isDarkMode ? logoWhite : logoBlack);
  }, [isDarkMode]);

  return (
    <header className={css.navSectionWrapper}>
      <nav className={css.navSectionFlex}>
        <div className={css.navLeftSection}>
          <Link href="/" className={css.imageBox}>
            {imageUrl && <Image src={imageUrl} alt="블로그 로고" width={36} />}
          </Link>
          {checkDesktop && (
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
          )}
          {checkMobile && (
            <button
              className={css.mobileNavMenuButton}
              onClick={() => toggleSideMenu(!isSideMenuOpen)}
            >
              <Image
                src={isDarkMode ? MENU_WHITE : MENU_BLACK}
                width={25}
                alt="메뉴 버튼"
              />
            </button>
          )}
        </div>
        {checkDesktop && (
          <div className={css.navRightSection}>
            <GithubButton />
            <Link
              href="https://open.kakao.com/me/93jm"
              target="_blank"
              className={css.navRightBadge}
            >
              커피챗도 환영합니다
            </Link>
            <ToggleTheme />
          </div>
        )}
      </nav>
      <div className={css.navSectionBottomBar} />
      <ProgressBar target={target} />
    </header>
  );
}

export const NavButton = ({ name, link, active }: Props) => {
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

export const GithubButton = () => {
  const handleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <button className={css.gitHubButton} onClick={handleClick}>
      깃허브 테스트
    </button>
  );
};
