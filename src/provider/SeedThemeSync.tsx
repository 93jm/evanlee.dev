"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const SEED_THEME_VALUES = ["light", "dark"] as const;

type SeedUserColorScheme = (typeof SEED_THEME_VALUES)[number];
type SeedColorMode = "system" | "light-only" | "dark-only";

function isSeedUserColorScheme(value: string | undefined): value is SeedUserColorScheme {
  return SEED_THEME_VALUES.some((themeValue) => themeValue === value);
}

function getSeedColorMode(theme: string | undefined): SeedColorMode {
  if (theme === "light") {
    return "light-only";
  }

  if (theme === "dark") {
    return "dark-only";
  }

  return "system";
}

function getSeedUserColorScheme(resolvedTheme: string | undefined): SeedUserColorScheme {
  return isSeedUserColorScheme(resolvedTheme) ? resolvedTheme : "light";
}

export default function SeedThemeSync() {
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const colorMode = getSeedColorMode(theme);
    const userColorScheme = getSeedUserColorScheme(resolvedTheme);

    root.dataset.seed = "";
    root.dataset.seedColorMode = colorMode;
    root.dataset.seedUserColorScheme = userColorScheme;
  }, [resolvedTheme, theme]);

  return null;
}
