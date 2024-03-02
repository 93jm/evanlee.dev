import { PageLayoutProvider } from "../_components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayoutProvider>{children}</PageLayoutProvider>;
}
