import { DiaryTemplate } from "@/components/template/DiaryTemplate";
import { DiaryTitleForm } from "@/features/diaries/components/diary-title-form";
import { INITIAL_EDITOR_DATA } from "@/features/editorjs/constants/initial-editor-data";
import {
  diaryInputSchema,
  diaryInputSchemaType,
  useDiary,
  useUpdateDiary,
} from "@/lib/api/diaries";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Editor = dynamic(() => import("@/features/editorjs/editor-js"), {
  ssr: false,
});

export const DiaryEdit = () => {
  const [outputData, setOutputData] = useState<string>(
    JSON.stringify(INITIAL_EDITOR_DATA)
  );
  const router = useRouter();

  const { data: diary } = useDiary(router.query.id as string);
  const { handleUpdateDiary: update } = useUpdateDiary({
    onSuccess: () => {
      router.push("/diaries");
    },
  });

  const form = useForm<diaryInputSchemaType>({
    mode: "onChange",
    resolver: zodResolver(diaryInputSchema),
    values: {
      title: diary?.title as string,
    },
  });

  const onValid: SubmitHandler<diaryInputSchemaType> = (
    data: diaryInputSchemaType
  ) => {
    const newData = {
      ...data,
      content: outputData,
    };
    update({ data: newData, id: router.query.id as string });
  };

  return (
    <DiaryTemplate>
      <DiaryTitleForm control={form.control} id="update-diary-title" />
      <Editor
        value={diary?.content as string}
        onChange={setOutputData}
        holder="editorjs"
      />
      <Button
        type="submit"
        form="update-diary-title"
        onClick={form.handleSubmit(onValid)}
        disabled={!form.formState.isValid}
      >
        更新する
      </Button>
    </DiaryTemplate>
  );
};

export default DiaryEdit;
