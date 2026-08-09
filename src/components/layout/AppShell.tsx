"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import * as css from "@/components/componentLayout.css";

import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

interface AppShellProps {
  children: ReactNode;
  mainClassName?: string;
  mainId?: string;
}

export default function AppShell({
  children,
  mainClassName,
  mainId = "main-content",
}: AppShellProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={shellRef} className={css.appShell}>
      <a href={`#${mainId}`} className={css.skipLink}>
        본문으로 건너뛰기
      </a>
      <Navbar target={shellRef} />
      <main id={mainId} className={mainClassName}>
        {children}
      </main>
      <Footer />
      <MobileNavbar />
    </div>
  );
}
