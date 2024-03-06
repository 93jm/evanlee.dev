import { keyframes } from "@vanilla-extract/css";

export const mainFadeUp = keyframes({
  "0%": { transform: "translateY(50px)", opacity: 0 },
  "100%": { transform: "translateY(0px)", opacity: 1 },
});
