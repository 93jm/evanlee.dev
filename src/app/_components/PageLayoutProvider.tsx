"use client";

import sanitize from "sanitize-html";
import { ReactNode, useRef } from "react";
import * as css from "@/styles/layout.css";
import { Navbar } from ".";

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

  return (
    <div ref={mainRef}>
      <Navbar target={mainRef} />
      <div className={css.pageLayoutWrapper}>
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
    </div>
  );
}
