import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "../styles/media";

export const aboutSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  paddingTop: 40,
  gap: 40,
});

export const contentSectionWrapper = style([
  {
    display: "flex",
    alignItems: "flex-start",
    gap: 20,
  },
  responsiveStyle({
    mobile: {
      flexDirection: "column",
      alignItems: "center",
    },
  }),
]);

export const imageBox = style([
  {
    width: "100%",
    maxWidth: 300,
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
  },
  responsiveStyle({
    mobile: {
      maxWidth: 350,
    },
  }),
]);
