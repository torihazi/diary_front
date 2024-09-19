import { DarkMode } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #E4E7EB",
        padding: 2,
        px: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          background: "linear-gradient(to right, #AB54F1, #EA489B)",
          backgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={() => router.push("/home")}
      >
        TechInsights
      </Typography>
      <Box>
        <DarkMode />
      </Box>
    </Box>
  );
};
