import { style } from "@vanilla-extract/css";

export const aboutSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  paddingTop: 40,
  gap: 40,
});

export const contentSectionWrapper = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 20,
});

export const imageBox = style({
  height: "auto",
  borderRadius: 10,
});
