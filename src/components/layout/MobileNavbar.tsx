"use client";

import * as css from "@/components/componentLayout.css";
import { useContext, useEffect } from "react";
import { SideMenuContext } from "@/provider/ThemeProvider";
import { NAV_DATA, isV2NavItemActive } from "@/mocks/common";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import X_BLACK from "/public/x-black.png";
import X_WHITE from "/public/x-white.png";
import Image from "next/image";
import { flexRowBetween } from "@/styles/layout";
import { ToggleTheme } from "@/components";

type Props = {
  label: string;
  href: string;
  active: boolean;
  onSelect: () => void;
};

export default function MobileNavbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { isSideMenuOpen, toggleSideMenu } = useContext(SideMenuContext);
  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    //페이지 이탈하여 컴포넌트 언마운트가 될때에
    return () => {
      toggleSideMenu(false);
    };
  }, [toggleSideMenu]);

  if (!isSideMenuOpen) {
    return null;
  }

  return (
    <>
      <div className={css.mobileNavDim} onClick={() => toggleSideMenu(false)} />
      <nav className={css.mobileNavContainer} aria-label="모바일 메뉴">
        <div
          style={{
            ...flexRowBetween,
            marginBottom: 20,
          }}
        >
          <button
            type="button"
            className={css.mobileNavMenuButton}
            aria-label="메뉴 닫기"
            onClick={() => toggleSideMenu(false)}
          >
            <Image src={isDarkMode ? X_WHITE : X_BLACK} alt="" width={25} />
          </button>
          <ToggleTheme />
        </div>

        <ul className={css.mobileNavGrid}>
          {NAV_DATA.map((nav) => (
            <MobileNavButton
              key={nav.id}
              label={nav.label}
              href={nav.href}
              active={isV2NavItemActive(pathname, nav)}
              onSelect={() => toggleSideMenu(false)}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}

export const MobileNavButton = ({ label, href, active, onSelect }: Props) => {
  return (
    <li className={css.mobileNavMenuList}>
      <Link
        href={href}
        className={
          active ? css.mobileNavSectionActiveButton : css.mobileNavSectionButton
        }
        aria-current={active ? "page" : undefined}
        onClick={onSelect}
      >
        {label}
      </Link>
    </li>
  );
};
