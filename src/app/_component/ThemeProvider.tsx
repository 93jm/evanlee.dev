"use client";

import { darkTheme, lightTheme } from "@/app/styles/theme.css";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Footer } from ".";

interface IProps {
  children: ReactNode;
}

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (value: "light" | "dark") => {},
});

export default function ThemeProvider({ children }: IProps) {
  const [theme, setTheme] = useState("light");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.style.backgroundColor =
        theme === "dark" ? "rgb(60, 60, 60)" : "#ffffff";
    }
  }, [theme, mounted]);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, [theme]);

  //SSR에서의 다크모드 깜빡임 문제로, 임시 마운트 뒤에 페이지 호출 처리
  if (!mounted) return null;

  return (
    <div className={`${theme === "light" ? lightTheme : darkTheme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
