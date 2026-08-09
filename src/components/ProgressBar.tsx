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
		const totalHeight = Math.max(0, el.scrollHeight - window.innerHeight);
		const windowScrollTop =
			window.scrollY ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		if (totalHeight === 0 || windowScrollTop === 0) {
			return setProgressPercent(0);
		}

		setProgressPercent(Math.min(100, (windowScrollTop / totalHeight) * 100));
	}, [target]);

	useEffect(() => {
		const animationFrame = window.requestAnimationFrame(scrollEventListener);

		window.addEventListener("scroll", scrollEventListener);
		window.addEventListener("resize", scrollEventListener);
		window.addEventListener("load", scrollEventListener);

		return () => {
			window.cancelAnimationFrame(animationFrame);
			window.removeEventListener("scroll", scrollEventListener);
			window.removeEventListener("resize", scrollEventListener);
			window.removeEventListener("load", scrollEventListener);
		};
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
