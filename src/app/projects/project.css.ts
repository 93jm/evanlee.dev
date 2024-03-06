import { globalStyle, style } from "@vanilla-extract/css";
import { colors } from "@/app/styles/colors";
import { flexColumn, flexRowCenter } from "@/app/styles/layout";

export const projectsSectionWrapper = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, calc(50% - 7px))",
  gap: 15,
  paddingTop: 40,
});

export const projectItemCard = style({
  ...flexColumn,
  minHeight: 350,
  border: `1px solid ${colors.realLightGray}`,
  borderRadius: 10,
  backgroundColor: "transparent",
  boxShadow:
    "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;",
  ":hover": {
    transition: "background 200ms ease-in 0s",
    backgroundColor: `${colors.realLightGray}`,
  },
});

export const projectItemImgBox = style({
  position: "relative",
  flexGrow: 1,
  borderBottom: `1px solid ${colors.lightGray}`,

  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,

  ":hover": {
    transition: "all 0.2s linear 0s",
  },
});

export const projectItemContentBox = style({
  ...flexColumn,
  padding: 10,
  height: 150,
  gap: 5,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
});

globalStyle(`${projectItemContentBox} h4`, {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
});

globalStyle(`${projectItemContentBox} p`, {
  fontSize: 12,
  lineHeight: 1.5,
  color: `${colors.gray}`,
});

export const projectStackBadgeWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 4,
});

globalStyle(`${projectStackBadgeWrapper} span`, {
  width: "fit-content",
  padding: "2px 5px",
  borderRadius: 3,
  fontSize: 10,
  fontWeight: 600,
  textAlign: "center",
});
