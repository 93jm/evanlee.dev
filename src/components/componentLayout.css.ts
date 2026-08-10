import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";
import { responsiveStyle } from "../styles/media";

const focusRing = `2px solid ${vars.themeColor.semantic.focusRing}`;

const mainFadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const sideFadeUp = keyframes({
  "0%": { transform: "translateX(40%)", opacity: 0 },
  "100%": { transform: "translateX(0px)", opacity: 1 },
});

/**
 * 구성 목록
 * theme provider
 * main layout provider
 * nav bar
 * mobile nav bar
 * progress bar
 * footer
 */

//main layout provider
// export const mainPageLayoutWrapper = style({
//   marginTop: "60px",
//   minHeight: "100dvh",
//   backgroundColor: "tomato",
// });

export const appShell = style({
  minHeight: "100dvh",
  backgroundColor: vars.themeColor.semantic.appBackground,
  color: vars.themeColor.semantic.textPrimary,
});

export const skipLink = style({
  position: "fixed",
  top: 8,
  left: 8,
  zIndex: 10000,
  transform: "translateY(-140%)",
  padding: "10px 12px",
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.textPrimary,
  color: vars.themeColor.semantic.surface,
  fontSize: 14,
  fontWeight: 800,
  transition: "transform 120ms ease",
  selectors: {
    "&:focus": {
      transform: "translateY(0)",
    },
  },
});

export const pageLayoutWrapper = style({
  maxWidth: 800,
  margin: "0 auto",
  marginTop: "56px",
  minHeight: "100dvh",
  padding: `${vars.themeColor.seed.space.x8} ${vars.themeColor.seed.space.x5} ${vars.themeColor.seed.space.x16}`,
  opacity: 0,
  animation: `400ms ease ${mainFadeIn}`,
  animationFillMode: "forwards",
});

// nav bar
export const navSectionWrapper = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 56,
  backdropFilter: "saturate(180%) blur(10px)",
  backgroundColor: vars.themeColor.semantic.surfaceElevated,
  zIndex: 999,
});

export const navSectionFlex = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  padding: `0 ${vars.themeColor.seed.space.x4}`,
});

export const navLeftSection = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 400,
  },
  responsiveStyle({
    mobile: {
      minWidth: 0,
      width: "100%",
      justifyContent: "space-between",
    },
  }),
]);

export const navSectionGrid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  gap: vars.themeColor.seed.space.x1,
  "@media": {
    "screen and (max-width: 800px)": {
      display: "none",
    },
  },
});

globalStyle(`${navSectionGrid} li`, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyleType: "none",
});

export const navSectionButton = style([
  {
    minWidth: 70,
    minHeight: 40,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    borderRadius: vars.themeColor.seed.radius.md,

    color: vars.themeColor.semantic.textMuted,

    ":hover": {
      color: vars.themeColor.semantic.textPrimary,
      backgroundColor: vars.themeColor.semantic.surfaceMuted,
    },
    ":focus-visible": {
      outline: focusRing,
      outlineOffset: 2,
    },
  },
]);

export const navSectionActiveButton = style({
  minWidth: 70,
  minHeight: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  fontWeight: 800,
  color: vars.themeColor.semantic.textPrimary,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  ":focus-visible": {
    outline: focusRing,
    outlineOffset: 2,
  },
});

export const navSectionBottomBar = style({
  width: "100%",
  borderBottom: `1px solid ${vars.themeColor.semantic.border}`,
});

export const imageBox = style({
  display: "flex",
});

export const navRightSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  gap: vars.themeColor.seed.space.x3,
  "@media": {
    "screen and (max-width: 800px)": {
      display: "none",
    },
  },
});

export const navRightBadge = style({
  padding: `${vars.themeColor.seed.space.x2} ${vars.themeColor.seed.space.x3}`,
  fontSize: 12,
  fontWeight: 800,
  border: `1px solid ${vars.themeColor.semantic.border}`,
  borderRadius: vars.themeColor.seed.radius.pill,
  color: vars.themeColor.semantic.textPrimary,

  ":hover": {
    borderColor: vars.themeColor.semantic.borderStrong,
    backgroundColor: vars.themeColor.semantic.surfaceMuted,
  },
  ":focus-visible": {
    outline: focusRing,
    outlineOffset: 3,
  },
});

//mobile nav bar

export const mobileNavContainer = style({
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 9999,

  display: "flex",
  flexDirection: "column",
  minWidth: "100px",
  padding: vars.themeColor.seed.space.x6,
  width: "min(360px, 86vw)",
  height: "100%",

  backgroundColor: vars.themeColor.semantic.surfaceElevated,
  opacity: 0,
  transform: "translateX(40%)",
  animation: `400ms ease ${sideFadeUp}`,
  animationFillMode: "forwards",
  "@media": {
    "screen and (min-width: 801px)": {
      display: "none",
    },
  },
});

export const mobileNavGrid = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.themeColor.seed.space.x2,

  listStyleType: "none",
});

export const mobileNavDim = style({
  position: "fixed",
  inset: 0,
  zIndex: 9998,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.64)",
  "@media": {
    "screen and (min-width: 801px)": {
      display: "none",
    },
  },
});

export const mobileNavMenuButton = style({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  padding: 2,

  backgroundColor: "transparent",
  border: "none",
  borderRadius: vars.themeColor.seed.radius.md,
  cursor: "pointer",
  ":focus-visible": {
    outline: focusRing,
    outlineOffset: 3,
  },
  "@media": {
    "screen and (max-width: 800px)": {
      display: "inline-flex",
    },
  },
});

export const mobileNavMenuList = style({
  padding: `${vars.themeColor.seed.space.x3} 0`,
  width: "100%",
});

export const mobileNavSectionButton = style({
  display: "inline-flex",
  minHeight: 40,
  alignItems: "center",
  fontWeight: 400,
  color: vars.themeColor.semantic.textMuted,

  ":hover": {
    color: vars.themeColor.semantic.textPrimary,
  },
  ":focus-visible": {
    outline: focusRing,
    outlineOffset: 3,
  },
});

export const mobileNavSectionActiveButton = style({
  display: "inline-flex",
  minHeight: 40,
  alignItems: "center",
  fontSize: 16,
  fontWeight: 600,
  color: vars.themeColor.semantic.textPrimary,
  ":focus-visible": {
    outline: focusRing,
    outlineOffset: 3,
  },
});

//progress bar

export const progressBarWrapper = style({
  position: "fixed",
  width: "100%",
  top: 56,
});

export const progressBar = style({
  height: 2,
  backgroundColor: vars.themeColor.semantic.accent,
});

//footer

export const footerSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: `${vars.themeColor.seed.space.x16} 0`,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
  gap: vars.themeColor.seed.space.x5,
});

export const footerLinkWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: vars.themeColor.seed.space.x5,
});

//title, description

export const titleSection = style({
  fontSize: 28,
  fontWeight: 800,
  color: vars.themeColor.semantic.textPrimary,
});

export const descriptionSection = style({
  paddingTop: 20,
  fontSize: 14,
  lineHeight: 1.5,
  color: vars.themeColor.semantic.textSecondary,
});

//not found

export const notFoundWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
});

export const notFoundBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
});
