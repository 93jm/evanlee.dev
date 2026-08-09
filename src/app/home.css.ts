import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const homeShell = style({
  maxWidth: 1040,
  margin: "0 auto",
  padding: "120px 20px 80px",
});

export const intro = style({
  display: "grid",
  gap: 24,
});

export const eyebrow = style({
  color: vars.themeColor.semantic.accent,
  fontSize: 14,
  fontWeight: 700,
});

export const title = style({
  maxWidth: 760,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 48,
  lineHeight: 1.16,
  fontWeight: 800,
  letterSpacing: 0,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 34,
    },
  },
});

export const description = style({
  maxWidth: 680,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 18,
  lineHeight: 1.8,
});

export const linkGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 12,
  marginTop: 44,
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const linkItem = style({
  display: "flex",
  minHeight: 92,
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 16,
  border: `1px solid ${vars.themeColor.semantic.border}`,
  borderRadius: 8,
  backgroundColor: vars.themeColor.semantic.surface,
  color: vars.themeColor.semantic.textPrimary,
  transition: "border-color 160ms ease, background-color 160ms ease",
  ":hover": {
    borderColor: vars.themeColor.semantic.accent,
    backgroundColor: vars.themeColor.semantic.surfaceMuted,
  },
});

export const linkLabel = style({
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 15,
  fontWeight: 800,
});

export const linkDescription = style({
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  lineHeight: 1.55,
});
