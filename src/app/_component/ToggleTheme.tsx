"use client";

import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import { useBreakpoints } from "../_hooks";

export default function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const { checkMobile } = useBreakpoints();
  const [mounted, setMounted] = useState(false);

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
      size={checkMobile ? 30 : 35}
    />
  );
}
