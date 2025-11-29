"use client";

import * as css from "@/components/componentLayout.css";
import { useCallback, useEffect, useState } from "react";

type ProgressbarProps = {
  target: React.RefObject<HTMLDivElement | null>;
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

    // 디버깅: 스크롤 이벤트 발생 시 위치 확인
    // console.log("[ProgressBar] Scroll event:", {
    //   windowScrollTop,
    //   totalHeight,
    //   percent: (windowScrollTop / totalHeight) * 100,
    // });

    if (windowScrollTop === 0) {
      return setProgressPercent(0);
    }

    if (windowScrollTop > totalHeight) {
      return setProgressPercent(100);
    }

    setProgressPercent((windowScrollTop / totalHeight) * 100);
  }, [target]);

  useEffect(() => {
    // 디버깅: 초기 스크롤 위치 확인
    // console.log(
    //   "[ProgressBar] Component mounted, initial scroll:",
    //   window.scrollY
    // );

    // 초기 스크롤 위치 체크 (새로고침 시 브라우저가 스크롤 위치를 복원하는 경우)
    // scrollEventListener();

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
