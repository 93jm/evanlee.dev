"use client";

import sanitize from "sanitize-html";
import { ReactNode, useRef } from "react";
import * as css from "@/app/_component/componentLayout.css";
import { MobileNavbar, Navbar } from ".";
import { usePathname } from "next/navigation";
import { vars } from "../styles/theme.css";

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayoutProvider({
  children,
  title,
  description,
}: IProps) {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  return (
    <div
      ref={mainRef}
      style={{ backgroundColor: vars.themeColor.backgroundColor.color }}
    >
      <Navbar target={mainRef} />
      <div
        id="mainLayoutProvider"
        // className={
        //   pathname === "/" ? css.mainPageLayoutWrapper : css.pageLayoutWrapper
        // }
        className={css.pageLayoutWrapper}
      >
        {title && <div className={css.titleSection}>{title}</div>}
        {description && (
          <div
            className={css.descriptionSection}
            dangerouslySetInnerHTML={{
              __html: sanitize(description),
            }}
          />
        )}
        {children}
      </div>
      <MobileNavbar />
    </div>
  );
}
