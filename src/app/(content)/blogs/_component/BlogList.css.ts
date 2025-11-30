import { responsiveBlogStyle, responsiveStyle } from "@/styles/media";
import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const blogsContainer = style({
  padding: "0",

  margin: "0 auto",
  "@media": {
    "screen and (max-width: 800px)": {
      padding: "0",
    },
  },
});

export const blogsLayout = style({
  display: "grid",
  maxWidth: "1200px",
  margin: "0 auto", // 가운데 정렬
  gap: "32px",
  alignItems: "start",
  // 1200px 이상: 왼쪽 블로그 그리드 + 오른쪽 필터
  gridTemplateColumns: "1fr 300px",
  "@media": {
    // 1199px 이하: 필터 사라지고 세로 배치
    "screen and (max-width: 1199px)": {
      gridTemplateColumns: "1fr",
      gap: "24px",
    },
  },
});

export const blogsMainContent = style([
  responsiveBlogStyle({
    mobile: {
      padding: "0 16px",
    },
    desktop: {
      padding: "0",
    },
  }),
  {
    minWidth: 0, // Grid overflow 방지
  },
]);

export const blogsGrid = style({
  display: "grid",
  gap: "24px",
  // 1200px 이상: 2열 (사이드바 있을 때)
  gridTemplateColumns: "repeat(2, 1fr)",
  "@media": {
    // 900px ~ 1199px: 3열
    "screen and (min-width: 900px) and (max-width: 1199px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    // 600px ~ 899px: 2열
    "screen and (min-width: 600px) and (max-width: 899px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
    // 600px 미만: 1열
    "screen and (max-width: 599px)": {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  },
});

export const emptyState = style([
  responsiveStyle({
    mobile: {
      padding: "60px 20px",
      fontSize: "15px",
    },
    desktop: {
      padding: "100px 40px",
      fontSize: "16px",
    },
  }),
  {
    textAlign: "center",
    color: vars.themeColor.fontColor.notActiveColor,
  },
]);
