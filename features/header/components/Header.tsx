import { DarkMode } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Header = () => {
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
        }}
      >
        TechInsights
      </Typography>
      <Box>
        <DarkMode />
      </Box>
    </Box>
  );
};
