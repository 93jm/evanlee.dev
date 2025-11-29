"use client";

import sanitize from "sanitize-html";
import { ReactNode, useRef } from "react";
import * as css from "@/components/componentLayout.css";
import { MobileNavbar, Navbar } from "@/components/layout";
import { vars } from "@/styles/theme.css";

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const PortfolioLayout = ({ children, title, description }: IProps) => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={mainRef}
      style={{ backgroundColor: vars.themeColor.backgroundColor.color }}
    >
      <Navbar target={mainRef} />
      <div id="mainLayoutProvider" className={css.pageLayoutWrapper}>
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
};

export default PortfolioLayout;
