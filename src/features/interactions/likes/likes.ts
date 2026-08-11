import {
  doc,
  getDoc,
  increment,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/data/firestore";

import { getOrCreateAnonymousInteractionUser, waitForAuthReady } from "../auth";
import {
  POST_LIKE_USERS_SUBCOLLECTION,
  POST_LIKES_COLLECTION,
  POST_STATS_COLLECTION,
} from "../constants";
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
  const statsRef = doc(db, POST_STATS_COLLECTION, slug);

  return runTransaction(db, async (transaction) => {
    const likeSnapshot = await transaction.get(likeRef);

    if (likeSnapshot.exists()) {
      transaction.delete(likeRef);
      transaction.set(
        statsRef,
        {
          likeCount: increment(-1),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      return {
        slug,
        liked: false,
      };
    }

    transaction.set(likeRef, {
      slug,
      uid: user.uid,
      createdAt: serverTimestamp(),
    });
    transaction.set(
      statsRef,
      {
        likeCount: increment(1),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    return {
      slug,
      liked: true,
    };
  });
}
