import type { User } from "firebase/auth";

export type CommentStatus = "visible" | "hidden" | "deleted";

export interface PostStats {
  slug: string;
  viewCount: number;
  likeCount: number;
}

export interface PostLikeState {
  slug: string;
  liked: boolean;
}

export interface PostComment {
  id: string;
  slug: string;
  body: string;
  authorName: string;
  authorPhotoURL?: string;
  authorUid: string;
  status: CommentStatus;
  createdAt: Date | null;
  updatedAt?: Date | null;
}

export interface CreatePostCommentInput {
  slug: string;
  body: string;
}

export interface CommentAuthor {
  uid: string;
  displayName: string;
  photoURL?: string;
  isGithubUser: boolean;
}

export type FirebaseUser = User;
