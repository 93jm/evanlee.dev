import { globalStyle, style } from "@vanilla-extract/css";
import {
  flexRow,
  flexColumn,
  flexRowBetween,
  flexColumnCenter,
  flexRowCenter,
  mainFadeUp,
} from "@/styles/mixins";

export const aboutSectionWrapper = style({
  ...flexColumn,
  //   alignItems: "flex-start",
  paddingTop: 40,
  gap: 40,
});

export const topSectionWrapper = style({
  ...flexRow,
  gap: 20,
});

export const imageBox = style({
  height: "auto",
  borderRadius: 10,
});

export const bottomSectionWrapper = style({});
