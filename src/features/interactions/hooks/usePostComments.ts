"use client";

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createPostComment,
  getPostComments,
  signInWithGithubForComment,
  signOutCommentAuthor,
  subscribeCommentAuthor,
} from "../comments/comments";
import { interactionQueryKeys } from "../queryKeys";
import type { CommentAuthor } from "../types";

export function useCommentAuthor() {
  const [author, setAuthor] = useState<CommentAuthor | null>(null);
  const [isAuthorLoading, setIsAuthorLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeCommentAuthor((nextAuthor) => {
      setAuthor(nextAuthor);
      setIsAuthorLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    author,
    isAuthorLoading,
    signInWithGithub: signInWithGithubForComment,
    signOut: signOutCommentAuthor,
  };
}

export function usePostComments(slug: string) {
  const queryClient = useQueryClient();
  const commentsQuery = useQuery({
    queryKey: interactionQueryKeys.comments(slug),
    queryFn: () => getPostComments(slug),
  });
  const createCommentMutation = useMutation({
    mutationFn: (body: string) => createPostComment({ slug, body }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: interactionQueryKeys.comments(slug),
        }),
        queryClient.invalidateQueries({
          queryKey: interactionQueryKeys.stats(slug),
        }),
      ]);
    },
  });

  return {
    comments: commentsQuery.data ?? [],
    isCommentsLoading: commentsQuery.isLoading,
    commentsError: commentsQuery.error,
    createComment: createCommentMutation.mutateAsync,
    isCreatingComment: createCommentMutation.isPending,
    createCommentError: createCommentMutation.error,
  };
}
