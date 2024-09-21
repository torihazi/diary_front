import { DiaryTemplate } from "@/components/template/DiaryTemplate";
import { DiaryTitleForm } from "@/features/diaries/components/diary-title-form";
import { INITIAL_EDITOR_DATA } from "@/features/editorjs/constants/initial-editor-data";
import {
  diaryInputSchema,
  diaryInputSchemaType,
  useCreateDiary,
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

const DiaryNew = () => {
  const [outputData, setOutputData] = useState<string>(
    JSON.stringify(INITIAL_EDITOR_DATA)
  );
  const router = useRouter();
  const { handleCreateDiary: create } = useCreateDiary({
    onSuccess: () => {
      router.push("/diaries");
    },
  });

  const form = useForm<diaryInputSchemaType>({
    mode: "onChange",
    resolver: zodResolver(diaryInputSchema),
  });

  const onValid: SubmitHandler<diaryInputSchemaType> = (
    data: diaryInputSchemaType
  ) => {
    const newData = {
      ...data,
      content: outputData,
    };
    create(newData);
  };

  return (
    <DiaryTemplate>
      <DiaryTitleForm control={form.control} id="new-diary-title" />
      <Editor value={outputData} onChange={setOutputData} holder="editorjs" />
      <Button
        type="submit"
        form="new-diary-title"
        onClick={form.handleSubmit(onValid)}
        disabled={!form.formState.isValid}
      >
        保存する
      </Button>
    </DiaryTemplate>
  );
};

export default DiaryNew;
