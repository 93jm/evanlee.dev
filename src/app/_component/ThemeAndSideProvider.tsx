"use client";

import { darkTheme, lightTheme } from "@/app/styles/theme.css";
import { ReactNode, createContext, useState } from "react";

import { Footer } from ".";
import { ThemeProvider as ThemeWrapper } from "next-themes";

interface IProps {
  children: ReactNode;
}

export const SideMenuContext = createContext({
  isSideMenuOpen: false,
  toggleSideMenu: (props: boolean) => {},
});

export default function ThemeAndSideProvider({ children }: IProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = (props: boolean) => {
    setIsSideMenuOpen(props);
  };

  return (
    <ThemeWrapper
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <SideMenuContext.Provider value={{ isSideMenuOpen, toggleSideMenu }}>
        {children}
      </SideMenuContext.Provider>
      <Footer />
    </ThemeWrapper>
  );
}
