"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToAbout() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about");
  }, []);

  return null;
}
