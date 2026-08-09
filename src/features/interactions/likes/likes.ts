import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/data/firestore";

import { getOrCreateAnonymousInteractionUser, waitForAuthReady } from "../auth";
import {
  DEFAULT_POST_STATS_COUNTS,
  POST_LIKES_COLLECTION,
  POST_STATS_COLLECTION,
} from "../constants";
import type { PostLikeState } from "../types";

function getLikeDocumentId(slug: string, uid: string) {
  return `${slug}_${uid}`;
}

function normalizeCount(value: unknown, fallback: number) {
  return typeof value === "number" ? Math.max(0, value) : fallback;
}

export async function getPostLikeState(
  slug: string,
  uid?: string | null
): Promise<PostLikeState> {
  const resolvedUid = uid === undefined ? (await waitForAuthReady())?.uid ?? null : uid;
  const statsRef = doc(db, POST_STATS_COLLECTION, slug);
  const statsSnapshot = await getDoc(statsRef);
  const stats = statsSnapshot.data();
  const likeCount = normalizeCount(
    stats?.likeCount,
    DEFAULT_POST_STATS_COUNTS.likeCount
  );

  if (!resolvedUid) {
    return {
      slug,
      liked: false,
      likeCount,
    };
  }

  const likeRef = doc(db, POST_LIKES_COLLECTION, getLikeDocumentId(slug, resolvedUid));
  const likeSnapshot = await getDoc(likeRef);

  return {
    slug,
    liked: likeSnapshot.exists(),
    likeCount,
  };
}

export async function togglePostLike(slug: string): Promise<PostLikeState> {
  const user = await getOrCreateAnonymousInteractionUser();
  const statsRef = doc(db, POST_STATS_COLLECTION, slug);
  const likeRef = doc(db, POST_LIKES_COLLECTION, getLikeDocumentId(slug, user.uid));

  return runTransaction(db, async (transaction) => {
    const [statsSnapshot, likeSnapshot] = await Promise.all([
      transaction.get(statsRef),
      transaction.get(likeRef),
    ]);
    const currentLikeCount = statsSnapshot.exists()
      ? normalizeCount(statsSnapshot.data().likeCount, 0)
      : 0;

    if (likeSnapshot.exists()) {
      const nextLikeCount = Math.max(0, currentLikeCount - 1);

      transaction.delete(likeRef);
      transaction.set(
        statsRef,
        {
          likeCount: nextLikeCount,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      return {
        slug,
        liked: false,
        likeCount: nextLikeCount,
      };
    }

    const nextLikeCount = currentLikeCount + 1;

    transaction.set(likeRef, {
      slug,
      uid: user.uid,
      createdAt: serverTimestamp(),
    });
    transaction.set(
      statsRef,
      {
        likeCount: nextLikeCount,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    return {
      slug,
      liked: true,
      likeCount: nextLikeCount,
    };
  });
}
