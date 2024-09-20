import { DiariesTemplate } from "@/components/template/DiariesTemplate";
import { DiariesList } from "@/features/diaries/components/diaries-list";
import { DiariesPageTitle } from "@/features/diaries/components/diaries-page-title";
import { DiariesSearchBar } from "@/features/diaries/components/diaries-search-bar";
import { DiaryCreateButton } from "@/features/diaries/components/diary-create-button";
import { useDiaries } from "@/lib/api/diaries";
import { Diary } from "@/types/type";

const DiaryIndex = () => {
  const { data: diaries } = useDiaries();

  return (
    <DiariesTemplate>
      <DiariesPageTitle />
      <DiariesSearchBar />
      <DiariesList diaries={diaries as Diary[]} />
      <DiaryCreateButton />
    </DiariesTemplate>
  );
};

export default DiaryIndex;
