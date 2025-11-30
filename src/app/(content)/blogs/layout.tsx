import { BlogLayout } from "@/components/layout";

export const metadata = {
  title: "Blog | Evan Lee",
  description: "개발하면서 배운 것들과 경험을 공유하는 블로그입니다.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BlogLayout>{children}</BlogLayout>;
}
