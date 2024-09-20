import { Box, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type DiaryTitleFormType = {
  control: Control;
  id: string;
};

export const DiaryTitleForm = ({ control, id }: DiaryTitleFormType) => {
  return (
    <Box component="form" id={id} mb={3} mt={3}>
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="title"
            autoComplete="off"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            sx={{ width: "100%" }}
          />
        )}
      />
    </Box>
  );
};
