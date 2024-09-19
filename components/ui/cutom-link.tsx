import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";

export const CustomLink = ({
  href,
  color,
  icon,
  children,
}: {
  href?: string;
  icon?: ReactNode;
  color?: string;
  children: ReactNode;
}) => {
  return (
    <MuiLink
      component={NextLink}
      href={href || "#"}
      underline="none"
      sx={{
        color: `${color ? color : "#AB54F1"}`,
        width: "fit-content",
        display: "flex",
        alignItems: "center",
      }}
    >
      {icon}
      {children}
    </MuiLink>
  );
};
