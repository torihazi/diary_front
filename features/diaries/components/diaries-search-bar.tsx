import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

export const DiariesSearchBar = () => {
  return (
    <>
      <TextField
        placeholder="日記のタイトルを検索"
        size="small"
        variant="outlined"
        sx={{ width: "100%", backgroundColor: "white", marginBottom: 4 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};
