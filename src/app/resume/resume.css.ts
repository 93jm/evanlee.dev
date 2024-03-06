import { style } from "@vanilla-extract/css";
import { colors } from "@/app/styles/colors";

export const resumeSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  marginTop: 40,
  padding: "40px 16px 20px",
  gap: 40,
  backgroundColor: colors.lightBegie,
});

export const divider = style({
  marginTop: 12,
  marginBottom: 12,
  borderBottom: `1px solid ${colors.lightGray}`,
});

export const resumeTextBox = style({
  fontSize: 12,
  lineHeight: 1.5,
});

export const resumeCardWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const resumeCard = style({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: 12,
  gap: 8,
  backgroundColor: colors.deepBegie,
  border: `1px solid ${colors.lightGray}`,
  borderRadius: 10,
});

export const resumeListWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: 12,
  color: `${colors.gray}`,
  gap: 8,
});
