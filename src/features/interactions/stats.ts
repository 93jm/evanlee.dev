import { doc, getDoc } from "firebase/firestore";

import { db } from "@/data/firestore";

import { DEFAULT_POST_STATS_COUNTS, POST_STATS_COLLECTION } from "./constants";
import type { PostStats } from "./types";

export async function getPostStats(slug: string): Promise<PostStats> {
  const statsSnapshot = await getDoc(doc(db, POST_STATS_COLLECTION, slug));
  const data = statsSnapshot.data();

  return {
    slug,
    viewCount:
      typeof data?.viewCount === "number"
        ? data.viewCount
        : DEFAULT_POST_STATS_COUNTS.viewCount,
    likeCount:
      typeof data?.likeCount === "number"
        ? data.likeCount
        : DEFAULT_POST_STATS_COUNTS.likeCount,
    commentCount:
      typeof data?.commentCount === "number"
        ? data.commentCount
        : DEFAULT_POST_STATS_COUNTS.commentCount,
  };
}
