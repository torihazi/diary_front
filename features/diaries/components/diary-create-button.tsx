import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useRouter } from "next/router";

export const DiaryCreateButton = () => {
  const router = useRouter();
  return (
    <Fab
      onClick={() => router.push("/diaries/new")}
      color="secondary"
      size="large"
      sx={{
        position: "fixed",
        bottom: "15%",
        right: "10%",
        color: "white",
      }}
    >
      <AddIcon />
    </Fab>
  );
};
