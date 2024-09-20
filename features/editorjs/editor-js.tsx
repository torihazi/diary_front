import EditorJS, { OutputData } from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { EDITOR_CONFIG } from "./editor-config";
import { Box } from "@mui/material";

const Editor = ({
  value,
  onChange,
  holder,
  readonly = false,
}: {
  value: OutputData;
  onChange: (data: OutputData) => void;
  holder: string;
  readonly?: boolean;
}) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: holder || "editorjs",
        placeholder: "入力してください",
        tools: EDITOR_CONFIG,
        readOnly: readonly,
        data: value,
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <Box
      id={holder}
      p={1}
      pr={0}
      minHeight="300px"
      width="100%"
      border="1px solid #E4E7EB"
      borderRadius="10px"
    ></Box>
  );
};

export default Editor;
