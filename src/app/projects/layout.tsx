import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { PageLayoutProvider } from "../_component";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayoutProvider
      title="프로젝트"
      description="제가 작업하고 활동했던 내용을 기록하고 있어요."
    >
      {children}
    </PageLayoutProvider>
  );
}
