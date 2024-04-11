import { useEffect, useState } from "react";

export const useMQMatch = (metric: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window?.matchMedia(metric);
    setMatches(mq.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mq.addEventListener("change", handler);

    return () => {
      mq.removeEventListener("change", handler);
    };
  }, [metric]);

  return matches;
};

export const useBreakpoints = () => {
  const checkMobile = useMQMatch(`(max-width: 800px)`);
  const checkDesktop = useMQMatch(`(min-width: 801px)`);

  return {
    checkMobile,
    checkDesktop,
  };
};
