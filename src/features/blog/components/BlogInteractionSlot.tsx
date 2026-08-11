"use client";

import { FormEvent, useState } from "react";

import {
  useCommentAuthor,
  usePostComments,
  usePostLike,
  usePostStats,
  useTrackPostView,
  validateCommentBody,
} from "@/features/interactions";
import { COMMENT_BODY_MAX_LENGTH } from "@/features/interactions/constants";

import * as css from "../styles/blog.css";

interface BlogInteractionSlotProps {
  slug: string;
}

function formatCount(count: number | undefined) {
  return new Intl.NumberFormat("ko-KR").format(count ?? 0);
}

function formatCommentDate(date: Date | null) {
  if (!date) {
    return "방금 전";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "잠시 후 다시 시도해 주세요.";
}

export function BlogInteractionSlot({ slug }: BlogInteractionSlotProps) {
  const [commentBody, setCommentBody] = useState("");
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { data: stats, isLoading: isStatsLoading, error: statsError } = usePostStats(slug);
  const { likeState, isLikeLoading, likeError, toggleLike } = usePostLike(slug);
  const {
    author,
    isAuthorLoading,
    signInWithGithub,
    signOut,
  } = useCommentAuthor();
  const {
    comments,
    isCommentsLoading,
    commentsError,
    createComment,
    isCreatingComment,
    createCommentError,
  } = usePostComments(slug);

  useTrackPostView(slug);

  const commentCount = comments.length;
  const bodyValidation = validateCommentBody(commentBody);
  const isSubmitDisabled = !author || !bodyValidation.ok || isCreatingComment;

  const handleGithubSignIn = async () => {
    setFormMessage(null);
    setIsSigningIn(true);

    try {
      await signInWithGithub();
    } catch (error) {
      setFormMessage(getErrorMessage(error));
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(null);

    if (!bodyValidation.ok) {
      setFormMessage(bodyValidation.reason);
      return;
    }

    try {
      await createComment(bodyValidation.body);
      setCommentBody("");
    } catch (error) {
      setFormMessage(getErrorMessage(error));
    }
  };

  return (
    <section className={css.interactionSlot} aria-label="글 반응과 댓글">
      <div className={css.interactionSummary} aria-label="글 반응 요약">
        <div className={css.interactionMetric}>
          <span>조회수</span>
          <strong>{isStatsLoading ? "-" : formatCount(stats?.viewCount)}</strong>
        </div>
        <button
          type="button"
          className={[
            css.interactionMetric,
            css.likeButton,
            likeState?.liked ? css.likeButtonActive : "",
          ].filter(Boolean).join(" ")}
          onClick={() => toggleLike()}
          disabled={isLikeLoading}
          aria-pressed={likeState?.liked ?? false}
        >
          <span>{likeState?.liked ? "좋아요 취소" : "좋아요"}</span>
          <strong>{isStatsLoading ? "-" : formatCount(stats?.likeCount)}</strong>
        </button>
        <div className={css.interactionMetric}>
          <span>댓글</span>
          <strong>{isCommentsLoading ? "-" : formatCount(commentCount)}</strong>
        </div>
      </div>

      {(statsError || likeError || commentsError) && (
        <p className={css.interactionFeedback} role="status">
          반응 데이터를 불러오지 못했습니다. 글은 정상적으로 읽을 수 있습니다.
        </p>
      )}

      <div className={css.commentSection}>
        <div className={css.commentHeader}>
          <h2>댓글</h2>
          <div className={css.commentActions}>
            {author ? (
              <>
                <span className={css.interactionFeedback}>
                  {author.displayName}님으로 작성 중
                </span>
                <button type="button" className={css.textButton} onClick={signOut}>
                  로그아웃
                </button>
              </>
            ) : (
              <button
                type="button"
                className={css.textButton}
                onClick={handleGithubSignIn}
                disabled={isAuthorLoading || isSigningIn}
              >
                GitHub로 댓글 쓰기
              </button>
            )}
          </div>
        </div>

        <form className={css.commentForm} onSubmit={handleSubmit}>
          <textarea
            className={css.commentTextarea}
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
              setFormMessage(null);
            }}
            maxLength={COMMENT_BODY_MAX_LENGTH}
            placeholder={
              author
                ? "글에 대한 생각을 남겨 주세요."
                : "GitHub 로그인 후 댓글을 작성할 수 있습니다."
            }
            disabled={!author || isCreatingComment}
            aria-label="댓글 내용"
          />
          <div className={css.commentFormFooter}>
            <span className={css.interactionFeedback}>
              {commentBody.length}/{COMMENT_BODY_MAX_LENGTH}
            </span>
            <button
              type="submit"
              className={css.textButton}
              disabled={isSubmitDisabled}
            >
              {isCreatingComment ? "등록 중" : "댓글 등록"}
            </button>
          </div>
          {(formMessage || createCommentError) && (
            <p className={css.interactionFeedback} role="alert">
              {formMessage ?? getErrorMessage(createCommentError)}
            </p>
          )}
        </form>

        {isCommentsLoading ? (
          <p className={css.interactionFeedback}>댓글을 불러오고 있습니다.</p>
        ) : comments.length === 0 ? (
          <p className={css.interactionFeedback}>
            아직 댓글이 없습니다. 첫 의견을 남겨보세요.
          </p>
        ) : (
          <ul className={css.commentList}>
            {comments.map((comment) => (
              <li key={comment.id} className={css.commentItem}>
                <div className={css.commentAuthorRow}>
                  {comment.authorPhotoURL ? (
                    <span
                      className={css.commentAvatar}
                      style={{ backgroundImage: `url(${comment.authorPhotoURL})` }}
                      aria-hidden="true"
                    />
                  ) : (
                    <span className={css.commentAvatarFallback} aria-hidden="true">
                      {comment.authorName.slice(0, 1)}
                    </span>
                  )}
                  <div className={css.commentMeta}>
                    <strong>{comment.authorName}</strong>
                    <time dateTime={comment.createdAt?.toISOString()}>
                      {formatCommentDate(comment.createdAt)}
                    </time>
                  </div>
                </div>
                <p className={css.commentBody}>{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
