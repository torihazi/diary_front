import { CustomLink } from "@/components/ui/cutom-link";
import { Diary } from "@/types/type";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

export const DiariesList = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <Stack spacing={4}>
      {diaries && diaries.length > 0 ? (
        diaries?.map((diary) => (
          <Card key={diary.id}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h5" component="h5">
                  {diary.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "gray" }}
                >
                  {dayjs(diary.createdAt).format("YYYY/MM/DD")}
                </Typography>
                <Typography variant="body1" component="p" noWrap>
                  {diary.content}
                </Typography>
                <CustomLink href={`/diaries/${diary.id}`}>
                  続きを読む
                </CustomLink>
              </Stack>
            </CardContent>
          </Card>
        ))
      ) : (
        <div>まだ日記がありません</div>
      )}
    </Stack>
  );
};
