"use client";

import { useEffect, useState } from "react";

export default function useFirstRender() {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return isRender;
}
