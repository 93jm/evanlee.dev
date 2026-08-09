import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import { begie, bgBlack, black, gray, white } from "./colors";

const root = createGlobalTheme(":root", {});

const themeColor = createThemeContract({
  backgroundColor: {
    color: null,
    resumeColor: null,
    resumeSectionColor: null,
    footerColor: null, //푸터 영역 전용 컨트롤
  },
  borderColor: {
    color: null,
    resumeColor: null,
    blackToWhite: null,
  },
  buttonColor: {
    color: null,
  },
  fontColor: {
    color: null, //basic한 color
    activeColor: null, //h태그 시리즈와 강조되는 경우의 color
    notActiveColor: null, //그 이외의 설명 문구들 p, span 포함
  },
  //기본적인 hover 색상 컨트롤
  hoverColor: {
    color: null,
  },
  semantic: {
    appBackground: null,
    surface: null,
    surfaceMuted: null,
    surfaceElevated: null,
    textPrimary: null,
    textSecondary: null,
    textMuted: null,
    border: null,
    borderStrong: null,
    accent: null,
    accentHover: null,
    focusRing: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  backgroundColor: {
    color: white[100],
    resumeColor: begie[100],
    resumeSectionColor: begie[200],
    footerColor: gray[100],
  },
  borderColor: {
    color: gray[100],
    resumeColor: "transparent",
    blackToWhite: black[100],
  },
  buttonColor: {
    color: black[100],
  },
  fontColor: {
    color: black[100],
    activeColor: black[100],
    notActiveColor: gray[400],
  },
  hoverColor: {
    color: gray[100],
  },
  semantic: {
    appBackground: white[100],
    surface: white[100],
    surfaceMuted: gray[100],
    surfaceElevated: white[100],
    textPrimary: black[100],
    textSecondary: "#4b5563",
    textMuted: gray[400],
    border: gray[200],
    borderStrong: black[100],
    accent: "#0f766e",
    accentHover: "#115e59",
    focusRing: "#f59e0b",
  },
});

export const darkTheme = createTheme(themeColor, {
  backgroundColor: {
    color: bgBlack[100],
    resumeColor: "transparent",
    resumeSectionColor: "transparent",
    footerColor: bgBlack[100],
  },
  borderColor: {
    color: gray[200],
    resumeColor: gray[200],
    blackToWhite: white[100],
  },
  buttonColor: {
    color: white[100],
  },
  fontColor: {
    color: white[100],
    activeColor: gray[100],
    notActiveColor: gray[300],
  },
  hoverColor: {
    color: bgBlack[200],
  },
  semantic: {
    appBackground: bgBlack[100],
    surface: bgBlack[100],
    surfaceMuted: bgBlack[200],
    surfaceElevated: "rgb(48, 48, 48)",
    textPrimary: white[100],
    textSecondary: gray[200],
    textMuted: gray[300],
    border: "rgb(92, 92, 92)",
    borderStrong: white[100],
    accent: "#5eead4",
    accentHover: "#99f6e4",
    focusRing: "#fbbf24",
  },
});

export const vars = { ...root, themeColor };

// globalStyle("body", {
//   backgroundColor: themeColor.backgroundColor.color,
// });
