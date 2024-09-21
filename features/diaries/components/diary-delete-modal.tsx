import { CancelButton } from "@/components/ui/cancel-button";
import { DeleteButton } from "@/components/ui/delete-button";
import { useDeleteDiary } from "@/lib/api/diaries";
import { Diary } from "@/types/type";
import { Box, Modal, Typography } from "@mui/material";
import { useRouter } from "next/router";

export const DiaryDeleteModal = ({
  id,
  open,
  onClose,
}: {
  id: Diary["id"];
  open: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const { handleDeleteDiary: destroy } = useDeleteDiary({
    onSuccess: () => {
      router.push("/diaries");
    },
  });
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          この日記を削除します
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          よろしいですか？
        </Typography>
        <Box display="flex" justifyContent="end" gap={2}>
          <CancelButton onClick={onClose} />
          <DeleteButton
            onClick={() => {
              destroy({ id });
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
};
