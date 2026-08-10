import { globalStyle, keyframes, style } from "@vanilla-extract/css";

import { responsiveStyle } from "@/styles/media";
import { vars } from "@/styles/theme.css";

const surfaceBorder = `1px solid ${vars.themeColor.semantic.border}`;
const focusRing = `2px solid ${vars.themeColor.semantic.focusRing}`;

const blogFadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const blogShell = style({
  width: "100%",
  minHeight: "100dvh",
  padding: "96px 24px 80px",
  color: vars.themeColor.semantic.textPrimary,
  opacity: 0,
  animation: `${blogFadeIn} 360ms ease forwards`,
  "@media": {
    "screen and (max-width: 800px)": {
      padding: "84px 18px 64px",
    },
  },
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
  color: vars.themeColor.semantic.textPrimary,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 34,
    },
  },
});

globalStyle(`${blogHero} p`, {
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textSecondary,
});

export const eyebrow = style({
  fontSize: 13,
  fontWeight: 700,
  color: vars.themeColor.semantic.accent,
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
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
  "@media": {
    "screen and (max-width: 800px)": {
      position: "static",
    },
  },
});

export const taxonomyTitle = style({
  marginBottom: 10,
  fontSize: 13,
  fontWeight: 700,
  color: vars.themeColor.semantic.textPrimary,
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
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
  transition: "border-color 160ms ease, transform 160ms ease",
  selectors: {
    "&:hover": {
      borderColor: vars.themeColor.semantic.accent,
      transform: "translateY(-2px)",
    },
    "&:focus-within": {
      borderColor: vars.themeColor.semantic.accent,
    },
  },
});

export const postCardMeta = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 8,
  fontSize: 13,
  color: vars.themeColor.semantic.textSecondary,
});

export const categoryLink = style({
  fontWeight: 700,
  color: vars.themeColor.semantic.accent,
});

export const postCardTitle = style({
  fontSize: 24,
  lineHeight: 1.3,
  fontWeight: 760,
});

globalStyle(`${postCardTitle} a`, {
  color: vars.themeColor.semantic.textPrimary,
});

globalStyle(`${postCardTitle} a:focus-visible`, {
  outline: focusRing,
  outlineOffset: 3,
});

export const postCardDescription = style({
  fontSize: 15,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textSecondary,
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
  borderRadius: vars.themeColor.seed.radius.md,
  color: vars.themeColor.semantic.textSecondary,
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
  color: vars.themeColor.semantic.textPrimary,
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: 32,
    },
  },
});

globalStyle(`${articleHeader} p`, {
  fontSize: 17,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textSecondary,
});

export const articleMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  fontSize: 13,
  color: vars.themeColor.semantic.textSecondary,
});

export const interactionSlot = style({
  display: "flex",
  flexDirection: "column",
  gap: 22,
  marginTop: 48,
  paddingTop: 28,
  borderTop: surfaceBorder,
});

export const interactionSummary = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10,
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const interactionMetric = style({
  display: "flex",
  minHeight: 44,
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  padding: "10px 12px",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  color: vars.themeColor.semantic.textSecondary,
  font: "inherit",
});

export const likeButton = style({
  cursor: "pointer",
  transition: "border-color 160ms ease, color 160ms ease, background-color 160ms ease",
  selectors: {
    "&:hover:not(:disabled)": {
      borderColor: vars.themeColor.semantic.accent,
      color: vars.themeColor.semantic.textPrimary,
    },
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.72,
    },
  },
});

export const likeButtonActive = style({
  borderColor: vars.themeColor.semantic.accent,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textPrimary,
});

globalStyle(`${interactionMetric} strong`, {
  color: vars.themeColor.semantic.textPrimary,
});

export const interactionFeedback = style({
  fontSize: 13,
  lineHeight: 1.6,
  color: vars.themeColor.semantic.textSecondary,
});

export const commentSection = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const commentHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  "@media": {
    "screen and (max-width: 640px)": {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
});

globalStyle(`${commentHeader} h2`, {
  fontSize: 20,
  lineHeight: 1.35,
  color: vars.themeColor.semantic.textPrimary,
});

export const commentActions = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 8,
});

export const textButton = style({
  minHeight: 36,
  padding: "8px 12px",
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
  color: vars.themeColor.semantic.textPrimary,
  cursor: "pointer",
  font: "inherit",
  fontSize: 13,
  fontWeight: 700,
  selectors: {
    "&:hover:not(:disabled)": {
      borderColor: vars.themeColor.semantic.accent,
    },
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 3,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
});

export const commentForm = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 16,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

export const commentTextarea = style({
  minHeight: 116,
  resize: "vertical",
  padding: 12,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
  color: vars.themeColor.semantic.textPrimary,
  font: "inherit",
  lineHeight: 1.7,
  selectors: {
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 2,
    },
  },
});

export const commentFormFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
});

export const commentList = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 0,
  listStyle: "none",
});

export const commentItem = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 16,
  border: surfaceBorder,
  borderRadius: vars.themeColor.seed.radius.md,
  backgroundColor: vars.themeColor.semantic.surface,
});

export const commentAuthorRow = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const commentAvatar = style({
  width: 32,
  height: 32,
  borderRadius: vars.themeColor.seed.radius.pill,
  objectFit: "cover",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
});

export const commentAvatarFallback = style({
  display: "flex",
  width: 32,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.themeColor.seed.radius.pill,
  backgroundColor: vars.themeColor.semantic.surfaceMuted,
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 13,
  fontWeight: 700,
});

export const commentMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

globalStyle(`${commentMeta} strong`, {
  color: vars.themeColor.semantic.textPrimary,
  fontSize: 14,
});

globalStyle(`${commentMeta} time`, {
  color: vars.themeColor.semantic.textSecondary,
  fontSize: 12,
});

export const commentBody = style({
  whiteSpace: "pre-wrap",
  overflowWrap: "anywhere",
  fontSize: 15,
  lineHeight: 1.75,
  color: vars.themeColor.semantic.textPrimary,
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
  borderRadius: vars.themeColor.seed.radius.md,
});

globalStyle(`${toc} h2`, {
  marginBottom: 12,
  fontSize: 13,
  fontWeight: 760,
  color: vars.themeColor.semantic.textPrimary,
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
  color: vars.themeColor.semantic.textSecondary,
});

globalStyle(`${toc} a:hover`, {
  color: vars.themeColor.semantic.textPrimary,
});

globalStyle(`${toc} a:focus-visible`, {
  outline: focusRing,
  outlineOffset: 3,
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
  color: vars.themeColor.semantic.textSecondary,
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
  borderRadius: vars.themeColor.seed.radius.md,
  selectors: {
    "&:hover": {
      borderColor: vars.themeColor.semantic.accent,
    },
    "&:focus-visible": {
      outline: focusRing,
      outlineOffset: 4,
    },
  },
});

globalStyle(`${adjacentLink} span`, {
  fontSize: 13,
  color: vars.themeColor.semantic.textSecondary,
});

globalStyle(`${adjacentLink} strong`, {
  color: vars.themeColor.semantic.textPrimary,
  lineHeight: 1.45,
});
