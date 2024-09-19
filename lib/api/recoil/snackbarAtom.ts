import { AlertColor } from "@mui/material";
import { atom } from "recoil";

type SnackbarType = {
  isOpen: boolean;
  text: string;
  severity: AlertColor;
};

export const snackbarAtom = atom<SnackbarType>({
  key: "snackbar",
  default: {
    isOpen: false,
    text: "",
    severity: "info",
  },
});

export const successState = (text: string = ""): SnackbarType => ({
  isOpen: true,
  text: text,
  severity: "success",
});

export const errorState = (text: string = ""): SnackbarType => ({
  isOpen: true,
  text: text,
  severity: "error",
});
