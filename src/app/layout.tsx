import type { Metadata } from "next";
import "@seed-design/css/all.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/globalTheme.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, ReactQueryProvider } from "@/provider";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evanlee-dev.com"),
  title: "Evan | Frontend Developer",
  description: "Just Evan, 프론트엔드 개발자 블로그, 포트폴리오, 웹사이트",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "-oAemPV8KKPNAJ5WxgsK75aADtccbcqfmDkuKr-jQww",
    other: {
      "naver-site-verification": "b82da0c0f804bcc1a23bd19659f094bd4c534cb4",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Evan | Frontend Developer",
    description: "Just Evan, 프론트엔드 개발자 블로그, 포트폴리오, 웹사이트",
    url: "/",
    siteName: "Evanlee.dev",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/ogImage.png",
        width: 600,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan | Frontend Developer",
    description: "Just Evan, 프론트엔드 개발자 블로그, 포트폴리오, 웹사이트",
    images: ["/ogImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-seed=""
      data-seed-color-mode="system"
      data-seed-user-color-scheme="light"
      suppressHydrationWarning
    >
      <body className={`${pretendard.className} ${pretendard.variable}`}>
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
