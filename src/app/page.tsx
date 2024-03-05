import { getCarrerRange } from "@/utils/date";
import { PageLayoutProvider } from "./_components";
import AboutMain from "./_components/AboutMain";
import RedirectToAbout from "./_components/RedirectAbout";

export default function Home() {
  return (
    <PageLayoutProvider
      title="Just Evan !"
      description={`안녕하세요 클릭해주셔서 감사합니다. <br/> 저는 ${getCarrerRange()}`}
    >
      <AboutMain />
    </PageLayoutProvider>
  );
}
