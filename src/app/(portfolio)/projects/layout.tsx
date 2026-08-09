import { PortfolioLayout } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PortfolioLayout>{children}</PortfolioLayout>;
}
