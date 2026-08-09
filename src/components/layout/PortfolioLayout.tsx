"use client";

import sanitize from "sanitize-html";
import { ReactNode } from "react";
import * as css from "@/components/componentLayout.css";

import AppShell from "./AppShell";

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const PortfolioLayout = ({ children, title, description }: IProps) => {
  return (
    <AppShell mainId="mainLayoutProvider" mainClassName={css.pageLayoutWrapper}>
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
    </AppShell>
  );
};

export default PortfolioLayout;
