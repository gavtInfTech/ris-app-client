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
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { api } from "../../../../axiosConfig";
import AddLinkIcon from "@mui/icons-material/AddLink";
import LinkOffIcon from "@mui/icons-material/LinkOff";

export default function RemoveSostavButton({ idRecord, idSostav, reload }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      console.log(idRecord, idSostav)
      await api.post("/port/removeFromSostav", {
        idRecord,
        idSostav,
      });
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
        icon={<LinkOffIcon />}
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
            height: "22vh",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <DialogTitle>
          Вы действительно хотите убрать судно из состава?{" "}
        </DialogTitle>
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
