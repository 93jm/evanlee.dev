import { style } from "@vanilla-extract/css";
import { flexRow, flexColumn } from "@/styles/mixins";

export const aboutSectionWrapper = style({
  ...flexColumn,
  paddingTop: 40,
  gap: 40,
});

export const contentSectionWrapper = style({
  ...flexRow,
  alignItems: "flex-start",
  gap: 20,
});

export const imageBox = style({
  height: "auto",
  borderRadius: 10,
});
