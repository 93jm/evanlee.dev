import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { colors } from "@/app/styles/colors";
import { vars } from "../styles/theme.css";

const mainFadeUp = keyframes({
  "0%": { transform: "translateY(50px)", opacity: 0 },
  "100%": { transform: "translateY(0px)", opacity: 1 },
});

/**
 * 구성 목록
 * theme provider
 * main layout provider
 * nav bar
 * progress bar
 * footer
 */

//theme provider
export const themeLayoutWrapper = style({});
//main layout provider
export const mainPageLayoutWrapper = style({
  marginTop: "60px",
  minHeight: "100dvh",
  // backgroundColor: "tomato",
});

export const pageLayoutWrapper = style({
  maxWidth: 800,
  margin: "0 auto",
  minHeight: "100dvh",
  transform: "translateY(50px)",
  opacity: 0,
  animation: `400ms ease ${mainFadeUp}`,
  animationFillMode: "forwards",

  padding: "86px 20px 64px",
});

// nav bar
export const navSectionWrapper = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 56,
  backdropFilter: "saturate(180%) blur(10px)",
  zIndex: 999,
});

export const navSectionFlex = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  padding: "0 16px",
});

export const navLeftSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 400,
});

export const navSectionGrid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100% ",
  height: "100%",
});

globalStyle(`${navSectionGrid} li`, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyleType: "none",
});

export const navSectionButton = style({
  minWidth: 70,
  fontWeight: 400,

  color: vars.themeColor.fontColor.notActiveColor,

  ":hover": {
    color: vars.themeColor.fontColor.activeColor,
  },
});

export const navSectionActiveButton = style({
  minWidth: 70,
  fontSize: 16,

  fontWeight: 600,
  color: vars.themeColor.fontColor.activeColor,
});

export const navSectionBottomBar = style({
  width: "100%",
  borderBottom: `2px solid ${vars.themeColor.borderColor.color}`,
});

export const imageBox = style({
  display: "flex",
});

export const navRightSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

export const navRightBadge = style({
  padding: "6px 8px",
  marginRight: 10,
  fontSize: 11,
  border: `2px solid ${vars.themeColor.borderColor.color}`,
  borderRadius: 10,

  ":hover": {
    color: colors.gray,
  },
});

//progress bar

export const progressBarWrapper = style({
  position: "fixed",
  width: "100%",
  top: 58,
});

export const progressBar = style({
  height: 3,
  backgroundColor: vars.themeColor.borderColor.blackToWhite,
});

//footer

export const footerSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "64px 0px",
  color: colors.gray,
  fontSize: 14,
  gap: 20,
});

export const footerLinkWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: 20,
});

//title, description

export const titleSection = style({
  fontSize: 28,
  fontWeight: 600,
  color: vars.themeColor.fontColor.activeColor,
});

export const descriptionSection = style({
  paddingTop: 20,
  fontSize: 14,
  lineHeight: 1.5,
  // color: colors.gray,
  color: vars.themeColor.fontColor.notActiveColor,
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
