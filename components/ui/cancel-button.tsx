import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ReactNode } from "react";

export const CancelButton = ({
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
      color="info"
      startIcon={icon}
    >
      キャンセル
    </Button>
  );
};
