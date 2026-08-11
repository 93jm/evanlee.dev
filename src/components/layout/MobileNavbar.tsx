"use client";

import * as css from "@/components/componentLayout.css";
import { useContext, useEffect, useRef } from "react";
import { SideMenuContext } from "@/provider/ThemeProvider";
import { NAV_DATA, isV2NavItemActive } from "@/mocks/common";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  const { isSideMenuOpen, toggleSideMenu } = useContext(SideMenuContext);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    //페이지 이탈하여 컴포넌트 언마운트가 될때에
    return () => {
      toggleSideMenu(false);
    };
  }, [toggleSideMenu]);

  useEffect(() => {
    if (!isSideMenuOpen) {
      return;
    }

    const previousActiveElement = document.activeElement;

    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleSideMenu(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);

      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
  }, [isSideMenuOpen, toggleSideMenu]);

  if (!isSideMenuOpen) {
    return null;
  }

  return (
    <>
      <div
        className={css.mobileNavDim}
        aria-hidden="true"
        onClick={() => toggleSideMenu(false)}
      />
      <aside
        id="mobile-navigation"
        className={css.mobileNavContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
      >
        <h2 id="mobile-navigation-title" className={css.visuallyHidden}>
          모바일 메뉴
        </h2>
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
            ref={closeButtonRef}
            onClick={() => toggleSideMenu(false)}
          >
            <span className={css.closeIcon} aria-hidden="true" />
          </button>
          <ToggleTheme />
        </div>

        <nav aria-label="모바일 사이트 메뉴">
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
      </aside>
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
