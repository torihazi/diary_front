import { CustomLink } from "@/components/ui/cutom-link";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const DiaryPreview = () => {
  const diaries = [
    {
      id: 1,
      title: "タイトル",
      content:
        "テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト",
    },
    {
      id: 2,
      title: "タイトル2",
      content:
        "テストテストテストテストテストテストテストテストテストテストテストテスト",
    },
  ];
  return (
    <Box sx={{ mx: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Typography variant="h4">私の日記</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {diaries.map((diary) => (
          <Box key={diary.title}>
            <Card
              sx={{
                height: "300px",
              }}
            >
              <CardMedia
                component="img"
                image="/static/images/image.png"
                sx={{
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  maxWidth: "520px",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {diary.title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                  }}
                >
                  {diary.content}
                </Typography>
              </CardContent>
              <CardActions>
                <CustomLink />
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DiaryPreview;
