import type { Metadata } from "next";

import { ResumeView } from "@/features/profile/components/ResumeView";

export const metadata: Metadata = {
  title: "Resume | Evanlee.dev",
  description:
    "프론트엔드 개발자 Evan Lee의 경력, 핵심 역량, 제품 개발 경험, 주요 성과를 정리한 이력서입니다.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Evanlee.dev",
    description:
      "프론트엔드 개발자 Evan Lee의 경력, 핵심 역량, 제품 개발 경험, 주요 성과를 정리한 이력서입니다.",
    url: "/resume",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Evanlee.dev",
    description:
      "프론트엔드 개발자 Evan Lee의 경력, 핵심 역량, 제품 개발 경험, 주요 성과를 정리한 이력서입니다.",
    images: ["/ogImage.png"],
  },
};

export default function ResumePage() {
  return <ResumeView />;
}
