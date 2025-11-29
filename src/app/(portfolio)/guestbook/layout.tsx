import queryOptions from "@/service/guestbook/queries";
import { Hydrate, getDehydratedQuery } from "@/utils/react-query";
import { PortfolioLayout } from "@/components/layout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { queryKey, queryFn } = queryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  return (
    <PortfolioLayout
      title="방명록"
      description={`놀러와서 남겨주신 말씀의 갯수 ${123}개`}
    >
      <Hydrate state={{ queries: [query], mutations: [] }}>{children}</Hydrate>
    </PortfolioLayout>
  );
}
