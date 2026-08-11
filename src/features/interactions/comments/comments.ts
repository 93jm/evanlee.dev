import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import {
  GithubAuthProvider,
  linkWithPopup,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, db } from "@/data/firestore";

import {
  COMMENT_BODY_MAX_LENGTH,
  COMMENT_STATUS_VISIBLE,
  GITHUB_PROVIDER_ID,
  POST_COMMENTS_COLLECTION,
  POST_COMMENTS_PAGE_SIZE,
} from "../constants";
import type {
  CommentAuthor,
  CommentStatus,
  CreatePostCommentInput,
  FirebaseUser,
  PostComment,
} from "../types";

function toDate(value: unknown) {
  if (value instanceof Timestamp) {
    return value.toDate();
  }

  return null;
}

function toCommentStatus(value: unknown): CommentStatus {
  if (value === COMMENT_STATUS_VISIBLE) {
    return COMMENT_STATUS_VISIBLE;
  }

  return "hidden";
}

function isGithubUser(user: FirebaseUser) {
  return user.providerData.some((provider) => provider.providerId === GITHUB_PROVIDER_ID);
}

function getAuthErrorCode(error: unknown) {
  if (typeof error !== "object" || error === null || !("code" in error)) {
    return null;
  }

  const code = (error as { code?: unknown }).code;
  return typeof code === "string" ? code : null;
}

function isGithubLinkConflict(error: unknown) {
  return [
    "auth/account-exists-with-different-credential",
    "auth/credential-already-in-use",
    "auth/email-already-in-use",
    "auth/provider-already-linked",
  ].includes(getAuthErrorCode(error) ?? "");
}

function getCommentAuthor(user: FirebaseUser | null): CommentAuthor | null {
  if (!user || !isGithubUser(user)) {
    return null;
  }

  return {
    uid: user.uid,
    displayName: user.displayName ?? "GitHub 사용자",
    photoURL: user.photoURL ?? undefined,
    isGithubUser: true,
  };
}

export function subscribeCommentAuthor(
  onChange: (author: CommentAuthor | null) => void
) {
  return onAuthStateChanged(auth, (user) => {
    onChange(getCommentAuthor(user));
  });
}

export async function signInWithGithubForComment() {
  const currentUser = auth.currentUser;

  if (currentUser?.isAnonymous) {
    try {
      const credential = await linkWithPopup(currentUser, new GithubAuthProvider());
      return getCommentAuthor(credential.user);
    } catch (error) {
      if (!isGithubLinkConflict(error)) {
        throw error;
      }
    }
  }

  const credential = await signInWithPopup(auth, new GithubAuthProvider());
  return getCommentAuthor(credential.user);
}

export async function signOutCommentAuthor() {
  await signOut(auth);
}

export function validateCommentBody(body: string) {
  const trimmedBody = body.trim();

  if (trimmedBody.length === 0) {
    return {
      ok: false,
      reason: "댓글 내용을 입력해 주세요.",
    } as const;
  }

  if (COMMENT_BODY_MAX_LENGTH < trimmedBody.length) {
    return {
      ok: false,
      reason: `댓글은 ${COMMENT_BODY_MAX_LENGTH}자 이하로 작성해 주세요.`,
    } as const;
  }

  return {
    ok: true,
    body: trimmedBody,
  } as const;
}

export async function getPostComments(slug: string): Promise<PostComment[]> {
  const commentsRef = collection(db, POST_COMMENTS_COLLECTION);
  const commentsQuery = query(
    commentsRef,
    where("slug", "==", slug),
    where("status", "==", COMMENT_STATUS_VISIBLE),
    orderBy("createdAt", "asc"),
    limit(POST_COMMENTS_PAGE_SIZE)
  );
  const snapshot = await getDocs(commentsQuery);

  return snapshot.docs.map((commentDoc) => {
    const data = commentDoc.data();

    return {
      id: commentDoc.id,
      slug: String(data.slug ?? slug),
      body: String(data.body ?? ""),
      authorName: String(data.authorName ?? "GitHub 사용자"),
      authorPhotoURL:
        typeof data.authorPhotoURL === "string" ? data.authorPhotoURL : undefined,
      authorUid: String(data.authorUid ?? ""),
      status: toCommentStatus(data.status),
      createdAt: toDate(data.createdAt),
      updatedAt: toDate(data.updatedAt),
    };
  });
}

export async function createPostComment(input: CreatePostCommentInput) {
  const validation = validateCommentBody(input.body);

  if (!validation.ok) {
    throw new Error(validation.reason);
  }

  const author = getCommentAuthor(auth.currentUser);

  if (!author) {
    throw new Error("GitHub 로그인 후 댓글을 작성할 수 있습니다.");
  }

  const commentsRef = collection(db, POST_COMMENTS_COLLECTION);
  const commentData = {
    slug: input.slug,
    body: validation.body,
    authorName: author.displayName,
    authorUid: author.uid,
    status: COMMENT_STATUS_VISIBLE,
    createdAt: serverTimestamp(),
  };

  const newCommentRef = await addDoc(commentsRef, commentData);

  return newCommentRef.id;
}
