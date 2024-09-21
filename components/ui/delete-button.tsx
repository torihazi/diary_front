import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ReactNode } from "react";

export const DeleteButton = ({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon?: ReactNode;
}) => {
  return (
    <Button
      onClick={() => onClick()}
      variant="text"
      color="error"
      startIcon={icon}
    >
      削除
    </Button>
  );
};
