import Footer from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

export const DiariesTemplate = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: SxProps;
}) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1} padding={2} sx={className}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
