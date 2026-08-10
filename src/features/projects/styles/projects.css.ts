import { globalStyle, style } from "@vanilla-extract/css";

import { responsiveStyle } from "@/styles/media";
import { vars } from "@/styles/theme.css";

const surfaceBorder = `1px solid ${vars.themeColor.semantic.border}`;
const focusRing = `2px solid ${vars.themeColor.semantic.focusRing}`;

export const projectIndex = style({
  display: "flex",
  flexDirection: "column",
  gap: 28,
});

export const projectHero = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: "10px 0 8px",
});

export const eyebrow = style({
  fontSize: 13,
  fontWeight: 700,
  color: vars.themeColor.semantic.accent,
});

globalStyle(`${projectHero} h1`, {
  fontSize: 36,
  lineHeight: 1.18,
  fontWeight: 760,
  letterSpacing: 0,
  color: vars.themeColor.semantic.textPrimary,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 32,
    },
  },
});

globalStyle(`${projectHero} p`, {
  maxWidth: 680,
  fontSize: 16,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textSecondary,
});

export const projectList = style({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  padding: 0,
  listStyle: "none",
});

export const projectCard = style([
  {
    display: "grid",
    gridTemplateColumns: "220px minmax(0, 1fr)",
    minHeight: 180,
    overflow: "hidden",
    border: surfaceBorder,
    borderRadius: vars.themeColor.seed.radius.md,
    backgroundColor: vars.themeColor.semantic.surface,
    transition: "border-color 160ms ease, transform 160ms ease",
    selectors: {
      "&:hover": {
        borderColor: vars.themeColor.semantic.accent,
        transform: "translateY(-2px)",
      },
      "&:focus-visible": {
        outline: focusRing,
        outlineOffset: 4,
      },
    },
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const projectCardMedia = style([
  {
    position: "relative",
    minHeight: 180,
    borderRight: surfaceBorder,
    backgroundColor: vars.themeColor.semantic.surfaceMuted,
  },
  responsiveStyle({
    mobile: {
      aspectRatio: "16 / 9",
      minHeight: "auto",
      borderRight: "none",
      borderBottom: surfaceBorder,
    },
  }),
]);

export const projectCardImage = style({
  objectFit: "cover",
});

export const projectCardBody = style({
  display: "flex",
  minWidth: 0,
  flexDirection: "column",
  gap: 12,
  padding: 20,
});

export const projectCardHeader = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
});

globalStyle(`${projectCardHeader} h2`, {
  fontSize: 22,
  lineHeight: 1.3,
  fontWeight: 740,
  letterSpacing: 0,
  color: vars.themeColor.semantic.textPrimary,
});

export const projectStatus = style({
  width: "fit-content",
  padding: "4px 8px",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.pill,
  fontSize: 12,
  fontWeight: 700,
  color: vars.themeColor.semantic.textSecondary,
});

export const projectDescription = style({
  fontSize: 15,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textSecondary,
});

export const projectCardMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  fontSize: 13,
  color: vars.themeColor.semantic.textMuted,
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  padding: 0,
  listStyle: "none",
});

export const tag = style({
  width: "fit-content",
  padding: "3px 7px",
  borderRadius: vars.themeColor.seed.radius.sm,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 12,
  fontWeight: 700,
});

export const emptyState = style({
  padding: 24,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  color: vars.themeColor.semantic.textSecondary,
});

export const projectArticle = style({
  display: "flex",
  minWidth: 0,
  flexDirection: "column",
  gap: 30,
});

export const projectArticleHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  paddingBottom: 28,
  borderBottom: surfaceBorder,
});

export const backLink = style({
  width: "fit-content",
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  fontWeight: 700,
  selectors: {
    "&:hover": {
      color: vars.themeColor.semantic.textPrimary,
    },
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
  },
});

globalStyle(`${projectArticleHeader} h1`, {
  fontSize: 40,
  lineHeight: 1.16,
  fontWeight: 780,
  letterSpacing: 0,
  color: vars.themeColor.semantic.textPrimary,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 32,
    },
  },
});

globalStyle(`${projectArticleHeader} p`, {
  fontSize: 17,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textSecondary,
});

export const projectCover = style({
  position: "relative",
  aspectRatio: "16 / 9",
  overflow: "hidden",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
});

export const projectCoverImage = style({
  objectFit: "cover",
});

export const summaryGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 18,
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const detailSection = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  paddingTop: 20,
  borderTop: surfaceBorder,
});

globalStyle(`${detailSection} h2`, {
  fontSize: 16,
  lineHeight: 1.45,
  fontWeight: 760,
  letterSpacing: 0,
  color: vars.themeColor.semantic.textPrimary,
});

export const detailList = style({
  display: "grid",
  gridTemplateColumns: "112px minmax(0, 1fr)",
  rowGap: 10,
  columnGap: 14,
  margin: 0,
  "@media": {
    "screen and (max-width: 520px)": {
      gridTemplateColumns: "86px minmax(0, 1fr)",
    },
  },
});

globalStyle(`${detailList} dt`, {
  color: vars.themeColor.semantic.textMuted,
  fontSize: 13,
  fontWeight: 700,
});

globalStyle(`${detailList} dd`, {
  minWidth: 0,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
  lineHeight: 1.55,
});

export const metricList = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  paddingLeft: 18,
});

globalStyle(`${metricList} li`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 14,
  lineHeight: 1.7,
});

export const linkList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  padding: 0,
  listStyle: "none",
});

export const actionLink = style({
  display: "inline-flex",
  minHeight: 36,
  alignItems: "center",
  padding: "8px 12px",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 13,
  fontWeight: 700,
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

export const relatedList = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 0,
  listStyle: "none",
});

export const relatedLink = style({
  display: "inline-flex",
  width: "fit-content",
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
  fontWeight: 700,
  lineHeight: 1.5,
  selectors: {
    "&:hover": {
      color: vars.themeColor.semantic.accent,
    },
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
  },
});

export const articleBody = style({
  paddingTop: 2,
  borderTop: surfaceBorder,
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
  color: vars.themeColor.semantic.textPrimary,
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
  color: vars.themeColor.semantic.accent,
  textDecoration: "underline",
  textUnderlineOffset: 3,
  selectors: {
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
  },
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
  color: vars.themeColor.semantic.textPrimary,
});

export const inlineCode = style({
  padding: "2px 6px",
  borderRadius: vars.themeColor.seed.radius.sm,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: "0.9em",
});

export const codeBlock = style({
  margin: "22px 0",
  padding: "18px 20px",
  overflowX: "auto",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textPrimary,
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
  borderLeft: `4px solid ${vars.themeColor.semantic.accent}`,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textPrimary,
});

export const callout = style({
  margin: "24px 0",
  padding: 18,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
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
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
});

globalStyle(`${articleFigure} figcaption`, {
  marginTop: 8,
  fontSize: 13,
  color: vars.themeColor.semantic.textMuted,
});
