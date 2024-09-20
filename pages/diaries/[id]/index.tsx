import { DiaryTemplate } from "@/components/template/DiaryTemplate";
import { DiaryView } from "@/features/diaries/components/diary-view";
import { useDiary } from "@/lib/api/diaries";
import { Diary } from "@/types/type";
import { useRouter } from "next/router";
import React from "react";

const DiaryShow = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { data: diary } = useDiary(id as Diary["id"]);

  return (
    <DiaryTemplate>
      <DiaryView diary={diary as Diary} />
    </DiaryTemplate>
  );
};

export default DiaryShow;
