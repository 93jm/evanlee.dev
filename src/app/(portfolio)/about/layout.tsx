import { getCarrerRange } from "@/utils/date";
import { PortfolioLayout } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PortfolioLayout
      title="Just Evan !"
      description={`안녕하세요 클릭해주셔서 감사합니다. <br/> 저는 ${getCarrerRange()}`}
    >
      {children}
    </PortfolioLayout>
  );
}
