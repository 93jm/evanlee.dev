import { Noto_Sans_KR } from "next/font/google";

const bold = Noto_Sans_KR({
  weight: "700",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--noto-sans_KR-bold",
  fallback: ["system-ui"],
});

const medium = Noto_Sans_KR({
  weight: "600",
  // display: "fallback",
  subsets: ["latin"],
  // style: "normal",
  variable: "--noto-sans_KR-regular",
  // fallback: ["system-ui"],
});

export { bold as notoSansKrBold, medium as notoSansKrMedium };
