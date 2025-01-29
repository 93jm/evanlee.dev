import queryOptions from "@/service/guestbook/queries";
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
      title="방명록"
      description={`놀러와서 남겨주신 말씀의 갯수 ${123}개`}
    >
      {children}
      <Hydrate state={{ queries: [query] }}>{children}</Hydrate>
    </PageLayoutProvider>
  );
}
