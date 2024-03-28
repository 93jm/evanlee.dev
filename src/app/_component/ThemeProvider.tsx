"use client";

import { darkTheme, lightTheme } from "@/app/styles/theme.css";
import { ReactNode } from "react";
import { Footer } from ".";
import { ThemeProvider as ThemeWrapper } from "next-themes";

interface IProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: IProps) {
  return (
    <ThemeWrapper
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
      <Footer />
    </ThemeWrapper>
  );
}
