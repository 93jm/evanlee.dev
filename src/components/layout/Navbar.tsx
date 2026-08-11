"use client";

import Link from "next/link";
import { ActionButton } from "@seed-design/react";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";
import { ToggleTheme, ProgressBar } from "@/components";
import { useTheme } from "next-themes";
import { SideMenuContext } from "@/provider/ThemeProvider";
import { NAV_DATA, isV2NavItemActive } from "@/mocks/common";
import * as css from "@/components/componentLayout.css";
import logoBlack from "/public/logo-dark.svg";
import logoWhite from "/public/logo-light.svg";

type Props = {
  label: string;
  href: string;
  active: boolean;
};

type ProgressbarProps = {
  target: React.RefObject<HTMLDivElement | null>;
};

export default function Navbar({ target }: ProgressbarProps) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { isSideMenuOpen, toggleSideMenu } = useContext(SideMenuContext);
  const isDarkMode = resolvedTheme === "dark";
  const logoImage = isDarkMode ? logoWhite : logoBlack;

  return (
    <header className={css.navSectionWrapper}>
      <nav className={css.navSectionFlex}>
        <div className={css.navLeftSection}>
          <Link href="/" className={css.imageBox}>
            <Image src={logoImage} alt="블로그 로고" width={35} />
          </Link>
          <ul className={css.navSectionGrid}>
            {NAV_DATA.map((nav) => (
              <NavButton
                key={nav.id}
                label={nav.label}
                href={nav.href}
                active={isV2NavItemActive(pathname, nav)}
              />
            ))}
          </ul>
          <button
            type="button"
            className={css.mobileNavMenuButton}
            aria-label={isSideMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-controls="mobile-navigation"
            aria-expanded={isSideMenuOpen}
            aria-haspopup="dialog"
            onClick={() => toggleSideMenu(!isSideMenuOpen)}
          >
            <span className={css.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
        <div className={css.navRightSection}>
          <ActionButton asChild variant="neutralOutline" size="xsmall">
            <Link
              href="https://open.kakao.com/me/93jm"
              target="_blank"
              rel="noopener noreferrer"
              className={css.navRightBadge}
            >
              커피챗도 환영합니다
            </Link>
          </ActionButton>
          <ToggleTheme />
        </div>
      </nav>
      <div className={css.navSectionBottomBar} />
      <ProgressBar target={target} />
    </header>
  );
}

export const NavButton = ({ label, href, active }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className={active ? css.navSectionActiveButton : css.navSectionButton}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
};
