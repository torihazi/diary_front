import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ReactNode } from "react";

export const EditButton = ({
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
      color="primary"
      startIcon={icon}
    >
      編集
    </Button>
  );
};
