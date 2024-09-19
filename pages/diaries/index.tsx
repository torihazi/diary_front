import { DiariesTemplate } from "@/components/template/DiariesTemplate";
import { DiariesList } from "@/features/diaries/components/diaries-list";
import { DiariesPageTitle } from "@/features/diaries/components/diaries-page-title";
import { DiariesSearchBar } from "@/features/diaries/components/diaries-search-bar";
import { useDiaries } from "@/lib/api/diaries";

const DiaryIndex = () => {
  const { data: diaries } = useDiaries();

  return (
    <DiariesTemplate>
      <DiariesPageTitle />
      <DiariesSearchBar />
      <DiariesList diaries={diaries} />
    </DiariesTemplate>
  );
};

export default DiaryIndex;
