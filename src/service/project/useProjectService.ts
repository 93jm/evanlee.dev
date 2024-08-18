import { useQuery } from "@tanstack/react-query";
import queryOptions from "./queries";

export function useProjects() {
  return useQuery(queryOptions.all());
}
