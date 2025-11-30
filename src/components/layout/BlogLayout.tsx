"use client";

import { ReactNode, useRef } from "react";
import { MobileNavbar, Navbar } from "@/components/layout";
import * as css from "@/components/componentLayout.css";
import { vars } from "@/styles/theme.css";

interface IProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: IProps) => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={mainRef}
      style={{ backgroundColor: vars.themeColor.backgroundColor.color }}
    >
      <Navbar target={mainRef} />
      <div className={css.blogLayoutWrapper}>{children}</div>
      <MobileNavbar />
    </div>
  );
};

export default BlogLayout;
