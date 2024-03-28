"use client";

import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  //layout shift를 피하기 위한 default div
  if (!mounted) {
    return <div style={{ width: 35, height: 35 }} />;
  }

  return (
    <DarkModeSwitch
      checked={resolvedTheme === "light" ? false : true}
      onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      size={35}
    />
  );
}
