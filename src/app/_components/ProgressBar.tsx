"use client";

import * as css from "@/styles/layout.css";
import { useCallback, useEffect, useState } from "react";

type ProgressbarProps = {
  target: React.RefObject<HTMLDivElement>;
};

export default function ProgressBar({ target }: ProgressbarProps) {
  const [progressPercent, setProgressPercent] = useState(0);

  const scrollEventListener = useCallback(() => {
    if (!target.current) {
      return;
    }

    const el = target.current;
    const totalHeight =
      //198 = footer height
      el.clientHeight - el.offsetTop - window.innerHeight + 198;

    const windowScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (windowScrollTop === 0) {
      return setProgressPercent(0);
    }

    if (windowScrollTop > totalHeight) {
      return setProgressPercent(100);
    }

    setProgressPercent((windowScrollTop / totalHeight) * 100);
  }, [target]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEventListener);

    return () => window.removeEventListener("scroll", scrollEventListener);
  }, [scrollEventListener]);

  return (
    <div className={css.progressBarWrapper}>
      <div
        className={css.progressBar}
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
}
