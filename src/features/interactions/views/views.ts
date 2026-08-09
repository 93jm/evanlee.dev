import { doc, increment, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "@/data/firestore";

import { getOrCreateAnonymousInteractionUser } from "../auth";
import {
  LOCAL_VIEW_MARKER_PREFIX,
  POST_STATS_COLLECTION,
} from "../constants";

const inMemoryViewMarkers = new Set<string>();
const LOCAL_STORAGE_PROBE_KEY = `${LOCAL_VIEW_MARKER_PREFIX}:storage-probe`;

function getKoreanDateKey(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getDailyViewMarkerKey(slug: string, date = new Date()) {
  return `${LOCAL_VIEW_MARKER_PREFIX}:${slug}:${getKoreanDateKey(date)}`;
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

function canPersistViewMarker() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    window.localStorage.setItem(LOCAL_STORAGE_PROBE_KEY, "1");
    window.localStorage.removeItem(LOCAL_STORAGE_PROBE_KEY);
    return true;
  } catch {
    return false;
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
  const markerKey = getDailyViewMarkerKey(slug);
  const markerState = getViewMarkerState(markerKey);

  if (markerState !== "untracked") {
    return;
  }

  if (!canPersistViewMarker()) {
    inMemoryViewMarkers.add(markerKey);
    return;
  }

  inMemoryViewMarkers.add(markerKey);

  try {
    await getOrCreateAnonymousInteractionUser();

    const statsRef = doc(db, POST_STATS_COLLECTION, slug);

    await setDoc(
      statsRef,
      {
        viewCount: increment(1),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    markViewTracked(markerKey);
  } catch (error) {
    clearInMemoryViewMarker(markerKey);
    throw error;
  }
}
