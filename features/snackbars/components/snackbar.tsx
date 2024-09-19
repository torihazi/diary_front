import { snackbarAtom } from "@/lib/api/recoil/snackbarAtom";
import { Alert, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";

export const Snackbars = () => {
  const [{ isOpen, text, severity }, setSnackbarState] =
    useRecoilState(snackbarAtom);

  const handleClose = () =>
    setSnackbarState((prev) => ({ ...prev, isOpen: false }));

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};
