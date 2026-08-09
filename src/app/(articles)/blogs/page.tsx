import { permanentRedirect } from "next/navigation";

export default function LegacyBlogsPage() {
  permanentRedirect("/blog");
}
