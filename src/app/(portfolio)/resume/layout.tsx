import { PortfolioLayout } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PortfolioLayout
      title="이정민 (Evan)"
      description="사용자 경험을 최우선으로 생각하는 프론트엔드 개발자"
    >
      {children}
    </PortfolioLayout>
  );
}
