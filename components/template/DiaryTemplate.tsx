import Footer from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { CustomLink } from "../ui/cutom-link";
import { NavigateBefore } from "@mui/icons-material";

export const DiaryTemplate = ({
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
        <Box>
          <CustomLink href="/diaries" icon={<NavigateBefore />}>
            日記一覧へ戻る
          </CustomLink>
        </Box>
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};
