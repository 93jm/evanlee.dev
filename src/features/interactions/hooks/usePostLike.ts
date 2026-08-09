"use client";

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getInteractionUserKey,
  SIGNED_OUT_INTERACTION_USER_KEY,
  subscribeInteractionUser,
} from "../auth";
import { interactionQueryKeys } from "../queryKeys";
import { getPostLikeState, togglePostLike } from "../likes/likes";

function useInteractionUserKey() {
  const [userKey, setUserKey] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeInteractionUser((user) => {
      setUserKey(getInteractionUserKey(user));
    });

    return unsubscribe;
  }, []);

  return userKey;
}

export function usePostLike(slug: string) {
  const queryClient = useQueryClient();
  const userKey = useInteractionUserKey();
  const resolvedUserKey = userKey ?? SIGNED_OUT_INTERACTION_USER_KEY;
  const likeQuery = useQuery({
    queryKey: interactionQueryKeys.like(slug, resolvedUserKey),
    queryFn: () =>
      getPostLikeState(
        slug,
        userKey === SIGNED_OUT_INTERACTION_USER_KEY ? null : userKey
      ),
    enabled: userKey !== null,
    retry: false,
  });
  const likeMutation = useMutation({
    mutationFn: () => togglePostLike(slug),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: interactionQueryKeys.likeScope(slug),
      });
      await queryClient.invalidateQueries({
        queryKey: interactionQueryKeys.stats(slug),
      });
    },
  });

  return {
    likeState: likeQuery.data,
    isLikeLoading: likeQuery.isLoading || likeMutation.isPending,
    likeError: likeQuery.error ?? likeMutation.error,
    toggleLike: likeMutation.mutate,
  };
}
