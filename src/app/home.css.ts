import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

const subtleBorder = `1px solid ${vars.themeColor.semantic.border}`;

export const homeShell = style({
  maxWidth: 1120,
  margin: "0 auto",
  padding: "112px 20px 88px",
  "@media": {
    "screen and (max-width: 800px)": {
      padding: "88px 18px 64px",
    },
  },
});

export const hero = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 320px",
  gap: 48,
  alignItems: "flex-end",
  minHeight: "calc(100dvh - 220px)",
  paddingBottom: 48,
  "@media": {
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      minHeight: "auto",
      gap: 32,
    },
  },
});

export const heroCopy = style({
  display: "grid",
  gap: 24,
});

export const eyebrow = style({
  color: vars.themeColor.semantic.accent,
  fontSize: 14,
  fontWeight: 800,
});

export const title = style({
  maxWidth: 820,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 56,
  lineHeight: 1.12,
  fontWeight: 850,
  letterSpacing: 0,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 36,
    },
  },
});

export const description = style({
  maxWidth: 700,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 18,
  lineHeight: 1.85,
});

export const actionRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
});

export const primaryLink = style({
  display: "inline-flex",
  minHeight: 44,
  alignItems: "center",
  justifyContent: "center",
  padding: "0 16px",
  border: subtleBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.textPrimary,
  color: vars.themeColor.semantic.surface,
  fontSize: 14,
  fontWeight: 800,
  transition: "opacity 160ms ease, transform 160ms ease",
  ":hover": {
    opacity: 0.86,
    transform: "translateY(-1px)",
  },
});

export const snapshot = style({
  border: subtleBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

export const snapshotList = style({
  display: "grid",
});

globalStyle(`${snapshotList} > div`, {
  display: "grid",
  gap: 6,
  padding: 18,
  borderBottom: subtleBorder,
});

globalStyle(`${snapshotList} > div:last-child`, {
  borderBottom: "none",
});

globalStyle(`${snapshotList} dt`, {
  color: vars.themeColor.semantic.textMuted,
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
});

globalStyle(`${snapshotList} dd`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
  lineHeight: 1.55,
});

export const section = style({
  display: "grid",
  gap: 24,
  padding: "48px 0",
  borderTop: subtleBorder,
});

export const sectionHeader = style({
  display: "grid",
  gap: 8,
});

globalStyle(`${sectionHeader} h2`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 28,
  lineHeight: 1.3,
});

export const sectionHeaderRow = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: 16,
  "@media": {
    "screen and (max-width: 800px)": {
      alignItems: "start",
      flexDirection: "column",
    },
  },
});

export const sectionLabel = style({
  color: vars.themeColor.semantic.accent,
  fontSize: 12,
  fontWeight: 850,
  textTransform: "uppercase",
});

export const principleGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const principleItem = style({
  display: "grid",
  gap: 10,
  padding: 18,
  border: subtleBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

globalStyle(`${principleItem} h3`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 18,
  lineHeight: 1.4,
});

globalStyle(`${principleItem} p`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.75,
});

export const projectGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 14,
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const projectItem = style({
  display: "flex",
  minHeight: 220,
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 22,
  padding: 20,
  border: subtleBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

globalStyle(`${projectItem} h3`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 18,
  lineHeight: 1.4,
});

globalStyle(`${projectItem} p`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.75,
});

export const postList = style({
  display: "grid",
  gap: 10,
});

export const postItem = style({
  display: "grid",
  gap: 8,
  padding: "18px 0",
  borderBottom: subtleBorder,
  color: vars.themeColor.semantic.textSecondary,
  ":hover": {
    color: vars.themeColor.semantic.textPrimary,
  },
});

globalStyle(`${postItem} strong`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 17,
  lineHeight: 1.45,
});

globalStyle(`${postItem} span:last-child`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.7,
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  padding: 0,
  listStyle: "none",
});

globalStyle(`${tagList} li`, {
  padding: "5px 8px",
  borderRadius: vars.themeColor.seed.radius.pill,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 12,
  fontWeight: 700,
});

export const textLink = style({
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
  fontWeight: 800,
});

export const metaText = style({
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  lineHeight: 1.6,
});

export const emptyText = style({
  color: vars.themeColor.semantic.textMuted,
  fontSize: 14,
});

export const profileGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 12,
  paddingTop: 48,
  borderTop: subtleBorder,
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const profileItem = style({
  display: "flex",
  minHeight: 96,
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 16,
  border: subtleBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
  transition: "border-color 160ms ease, background-color 160ms ease",
  ":hover": {
    borderColor: vars.themeColor.semantic.accent,
    backgroundColor: vars.themeColor.semantic.surfaceMuted,
  },
});

export const profileLabel = style({
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 15,
  fontWeight: 850,
});

export const profileDescription = style({
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  lineHeight: 1.55,
});
