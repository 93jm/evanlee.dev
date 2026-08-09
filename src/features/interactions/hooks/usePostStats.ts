"use client";

import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { interactionQueryKeys } from "../queryKeys";
import { getPostStats } from "../stats";
import { trackPostView } from "../views/views";

export function useTrackPostView(slug: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    let ignore = false;

    async function trackView() {
      try {
        await trackPostView(slug);

        if (!ignore) {
          await queryClient.invalidateQueries({
            queryKey: interactionQueryKeys.stats(slug),
          });
        }
      } catch (error) {
        console.error("Failed to track post view", error);
      }
    }

    trackView();

    return () => {
      ignore = true;
    };
  }, [queryClient, slug]);
}

export function usePostStats(slug: string) {
  return useQuery({
    queryKey: interactionQueryKeys.stats(slug),
    queryFn: () => getPostStats(slug),
  });
}
