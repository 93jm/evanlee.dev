"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import { MobileNavbar, Navbar } from "@/components/layout";
import { vars } from "@/styles/theme.css";

import * as css from "../styles/blog.css";

interface BlogShellProps {
  children: ReactNode;
}

export function BlogShell({ children }: BlogShellProps) {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={mainRef} style={{ backgroundColor: vars.themeColor.backgroundColor.color }}>
      <Navbar target={mainRef} />
      <main className={css.blogShell}>{children}</main>
      <MobileNavbar />
    </div>
  );
}
