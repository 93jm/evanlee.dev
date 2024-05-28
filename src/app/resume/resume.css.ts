import { style } from "@vanilla-extract/css";
import { colors } from "@/app/styles/colors";
import { vars } from "../styles/theme.css";

export const resumeSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  marginTop: 40,
  padding: "40px 16px 20px",
  gap: 40,
  backgroundColor: vars.themeColor.backgroundColor.resumeColor,
  border: `1px solid ${vars.themeColor.borderColor.resumeColor}`,
  borderRadius: "5px",
});

export const divider = style({
  marginTop: 12,
  marginBottom: 12,
  borderBottom: `1px solid ${colors.lightGray}`,
});

export const resumeTextBox = style({
  fontSize: 12,
  lineHeight: 1.5,
  color: vars.themeColor.fontColor.activeColor,
});

export const resumeSubTextBox = style({
  fontSize: 12,
  lineHeight: 1.5,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const resumeCardFlexBox = style({
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
  backgroundColor: vars.themeColor.backgroundColor.resumeSectionColor,
  border: `1px solid ${colors.lightGray}`,
  borderRadius: 10,
});

export const resumeListWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: 12,
  color: vars.themeColor.fontColor.notActiveColor,
  gap: 8,
});
