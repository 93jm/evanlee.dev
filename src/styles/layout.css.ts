import { globalStyle, style } from "@vanilla-extract/css";
import {
  flexRowBetween,
  flexColumnCenter,
  flexRowCenter,
  mainFadeUp,
} from "./mixins";

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

globalStyle(`${navSectionFlex} > div`, {
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
  color: "gray",

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
  borderBottom: "2px solid #f5f5f5",
});

export const imageBox = style({
  display: "flex",
});

//progress bar

export const progressBarWrapper = style({
  position: "fixed",
  width: "100%",
  top: 58,
});

export const progressBar = style({
  height: 3,
  // backgroundColor: "rgb(255, 217, 184)",
  backgroundColor: "#2c2c2c",
});

//footer

export const footerSectionWrapper = style({
  ...flexColumnCenter,
  width: "100%",
  padding: "64px 0px",
  backgroundColor: "#f5f5f5",
  color: "gray",
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
  color: "gray",
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
