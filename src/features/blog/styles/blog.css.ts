import { globalStyle, keyframes, style } from "@vanilla-extract/css";

import { responsiveStyle } from "@/styles/media";
import { vars } from "@/styles/theme.css";

const surfaceBorder = `1px solid ${vars.themeColor.borderColor.color}`;

const blogFadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const blogShell = style({
  width: "100%",
  minHeight: "100dvh",
  padding: "96px 24px 80px",
  color: vars.themeColor.fontColor.color,
  opacity: 0,
  animation: `${blogFadeIn} 360ms ease forwards`,
});

export const blogIndex = style({
  width: "min(1120px, 100%)",
  margin: "0 auto",
});

export const blogHero = style({
  display: "flex",
  flexDirection: "column",
  gap: 14,
  padding: "24px 0 32px",
});

globalStyle(`${blogHero} h1`, {
  maxWidth: 760,
  fontSize: 44,
  lineHeight: 1.08,
  fontWeight: 760,
  letterSpacing: 0,
  color: vars.themeColor.fontColor.activeColor,
});

globalStyle(`${blogHero} p`, {
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.75,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const eyebrow = style({
  fontSize: 13,
  fontWeight: 700,
  color: "#0f8f6f",
});

export const blogIndexGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "260px minmax(0, 1fr)",
    alignItems: "start",
    gap: 28,
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
      gap: 20,
    },
  }),
]);

export const taxonomyPanel = style({
  position: "sticky",
  top: 88,
  display: "flex",
  flexDirection: "column",
  gap: 22,
  padding: 18,
  border: surfaceBorder,
  borderRadius: 8,
  backgroundColor: vars.themeColor.backgroundColor.color,
});

export const taxonomyTitle = style({
  marginBottom: 10,
  fontSize: 13,
  fontWeight: 700,
  color: vars.themeColor.fontColor.activeColor,
});

export const taxonomyList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
});

export const postList = style({
  display: "flex",
  flexDirection: "column",
  gap: 18,
});

export const postCard = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 24,
  border: surfaceBorder,
  borderRadius: 8,
  backgroundColor: vars.themeColor.backgroundColor.color,
  transition: "border-color 160ms ease, transform 160ms ease",
  selectors: {
    "&:hover": {
      borderColor: "#0f8f6f",
      transform: "translateY(-2px)",
    },
  },
});

export const postCardMeta = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 8,
  fontSize: 13,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const categoryLink = style({
  fontWeight: 700,
  color: "#0f8f6f",
});

export const postCardTitle = style({
  fontSize: 24,
  lineHeight: 1.3,
  fontWeight: 760,
});

globalStyle(`${postCardTitle} a`, {
  color: vars.themeColor.fontColor.activeColor,
});

export const postCardDescription = style({
  fontSize: 15,
  lineHeight: 1.75,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  padding: 0,
  listStyle: "none",
});

export const emptyState = style({
  padding: 32,
  border: surfaceBorder,
  borderRadius: 8,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const articleGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "minmax(0, 760px) 240px",
    gap: 40,
    width: "min(1080px, 100%)",
    margin: "0 auto",
    alignItems: "start",
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
      gap: 28,
    },
  }),
]);

export const article = style({
  minWidth: 0,
});

export const articleHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  paddingBottom: 34,
  borderBottom: surfaceBorder,
});

globalStyle(`${articleHeader} h1`, {
  fontSize: 42,
  lineHeight: 1.16,
  fontWeight: 780,
  letterSpacing: 0,
  color: vars.themeColor.fontColor.activeColor,
});

globalStyle(`${articleHeader} p`, {
  fontSize: 17,
  lineHeight: 1.75,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const articleMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  fontSize: 13,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const interactionSlot = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 10,
  marginTop: 10,
});

globalStyle(`${interactionSlot} div, ${interactionSlot} button`, {
  display: "flex",
  minHeight: 44,
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  padding: "10px 12px",
  border: surfaceBorder,
  borderRadius: 8,
  color: vars.themeColor.fontColor.notActiveColor,
  font: "inherit",
});

globalStyle(`${interactionSlot} strong`, {
  color: vars.themeColor.fontColor.activeColor,
});

globalStyle(`${interactionSlot} button:disabled`, {
  cursor: "not-allowed",
  opacity: 0.72,
});

export const articleBody = style({
  paddingTop: 34,
});

export const articleAside = style([
  {
    position: "sticky",
    top: 92,
  },
  responsiveStyle({
    mobile: {
      position: "static",
    },
  }),
]);

export const toc = style({
  padding: 18,
  border: surfaceBorder,
  borderRadius: 8,
});

globalStyle(`${toc} h2`, {
  marginBottom: 12,
  fontSize: 13,
  fontWeight: 760,
  color: vars.themeColor.fontColor.activeColor,
});

globalStyle(`${toc} ol`, {
  display: "flex",
  flexDirection: "column",
  gap: 9,
  padding: 0,
  listStyle: "none",
});

globalStyle(`${toc} a`, {
  fontSize: 13,
  lineHeight: 1.45,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const tocDepthThree = style({
  paddingLeft: 12,
});

export const articleHeading = style({
  scrollMarginTop: 84,
});

export const headingAnchor = style({
  color: "inherit",
});

export const articleParagraph = style({
  margin: "18px 0",
  fontSize: 16,
  lineHeight: 1.88,
  color: vars.themeColor.fontColor.color,
});

globalStyle(`${articleBody} h1`, {
  margin: "40px 0 16px",
  fontSize: 32,
  lineHeight: 1.3,
});

globalStyle(`${articleBody} h2`, {
  margin: "42px 0 16px",
  fontSize: 28,
  lineHeight: 1.34,
});

globalStyle(`${articleBody} h3`, {
  margin: "34px 0 12px",
  fontSize: 22,
  lineHeight: 1.4,
});

globalStyle(`${articleBody} h4`, {
  margin: "28px 0 10px",
  fontSize: 18,
  lineHeight: 1.45,
});

export const articleLink = style({
  color: "#0f8f6f",
  textDecoration: "underline",
  textUnderlineOffset: 3,
});

export const articleList = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  margin: "18px 0",
  paddingLeft: 24,
});

export const articleListItem = style({
  fontSize: 16,
  lineHeight: 1.8,
  color: vars.themeColor.fontColor.color,
});

export const inlineCode = style({
  padding: "2px 6px",
  borderRadius: 6,
  backgroundColor: vars.themeColor.hoverColor.color,
  color: vars.themeColor.fontColor.activeColor,
  fontSize: "0.9em",
});

export const codeBlock = style({
  margin: "22px 0",
  padding: "18px 20px",
  overflowX: "auto",
  border: surfaceBorder,
  borderRadius: 8,
  backgroundColor: vars.themeColor.hoverColor.color,
  color: vars.themeColor.fontColor.activeColor,
  lineHeight: 1.7,
});

globalStyle(`${articleBody} [data-rehype-pretty-code-figure]`, {
  margin: "22px 0",
});

globalStyle(`${articleBody} [data-rehype-pretty-code-figure] pre`, {
  margin: 0,
});

export const blockquote = style({
  margin: "24px 0",
  padding: "14px 18px",
  borderLeft: "4px solid #0f8f6f",
  backgroundColor: vars.themeColor.hoverColor.color,
  color: vars.themeColor.fontColor.color,
});

export const callout = style({
  margin: "24px 0",
  padding: 18,
  border: surfaceBorder,
  borderRadius: 8,
  backgroundColor: vars.themeColor.hoverColor.color,
});

export const tableScrollArea = style({
  margin: "24px 0",
  overflowX: "auto",
});

export const articleTable = style({
  width: "100%",
  borderCollapse: "collapse",
});

globalStyle(`${articleTable} th, ${articleTable} td`, {
  padding: "10px 12px",
  border: surfaceBorder,
  textAlign: "left",
});

export const articleFigure = style({
  margin: "24px 0",
});

export const articleImage = style({
  display: "block",
  width: "100%",
  height: "auto",
  border: surfaceBorder,
  borderRadius: 8,
  backgroundColor: vars.themeColor.hoverColor.color,
});

globalStyle(`${articleFigure} figcaption`, {
  marginTop: 8,
  fontSize: 13,
  color: vars.themeColor.fontColor.notActiveColor,
});

export const adjacentNav = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 14,
    marginTop: 48,
    paddingTop: 28,
    borderTop: surfaceBorder,
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const adjacentLink = style({
  display: "flex",
  minHeight: 108,
  flexDirection: "column",
  justifyContent: "center",
  gap: 8,
  padding: 18,
  border: surfaceBorder,
  borderRadius: 8,
});

globalStyle(`${adjacentLink} span`, {
  fontSize: 13,
  color: vars.themeColor.fontColor.notActiveColor,
});

globalStyle(`${adjacentLink} strong`, {
  color: vars.themeColor.fontColor.activeColor,
  lineHeight: 1.45,
});
