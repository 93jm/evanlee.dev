import type { Metadata, Viewport } from "next";
import "@seed-design/css/all.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/globalTheme.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, ReactQueryProvider } from "@/provider";
import { siteConfig } from "@/config/site";

const seedThemeInitScript = `
(function () {
  try {
    var storedTheme = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var resolvedTheme = storedTheme === "dark" || (storedTheme !== "light" && prefersDark) ? "dark" : "light";
    var seedColorMode = storedTheme === "light" ? "light-only" : storedTheme === "dark" ? "dark-only" : "system";
    var root = document.documentElement;

    root.dataset.seed = "";
    root.dataset.seedColorMode = seedColorMode;
    root.dataset.seedUserColorScheme = resolvedTheme;
  } catch (error) {}
})();
`;

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
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
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/ogImage.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: seedThemeInitScript }} />
      </head>
      <body className={`${pretendard.className} ${pretendard.variable}`}>
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
