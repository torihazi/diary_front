import { Diary } from "@/types/type";
import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { DiaryDeleteModal } from "./diary-delete-modal";
import { DeleteButton } from "@/components/ui/delete-button";
import { EditButton } from "@/components/ui/edit-button";

export const DiaryView = ({ diary }: { diary: Diary }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between" mb={3} mt={2}>
          <Typography variant="h3" component="h3">
            {diary?.title}
          </Typography>
          <Stack direction="row" spacing={3}>
            <EditButton
              onClick={() => router.push(`/diaries/${diary.id}/edit`)}
              icon={<Edit />}
            />
            <DeleteButton onClick={() => setIsOpen(true)} icon={<Delete />} />
          </Stack>
        </Box>
        <Box mb={3}>
          <Typography>
            {dayjs(diary?.createdAt).format("YYYY/MM/DD")}
          </Typography>
        </Box>
        <Box>
          <Typography>{diary?.content}</Typography>
        </Box>
      </Box>
      <DiaryDeleteModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        id={diary?.id}
      />
    </>
  );
};
