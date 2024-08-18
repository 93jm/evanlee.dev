import { fetchProjects } from "@/data/firestore";

const queryKeys = {
  all: ["projects"] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: fetchProjects,
  }),
};

export default queryOptions;
