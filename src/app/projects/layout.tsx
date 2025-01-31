import queryOptions from "@/service/project/queries";
import { PageLayoutProvider } from "../_component";
import { Hydrate, getDehydratedQuery } from "../utils/react-query";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { queryKey, queryFn } = queryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  return (
    <PageLayoutProvider
      title="프로젝트"
      description="제가 작업하고 활동했던 내용을 기록하고 있어요."
    >
      <Hydrate state={{ queries: [query] }}>{children}</Hydrate>
    </PageLayoutProvider>
  );
}
