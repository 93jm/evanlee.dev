import { style } from "@vanilla-extract/css";
import { flexRow, flexColumn, colors } from "@/styles/mixins";

export const resumeSectionWrapper = style({
  ...flexColumn,
  marginTop: 40,
  padding: "40px 16px 20px",
  gap: 40,
  backgroundColor: colors.lightBegie,
});

export const divider = style({
  marginTop: 12,
  marginBottom: 12,
  borderBottom: "1px solid #e5e7eb",
});

export const resumeTextBox = style({
  fontSize: 12,
  lineHeight: 1.5,
});

export const resumeIntroduceWrapper = style({});

export const resumeExperienceWrapper = style({});

export const resumeOtherExperienceWrapper = style({});

export const resumeCardWrapper = style({
  ...flexColumn,
  gap: 12,
});

export const resumeCard = style({
  ...flexColumn,
  position: "relative",
  //   height: 400,
  padding: 12,
  gap: 8,
  backgroundColor: colors.deepBegie,
  border: "1px solid #e5e7eb",
  borderRadius: 10,
});

export const resumeListWrapper = style({
  ...flexColumn,
  padding: 12,
  color: "gray",
  gap: 8,
});
