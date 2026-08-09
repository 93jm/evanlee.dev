import { permanentRedirect } from "next/navigation";

import { isPublicContentSlug } from "@/features/blog/utils/public-routes";

interface LegacyBlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LegacyBlogDetailPage({ params }: LegacyBlogDetailPageProps) {
  const { id } = await params;

  if (!isPublicContentSlug(id)) {
    permanentRedirect("/blog");
  }

  permanentRedirect(`/blog/${id}`);
}
