import Image from "next/image";
import PageLayoutProvider from "./_components/PageLayoutProvider";
import { Main } from "./_components";

export default function Home() {
  return (
    <PageLayoutProvider>
      <Main />
    </PageLayoutProvider>
  );
}
