import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import { bgBlack, black, gray, white } from "./colors";

const root = createGlobalTheme(":root", {});

const themeColor = createThemeContract({
  backgroundColor: {
    color: null,
    footerColor: null,
  },
  borderColor: {
    color: null,
    blackToWhite: null,
  },
  buttonColor: {
    color: null,
  },
  fontColor: {
    color: null,
    activeColor: null,
    notActiveColor: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  backgroundColor: {
    color: white[100],
    footerColor: gray[100],
  },
  borderColor: {
    color: gray[100],
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
});

export const darkTheme = createTheme(themeColor, {
  backgroundColor: {
    color: bgBlack[100],
    footerColor: bgBlack[100],
  },
  borderColor: {
    color: gray[200],
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
});

export const vars = { ...root, themeColor };
