import { CustomLink } from "@/components/ui/cutom-link";
import { Diary } from "@/types/type";
import { Delete, Edit } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";

export const DiaryView = ({ diary }: { diary: Diary }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={3} mt={2}>
        <Typography variant="h3" component="h3">
          {diary?.title}
        </Typography>
        <Stack direction="row" spacing={3}>
          <CustomLink
            href={`/diaries/${diary?.id}/edit`}
            icon={<Edit />}
            color="primary"
          >
            編集
          </CustomLink>
          <CustomLink
            href={`/diaries/${diary?.id}/delete`}
            icon={<Delete />}
            color={`${red[500]}`}
          >
            削除
          </CustomLink>
        </Stack>
      </Box>
      <Box mb={3}>
        <Typography>{dayjs(diary?.createdAt).format("YYYY/MM/DD")}</Typography>
      </Box>
      <Box>
        <Typography>{diary?.content}</Typography>
      </Box>
    </Box>
  );
};
