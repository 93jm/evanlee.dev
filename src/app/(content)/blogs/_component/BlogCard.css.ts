import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";
import { responsiveBlogStyle } from "@/styles/media";

export const cardContainer = style([
  {
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    overflow: "hidden",
    border: `1px solid ${vars.themeColor.borderColor.color}`,
    backgroundColor: vars.themeColor.backgroundColor.color,
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "100%",
    ":hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
]);

export const thumbnailWrapper = style({
  position: "relative",
  width: "100%",
  paddingTop: "60%", // 5:3 aspect ratio (더 컴팩트함)
  overflow: "hidden",
  backgroundColor: vars.themeColor.hoverColor.color,
});

export const thumbnail = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.3s ease",
  selectors: {
    [`${cardContainer}:hover &`]: {
      transform: "scale(1.05)",
    },
  },
});

export const cardContent = style([
  responsiveBlogStyle({
    mobile: {
      padding: "16px",
    },
    desktop: {
      padding: "20px",
    },
  }),
  {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  },
]);

export const cardTitle = style([
  responsiveBlogStyle({
    mobile: {
      fontSize: "16px",
    },
    desktop: {
      fontSize: "18px",
    },
  }),
  {
    fontWeight: "700",
    color: vars.themeColor.fontColor.activeColor,
    margin: 0,
    lineHeight: 1.4,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const cardDescription = style([
  responsiveBlogStyle({
    mobile: {
      fontSize: "13px",
    },
    desktop: {
      fontSize: "14px",
    },
  }),
  {
    color: vars.themeColor.fontColor.notActiveColor,
    margin: 0,
    lineHeight: 1.6,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flex: 1,
  },
]);

export const cardFooter = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "auto",
});

export const cardDate = style({
  fontSize: "13px",
  color: vars.themeColor.fontColor.notActiveColor,
  margin: 0,
});

export const keywordsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
});

export const keywordBadge = style([
  responsiveBlogStyle({
    mobile: {
      fontSize: "11px",
      padding: "4px 8px",
    },
    desktop: {
      fontSize: "12px",
      padding: "5px 10px",
    },
  }),
  {
    backgroundColor: vars.themeColor.hoverColor.color,
    color: vars.themeColor.fontColor.color,
    borderRadius: "4px",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
]);
