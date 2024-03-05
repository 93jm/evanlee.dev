import { PageLayoutProvider } from "../_components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayoutProvider
      title="이정민 (Evan)"
      description="사용자 경험을 최우선으로 생각하는 프론트엔드 개발자"
    >
      {children}
    </PageLayoutProvider>
  );
}
