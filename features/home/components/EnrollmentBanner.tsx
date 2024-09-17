import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const EnrollmentBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">今すぐ日記を書いてみる</Typography>
      <Typography component="p">
        今すぐメールアドレスを登録して、日記を書いてみましょう
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <TextField
          sx={{ p: 1, width: "700px" }}
          placeholder="あなたのメールアドレス"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9333E9",
            width: "fit-content",
          }}
          size="large"
        >
          登録
        </Button>
      </Box>
    </Box>
  );
};

export default EnrollmentBanner;
