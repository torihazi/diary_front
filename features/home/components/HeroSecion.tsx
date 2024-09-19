import { East } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        height: { xs: "400px", sm: "550px" },
        marginTop: "75px",
        marginX: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: { xs: "3rem", sm: "4rem" },
          px: 4,
        }}
      >
        最新のテクノロジーを
        <Typography
          component="span"
          sx={{
            background: "linear-gradient(to right, #AB54F1, #EA489B)",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            fontSize: { xs: "3rem", sm: "4rem" },
          }}
        >
          わかりやすく
        </Typography>
        解説
      </Typography>
      <Typography
        component="p"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1rem", sm: "1.5rem" },
        }}
      >
        TechInsightsは、複雑なテクノロジーのトピックを分かりやすく解説し、あなたのキャリアアップを支援します。
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#9333E9",
          width: "fit-content",
        }}
        size="large"
        endIcon={<East />}
        onClick={() => router.push("/signin")}
      >
        無料で始める
      </Button>
    </Box>
  );
};
