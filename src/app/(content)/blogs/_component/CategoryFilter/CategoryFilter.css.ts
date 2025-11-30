import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

// 데스크톱용 사이드바 (우측 고정) - 1200px 이상에서만 표시
export const filterContainer = style({
  position: "sticky",
  top: "72px", // Navbar 높이 + 여백
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "20px",
  backgroundColor: vars.themeColor.backgroundColor.color,
  maxHeight: "calc(100vh - 100px)",
  overflowY: "hidden",
  "@media": {
    // 1199px 이하에서 숨김
    "screen and (max-width: 1199px)": {
      display: "none",
    },
  },
});

// 모바일용 가로 스크롤 필터 (상단) - 1199px 이하에서만 표시
export const filterContainerMobile = style({
  display: "none",
  "@media": {
    "screen and (max-width: 1199px)": {
      display: "flex",
      width: "100%",
      overflow: "hidden", // 부모에서 오버플로우 숨김
    },
  },
});

export const mobileCategoryScroll = style({
  display: "flex",
  gap: "8px",
  overflowX: "hidden",
  overflowY: "hidden",
  userSelect: "none", // 드래그 시 텍스트 선택 방지
  marginLeft: "-16px",
  paddingLeft: "16px",
});

export const mobileCategoryChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "9px 16px",
  borderRadius: "20px",
  backgroundColor: vars.themeColor.chipColor.base,
  color: vars.themeColor.fontColor.color,
  fontSize: "13px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  whiteSpace: "nowrap",
  flexShrink: 0,
  ":active": {
    transform: "scale(0.97)",
  },
  ":hover": {
    opacity: 0.6,
  },
});

export const mobileCategoryChipFirst = style({
  marginLeft: "16px",
});

export const mobileCategoryChipLast = style({
  marginRight: "16px",
});

export const filterTitle = style({
  fontSize: "18px",
  fontWeight: "700",
  color: vars.themeColor.fontColor.activeColor,
  margin: "0 0 8px 0",
});

export const categoryList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const categoryChip = style({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 14px",
  borderRadius: "8px",
  gap: "6px",
  // border: `1px solid ${vars.themeColor.borderColor.color}`,
  backgroundColor: vars.themeColor.chipColor.base,
  color: vars.themeColor.fontColor.color,
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    transform: "translateY(-3px)",
    // borderColor: vars.themeColor.fontColor.activeColor,
  },
});

export const categoryChipActive = style({
  backgroundColor: vars.themeColor.chipColor.active,
});

export const categoryName = style({
  flex: 1,
});

export const categoryCount = style({
  fontSize: "11px",
  fontWeight: "700",
  padding: "3px 8px",
  borderRadius: "10px",
  backgroundColor: vars.themeColor.hoverColor.color,
  color: vars.themeColor.fontColor.notActiveColor,
  minWidth: "22px",
  textAlign: "center",
  transition: "all 0.25s ease",
});

export const categoryColorActive = style({
  color: "#FFFFFF !important",
});

export const categoryBgColorActive = style({
  backgroundColor: "rgba(255, 255, 255, 0.25)",
});
