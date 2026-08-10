import { createGlobalTheme, createTheme, createThemeContract } from "@vanilla-extract/css";

const root = createGlobalTheme(":root", {});

const seed = {
  color: {
    bg: {
      brandSolidPressed: "var(--seed-color-bg-brand-solid-pressed)",
      layerDefault: "var(--seed-color-bg-layer-default)",
      layerFill: "var(--seed-color-bg-layer-fill)",
      layerFloating: "var(--seed-color-bg-layer-floating)",
      neutralSolid: "var(--seed-color-bg-neutral-solid)",
      neutralWeak: "var(--seed-color-bg-neutral-weak)",
    },
    fg: {
      brand: "var(--seed-color-fg-brand)",
      neutral: "var(--seed-color-fg-neutral)",
      neutralMuted: "var(--seed-color-fg-neutral-muted)",
      neutralSubtle: "var(--seed-color-fg-neutral-subtle)",
    },
    stroke: {
      brandSolid: "var(--seed-color-stroke-brand-solid)",
      focusRing: "var(--seed-color-stroke-focus-ring)",
      neutralSolid: "var(--seed-color-stroke-neutral-solid)",
      neutralWeak: "var(--seed-color-stroke-neutral-weak)",
    },
  },
  dimension: {
    x1: "var(--seed-dimension-x1)",
    x2: "var(--seed-dimension-x2)",
    x3: "var(--seed-dimension-x3)",
    x4: "var(--seed-dimension-x4)",
    x5: "var(--seed-dimension-x5)",
    x6: "var(--seed-dimension-x6)",
    x8: "var(--seed-dimension-x8)",
    x10: "var(--seed-dimension-x10)",
    x12: "var(--seed-dimension-x12)",
    x16: "var(--seed-dimension-x16)",
  },
  radius: {
    r2: "var(--seed-radius-r2)",
    r3: "var(--seed-radius-r3)",
    r4: "var(--seed-radius-r4)",
    full: "var(--seed-radius-full)",
  },
} as const;

const themeColor = createThemeContract({
  seed: {
    space: {
      x1: null,
      x2: null,
      x3: null,
      x4: null,
      x5: null,
      x6: null,
      x8: null,
      x10: null,
      x12: null,
      x16: null,
    },
    radius: {
      sm: null,
      md: null,
      lg: null,
      pill: null,
    },
  },
  backgroundColor: {
    color: null,
    resumeColor: null,
    resumeSectionColor: null,
    footerColor: null, //푸터 영역 전용 컨트롤
  },
  borderColor: {
    color: null,
    resumeColor: null,
    blackToWhite: null,
  },
  buttonColor: {
    color: null,
  },
  fontColor: {
    color: null, //basic한 color
    activeColor: null, //h태그 시리즈와 강조되는 경우의 color
    notActiveColor: null, //그 이외의 설명 문구들 p, span 포함
  },
  //기본적인 hover 색상 컨트롤
  hoverColor: {
    color: null,
  },
  semantic: {
    appBackground: null,
    surface: null,
    surfaceMuted: null,
    surfaceElevated: null,
    textPrimary: null,
    textSecondary: null,
    textMuted: null,
    border: null,
    borderStrong: null,
    accent: null,
    accentHover: null,
    focusRing: null,
  },
});

const seedScale = {
  space: {
    x1: seed.dimension.x1,
    x2: seed.dimension.x2,
    x3: seed.dimension.x3,
    x4: seed.dimension.x4,
    x5: seed.dimension.x5,
    x6: seed.dimension.x6,
    x8: seed.dimension.x8,
    x10: seed.dimension.x10,
    x12: seed.dimension.x12,
    x16: seed.dimension.x16,
  },
  radius: {
    sm: seed.radius.r2,
    md: seed.radius.r3,
    lg: seed.radius.r4,
    pill: seed.radius.full,
  },
};

export const lightTheme = createTheme(themeColor, {
  seed: seedScale,
  backgroundColor: {
    color: seed.color.bg.layerDefault,
    resumeColor: seed.color.bg.layerDefault,
    resumeSectionColor: seed.color.bg.layerFill,
    footerColor: seed.color.bg.layerFill,
  },
  borderColor: {
    color: seed.color.stroke.neutralWeak,
    resumeColor: seed.color.stroke.neutralWeak,
    blackToWhite: seed.color.stroke.brandSolid,
  },
  buttonColor: {
    color: seed.color.bg.neutralSolid,
  },
  fontColor: {
    color: seed.color.fg.neutral,
    activeColor: seed.color.fg.neutral,
    notActiveColor: seed.color.fg.neutralMuted,
  },
  hoverColor: {
    color: seed.color.bg.neutralWeak,
  },
  semantic: {
    appBackground: seed.color.bg.layerDefault,
    surface: seed.color.bg.layerDefault,
    surfaceMuted: seed.color.bg.layerFill,
    surfaceElevated: seed.color.bg.layerFloating,
    textPrimary: seed.color.fg.neutral,
    textSecondary: seed.color.fg.neutralMuted,
    textMuted: seed.color.fg.neutralSubtle,
    border: seed.color.stroke.neutralWeak,
    borderStrong: seed.color.stroke.neutralSolid,
    accent: seed.color.fg.brand,
    accentHover: seed.color.bg.brandSolidPressed,
    focusRing: seed.color.stroke.focusRing,
  },
});

export const darkTheme = createTheme(themeColor, {
  seed: seedScale,
  backgroundColor: {
    color: seed.color.bg.layerDefault,
    resumeColor: seed.color.bg.layerDefault,
    resumeSectionColor: seed.color.bg.layerFill,
    footerColor: seed.color.bg.layerFill,
  },
  borderColor: {
    color: seed.color.stroke.neutralWeak,
    resumeColor: seed.color.stroke.neutralWeak,
    blackToWhite: seed.color.stroke.brandSolid,
  },
  buttonColor: {
    color: seed.color.bg.neutralSolid,
  },
  fontColor: {
    color: seed.color.fg.neutral,
    activeColor: seed.color.fg.neutral,
    notActiveColor: seed.color.fg.neutralMuted,
  },
  hoverColor: {
    color: seed.color.bg.neutralWeak,
  },
  semantic: {
    appBackground: seed.color.bg.layerDefault,
    surface: seed.color.bg.layerDefault,
    surfaceMuted: seed.color.bg.layerFill,
    surfaceElevated: seed.color.bg.layerFloating,
    textPrimary: seed.color.fg.neutral,
    textSecondary: seed.color.fg.neutralMuted,
    textMuted: seed.color.fg.neutralSubtle,
    border: seed.color.stroke.neutralWeak,
    borderStrong: seed.color.stroke.neutralSolid,
    accent: seed.color.fg.brand,
    accentHover: seed.color.bg.brandSolidPressed,
    focusRing: seed.color.stroke.focusRing,
  },
});

export const vars = { ...root, themeColor };
