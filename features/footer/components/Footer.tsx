import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E4E7EB",
        p: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography component="p">
        © 2024 TechInsights. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
