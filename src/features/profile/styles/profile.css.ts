import { globalStyle, style } from "@vanilla-extract/css";

import { responsiveStyle } from "@/styles/media";
import { vars } from "@/styles/theme.css";

const surfaceBorder = `1px solid ${vars.themeColor.semantic.border}`;
const focusRing = `2px solid ${vars.themeColor.semantic.focusRing}`;

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: 42,
});

export const hero = style([
  {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 280px",
    gap: 36,
    alignItems: "end",
    padding: "10px 0 8px",
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const heroCopy = style({
  display: "flex",
  minWidth: 0,
  flexDirection: "column",
  gap: 14,
});

export const eyebrow = style({
  color: vars.themeColor.semantic.accent,
  fontSize: 13,
  fontWeight: 800,
});

globalStyle(`${heroCopy} h1`, {
  maxWidth: 780,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 40,
  lineHeight: 1.16,
  fontWeight: 800,
  letterSpacing: 0,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 32,
    },
  },
});

globalStyle(`${heroCopy} p`, {
  maxWidth: 720,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 16,
  lineHeight: 1.78,
});

export const profilePhoto = style({
  position: "relative",
  aspectRatio: "4 / 5",
  overflow: "hidden",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
});

export const image = style({
  objectFit: "cover",
});

export const quickFacts = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 10,
  "@media": {
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "screen and (max-width: 520px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const quickFactItem = style({
  display: "grid",
  gap: 6,
  padding: 16,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

globalStyle(`${quickFacts} dt`, {
  color: vars.themeColor.semantic.textMuted,
  fontSize: 12,
  fontWeight: 800,
});

globalStyle(`${quickFacts} dd`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
  lineHeight: 1.55,
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingTop: 28,
  borderTop: surfaceBorder,
});

export const sectionHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

globalStyle(`${sectionHeader} h2`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 24,
  lineHeight: 1.32,
  fontWeight: 780,
  letterSpacing: 0,
});

globalStyle(`${sectionHeader} p`, {
  maxWidth: 680,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 15,
  lineHeight: 1.75,
});

export const principleGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const principleItem = style({
  display: "flex",
  minWidth: 0,
  flexDirection: "column",
  gap: 10,
  padding: 18,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

globalStyle(`${principleItem} h3`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 17,
  lineHeight: 1.4,
  fontWeight: 780,
});

globalStyle(`${principleItem} p`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.75,
});

export const resumeHeader = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 20,
  paddingBottom: 28,
  borderBottom: surfaceBorder,
});

export const contactList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  padding: 0,
  listStyle: "none",
});

export const contactLink = style({
  display: "inline-flex",
  minHeight: 36,
  alignItems: "center",
  padding: "7px 11px",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 13,
  fontWeight: 800,
  selectors: {
    "&:hover": {
      borderColor: vars.themeColor.semantic.accent,
    },
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
  },
});

export const skillList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  padding: 0,
  listStyle: "none",
});

export const skill = style({
  width: "fit-content",
  padding: "5px 8px",
  borderRadius: vars.themeColor.seed.radius.pill,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 12,
  fontWeight: 800,
});

export const experienceList = style({
  display: "flex",
  flexDirection: "column",
  gap: 28,
});

export const companyBlock = style({
  display: "grid",
  gridTemplateColumns: "180px minmax(0, 1fr)",
  gap: 24,
  paddingTop: 24,
  borderTop: surfaceBorder,
  selectors: {
    "&:first-child": {
      paddingTop: 0,
      borderTop: "none",
    },
  },
  "@media": {
    "screen and (max-width: 760px)": {
      gridTemplateColumns: "1fr",
      gap: 14,
    },
  },
});

export const companyMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

globalStyle(`${companyMeta} h3`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 18,
  lineHeight: 1.35,
  fontWeight: 800,
});

globalStyle(`${companyMeta} p`, {
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  lineHeight: 1.6,
});

export const projectStack = style({
  display: "flex",
  flexDirection: "column",
  gap: 18,
});

export const resumeProject = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const projectTitleRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 8,
});

globalStyle(`${projectTitleRow} h4`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 17,
  lineHeight: 1.4,
  fontWeight: 780,
});

export const projectLink = style({
  color: vars.themeColor.semantic.accent,
  fontSize: 13,
  fontWeight: 800,
  selectors: {
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
  },
});

export const metaText = style({
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  lineHeight: 1.6,
});

export const description = style({
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.72,
});

export const bulletList = style({
  display: "flex",
  flexDirection: "column",
  gap: 7,
  margin: 0,
  paddingLeft: 20,
});

globalStyle(`${bulletList} li`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.7,
});

export const compactGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 20,
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const compactList = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  margin: 0,
  paddingLeft: 18,
});

globalStyle(`${compactList} li`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.65,
});
