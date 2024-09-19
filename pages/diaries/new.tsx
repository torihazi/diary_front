import { DiaryTemplate } from "@/components/template/DiaryTemplate";
import { OutputData } from "@editorjs/editorjs";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@/features/editorjs/editor-js"), {
  ssr: false,
});

const DiaryNew = () => {
  const [data, setData] = useState<OutputData | null>(null);
  return (
    <DiaryTemplate>
      {/* ここに<form id="diary-form">タイトルinput</form>みたいなものを入れ込む */}
      {/* で buttonにsubmit設定して、form="diary-form"みたいにして連携させる*/}
      {/* あとはRHFのonsubmitでeditorのdataをsubmitのdataにくっつけてbackend送信 */}
      <Editor value={data} onChange={setData} holder="editorjs" />
      <Button onClick={() => console.log(data)}>保存する</Button>
    </DiaryTemplate>
  );
};

export default DiaryNew;
