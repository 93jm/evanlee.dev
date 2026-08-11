import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  overflowX: "hidden",
  backgroundColor: vars.themeColor.semantic.appBackground,
  color: vars.themeColor.semantic.textPrimary,
});

globalStyle("button", {
  borderRadius: 0,
  border: "none",
  background: "inherit",
  cursor: "pointer",
});

globalStyle("button:focus-visible, a:focus-visible", {
  outline: `2px solid ${vars.themeColor.semantic.focusRing}`,
  outlineOffset: 3,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("h1, h2, h3, h4, h5, b", {
  margin: 0,
  color: vars.themeColor.semantic.textPrimary,
  letterSpacing: 0,
});

globalStyle("nav", {
  backgroundColor: vars.themeColor.semantic.surfaceElevated,
});

globalStyle("a", {
  color: "inherit",
});

globalStyle("footer", {
  backgroundColor: vars.themeColor.backgroundColor.footerColor,
  borderTop: `1px solid ${vars.themeColor.semantic.border}`,
});
