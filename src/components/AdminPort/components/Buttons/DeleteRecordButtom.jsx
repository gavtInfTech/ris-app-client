import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Popper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { api } from "../../../../axiosConfig";
import DeleteIcon from "@mui/icons-material/Delete";
export default function DeleteRecordButton({ id, reload }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      console.log(id);
      await api.delete(`/port/deleteById/${id}`);
      reload();
      handleClose(); // закрываем форму только после успешного добавления
    } catch (error) {
      console.error("❌ Ошибка при добавлении записи:", error);
      // можно добавить сообщение об ошибке через Snackbar или Alert
    }
  };

  return (
    <>
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Убрать из состава"
        onClick={handleClickOpen}
        color="inherit"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "30vw",
            height: "auto",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <DialogTitle>Вы действительно хотите удалить запись? </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Нет
          </Button>
          <Button onClick={handleSubmit}>Да</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
