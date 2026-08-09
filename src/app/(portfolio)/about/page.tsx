import type { Metadata } from "next";

import { AboutView } from "@/features/profile/components/AboutView";

export const metadata: Metadata = {
  title: "About | Evanlee.dev",
  description: "프론트엔드 개발자 Evan Lee의 일하는 방식, 관심사, 제품 개발 원칙을 소개합니다.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Evanlee.dev",
    description: "프론트엔드 개발자 Evan Lee의 일하는 방식, 관심사, 제품 개발 원칙을 소개합니다.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Evanlee.dev",
    description: "프론트엔드 개발자 Evan Lee의 일하는 방식, 관심사, 제품 개발 원칙을 소개합니다.",
    images: ["/ogImage.png"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
