import { globalStyle, style } from "@vanilla-extract/css";
import { colors } from "@/app/styles/colors";
import { flexColumn } from "@/app/styles/layout";
import { vars } from "../styles/theme.css";
import { responsiveStyle } from "../styles/media";

export const projectsSectionWrapper = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, calc(50% - 7px))",
    gap: 15,
    paddingTop: 40,
  },
  responsiveStyle({
    mobile: {
      display: "flex",
      flexDirection: "column",
    },
  }),
]);

export const projectItemCard = style({
  ...flexColumn,
  minHeight: 350,
  border: `1px solid ${vars.themeColor.borderColor.color}`,
  borderRadius: 10,
  backgroundColor: "transparent",
  boxShadow:
    "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;",
  ":hover": {
    transition: "background 200ms ease-in 0s",
    backgroundColor: `${vars.themeColor.hoverColor.color}`,
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

export const projectWorkBadge = style({
  position: "absolute",
  bottom: 0,
  padding: "4px 8px",
  backgroundColor: colors.deepBegie,
  color: colors.gray,
  fontSize: 14,
  fontWeight: 500,
});

export const projectItemContentBox = style([
  {
    ...flexColumn,
    padding: 10,
    height: 150,
    gap: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  responsiveStyle({
    mobile: {
      height: "100%",
    },
  }),
]);

globalStyle(`${projectItemContentBox} h4`, {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
});

globalStyle(`${projectItemContentBox} p`, {
  fontSize: 12,
  lineHeight: 1.5,
  color: `${vars.themeColor.fontColor.notActiveColor}`,
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
