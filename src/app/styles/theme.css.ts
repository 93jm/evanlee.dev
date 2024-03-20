import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
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
});

export const vars = { ...root, themeColor };
