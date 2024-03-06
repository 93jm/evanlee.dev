import { globalStyle, style, keyframes } from "@vanilla-extract/css";
import {
  flexRowCenter,
  flexRowBetween,
  flexRow,
  flexColumnCenter,
} from "@/app/styles/layout";
import { colors } from "@/app/styles/colors";

const mainFadeUp = keyframes({
  "0%": { transform: "translateY(50px)", opacity: 0 },
  "100%": { transform: "translateY(0px)", opacity: 1 },
});

/**
 * 구성 목록
 * main layout provider
 * nav bar
 * progress bar
 * footer
 */

//main layout provider
export const pageLayoutWrapper = style({
  maxWidth: 800,
  margin: "0 auto",
  minHeight: "100dvh",
  transform: "translateY(50px)",
  opacity: 0,
  animation: `400ms ease ${mainFadeUp}`,
  animationFillMode: "forwards",

  padding: "30px 20px 64px",
});

// nav bar
export const navSectionWrapper = style({
  position: "sticky",
  top: 0,
  width: "inherit",
  height: 56,
  backdropFilter: "saturate(180%) blur(10px)",
  zIndex: 999,
});

export const navSectionFlex = style({
  ...flexRowBetween,
  height: "100%",
  padding: "0 16px",
});

export const navLeftSection = style({
  ...flexRowCenter,
  minWidth: 400,
});

export const navSectionGrid = style({
  ...flexRowCenter,
  width: "100% ",
  height: "100%",
});

globalStyle(`${navSectionGrid} li`, {
  ...flexRowCenter,
  listStyleType: "none",
});

export const navSectionButton = style({
  minWidth: 70,
  fontWeight: 400,
  color: colors.gray,

  ":hover": {
    color: "black",
  },
});

export const navSectionActiveButton = style({
  minWidth: 70,
  fontSize: 16,

  fontWeight: 600,
  color: "black",
});

export const navSectionBottomBar = style({
  width: "100%",
  borderBottom: `2px solid ${colors.realLightGray}`,
});

export const imageBox = style({
  ...flexRow,
});

export const navRightSection = style({
  ...flexRowCenter,
  position: "relative",
});

export const navRightBadge = style({
  padding: 4,
  marginRight: 5,
  fontSize: 11,
  border: `2px solid ${colors.realLightGray}`,
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
  backgroundColor: colors.black,
});

//footer

export const footerSectionWrapper = style({
  ...flexRowCenter,
  width: "100%",
  padding: "64px 0px",
  backgroundColor: colors.realLightGray,
  color: colors.gray,
  fontSize: 14,
  gap: 20,
});

export const footerLinkWrapper = style({
  ...flexRowCenter,
  width: "100%",
  gap: 20,
});

//title, description

export const titleSection = style({
  fontSize: 28,
  fontWeight: 600,
});

export const descriptionSection = style({
  paddingTop: 20,
  fontSize: 14,
  lineHeight: 1.5,
  color: colors.gray,
});

//not found

export const notFoundWrapper = style({
  ...flexRowCenter,
  height: "100dvh",
});

export const notFoundBox = style({
  ...flexColumnCenter,
  gap: 15,
});
