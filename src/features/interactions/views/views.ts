import { doc, increment, runTransaction, serverTimestamp } from "firebase/firestore";

import { db } from "@/data/firestore";

import { getOrCreateAnonymousInteractionUser } from "../auth";
import {
  LOCAL_VIEW_MARKER_PREFIX,
  POST_STATS_COLLECTION,
  POST_VIEW_USERS_SUBCOLLECTION,
  POST_VIEWS_COLLECTION,
} from "../constants";

const inMemoryViewMarkers = new Set<string>();

function getViewMarkerKey(slug: string) {
  return `${LOCAL_VIEW_MARKER_PREFIX}:${slug}`;
}

function getViewMarkerState(markerKey: string) {
  if (typeof window === "undefined") {
    return "tracked";
  }

  if (inMemoryViewMarkers.has(markerKey)) {
    return "tracked";
  }

  try {
    if (window.localStorage.getItem(markerKey) === "1") {
      inMemoryViewMarkers.add(markerKey);
      return "tracked";
    }

    return "untracked";
  } catch {
    inMemoryViewMarkers.add(markerKey);
    return "unavailable";
  }
}

function markViewTracked(markerKey: string) {
  inMemoryViewMarkers.add(markerKey);

  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(markerKey, "1");
  } catch {
    // The in-memory marker avoids repeat writes during the current session.
  }
}

function clearInMemoryViewMarker(markerKey: string) {
  inMemoryViewMarkers.delete(markerKey);
}

export async function trackPostView(slug: string) {
  const markerKey = getViewMarkerKey(slug);
  const markerState = getViewMarkerState(markerKey);

  if (markerState !== "untracked") {
    return;
  }

  inMemoryViewMarkers.add(markerKey);

  try {
    const user = await getOrCreateAnonymousInteractionUser();
    const statsRef = doc(db, POST_STATS_COLLECTION, slug);
    const viewRef = doc(
      db,
      POST_VIEWS_COLLECTION,
      slug,
      POST_VIEW_USERS_SUBCOLLECTION,
      user.uid
    );

    await runTransaction(db, async (transaction) => {
      const viewSnapshot = await transaction.get(viewRef);

      if (viewSnapshot.exists()) {
        return;
      }

      transaction.set(viewRef, {
        slug,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      transaction.set(
        statsRef,
        {
          viewCount: increment(1),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    });

    markViewTracked(markerKey);
  } catch (error) {
    clearInMemoryViewMarker(markerKey);
    throw error;
  }
}
