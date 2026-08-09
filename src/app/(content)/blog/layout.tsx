import type { ReactNode } from "react";

import { BlogShell } from "@/features/blog/components/BlogShell";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <BlogShell>{children}</BlogShell>;
}
