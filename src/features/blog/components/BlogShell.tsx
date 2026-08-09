"use client";

import type { ReactNode } from "react";

import { AppShell } from "@/components/layout";

import * as css from "../styles/blog.css";

interface BlogShellProps {
  children: ReactNode;
}

export function BlogShell({ children }: BlogShellProps) {
  return <AppShell mainClassName={css.blogShell}>{children}</AppShell>;
}
