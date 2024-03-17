"use client";

import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "./ThemeProvider";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  //   const localTheme = localStorage.getItem("theme");
  const isDarkMode = theme === "dark" ? true : false;

  const handleChangeTheme = () => {
    setTheme(!isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={handleChangeTheme}
      size={35}
    />
  );
}
