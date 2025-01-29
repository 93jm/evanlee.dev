import { fetchGuestBooks } from "@/data/firestore";

const queryKeys = {
  all: ["guestbook"] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: fetchGuestBooks,
  }),
  totalCount: () => ({
    queryKeys: [...queryKeys.all, "count"],
    queryFn: () => {},
  }),
};

export default queryOptions;
