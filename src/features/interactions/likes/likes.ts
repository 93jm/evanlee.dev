import {
  doc,
  getDoc,
  deleteDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "@/data/firestore";

import { getOrCreateAnonymousInteractionUser, waitForAuthReady } from "../auth";
import { POST_LIKE_USERS_SUBCOLLECTION, POST_LIKES_COLLECTION } from "../constants";
import type { PostLikeState } from "../types";

function getLikeDocumentRef(slug: string, uid: string) {
  return doc(db, POST_LIKES_COLLECTION, slug, POST_LIKE_USERS_SUBCOLLECTION, uid);
}

export async function getPostLikeState(
  slug: string,
  uid?: string | null
): Promise<PostLikeState> {
  const resolvedUid = uid === undefined ? (await waitForAuthReady())?.uid ?? null : uid;

  if (!resolvedUid) {
    return {
      slug,
      liked: false,
    };
  }

  const likeRef = getLikeDocumentRef(slug, resolvedUid);
  const likeSnapshot = await getDoc(likeRef);

  return {
    slug,
    liked: likeSnapshot.exists(),
  };
}

export async function togglePostLike(slug: string): Promise<PostLikeState> {
  const user = await getOrCreateAnonymousInteractionUser();
  const likeRef = getLikeDocumentRef(slug, user.uid);
  const likeSnapshot = await getDoc(likeRef);

  if (likeSnapshot.exists()) {
    await deleteDoc(likeRef);

    return {
      slug,
      liked: false,
    };
  }

  await setDoc(likeRef, {
      slug,
      uid: user.uid,
      createdAt: serverTimestamp(),
  });

  return {
    slug,
    liked: true,
  };
}
