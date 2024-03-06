import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import "./globalTheme.css";
import { Footer } from "./_component";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan | Frontend Developer",
  description: "Just Evan, 프론트엔드 개발자 블로그, 포트폴리오, 웹사이트",
  openGraph: {
    title: "Evan | Frontend Developer",
    description: "Just Evan, 프론트엔드 개발자 블로그, 포트폴리오, 웹사이트",
    images: [
      {
        url: "https://evanlee-dev.com/ogImage.png",
        width: 600,
        height: 400,
      },
      {
        url: "https://www.evanlee-dev.com/ogImage.png",
        width: 600,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
