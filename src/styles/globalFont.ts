import localFont from "next/font/local";

const medium = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  variable: "--pretendard-medium",
  weight: "600",
});

const bold = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  variable: "--pretendard-bold",
  weight: "700",
});

export { bold as notoSansKrBold, medium as notoSansKrMedium };
