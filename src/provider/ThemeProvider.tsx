"use client";

import { darkTheme, lightTheme } from "@/styles/theme.css";
import { ReactNode, createContext, useCallback, useState } from "react";

import SeedThemeSync from "./SeedThemeSync";
import { ThemeProvider as ThemeWrapper } from "next-themes";

interface IProps {
  children: ReactNode;
}

export const SideMenuContext = createContext({
  isSideMenuOpen: false,
  toggleSideMenu: (props: boolean) => {},
});

export default function ThemeProvider({ children }: IProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = useCallback((props: boolean) => {
    setIsSideMenuOpen(props);
  }, []);

  return (
    <ThemeWrapper
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <SeedThemeSync />
      <SideMenuContext.Provider value={{ isSideMenuOpen, toggleSideMenu }}>
        {children}
      </SideMenuContext.Provider>
    </ThemeWrapper>
  );
}
