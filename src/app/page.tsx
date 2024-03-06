import { getCarrerRange } from "@/utils/date";
import { PageLayoutProvider } from "./_component";
import AboutMain from "./about/_component/AboutMain";

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
