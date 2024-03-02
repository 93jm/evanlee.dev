import { PageLayoutProvider } from "../_components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayoutProvider
      title="프로젝트"
      description="제가 작업하고 활동했던 내용을 모으고 있어요."
    >
      {children}
    </PageLayoutProvider>
  );
}
