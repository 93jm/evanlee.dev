import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./styles/theme.css";

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
  userSelect: "none",
});

globalStyle("html, body", {
  maxWidth: "100dvw",
  overflowX: "hidden",
});

globalStyle("button", {
  borderRadius: 0,
  border: "none",
  background: "inherit",
  cursor: "pointer",
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("h1, h2, h3, h4, h5, b", {
  margin: 0,
  color: vars.themeColor.fontColor.activeColor,
});

globalStyle("p, span", {
  color: vars.themeColor.fontColor.notActiveColor,
});

globalStyle("nav", {
  backgroundColor: vars.themeColor.backgroundColor.color,
});

globalStyle("a", {
  color: vars.themeColor.fontColor.color,
});

globalStyle("footer", {
  backgroundColor: vars.themeColor.backgroundColor.footerColor,
  borderTop: `2px solid ${vars.themeColor.borderColor.color}`,
});
