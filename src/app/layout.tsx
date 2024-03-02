import type { Metadata } from "next";
import "@/styles/globalTheme.css";
import * as font from "@/styles/globalFont";
import { Navbar, Footer } from "./_components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan | Frontend Developer",
  description: "Just Evan, 프론트엔드 개발자 블로그, 포트폴리오, 웹사이트",
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
