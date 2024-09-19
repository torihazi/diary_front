import { Box, Typography } from "@mui/material";

export const DiariesPageTitle = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={4}
      mt={5}
    >
      <Typography variant="h4" component="h4" fontWeight="bold">
        開発日記
      </Typography>
    </Box>
  );
};
