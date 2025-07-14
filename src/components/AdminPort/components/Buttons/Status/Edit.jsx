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
  Box,
  MenuItem,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { api } from "../../../../../axiosConfig";
import EditIcon from "@mui/icons-material/Edit";

export default function EditStatusButton({ id, data, reload }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    dateRecordMade: new Date(),
    date_status: new Date(),
    status: "",
    comment: "",
  });

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const status = [
    "Ожидается",
    "Прибыло",
    "У причала",
    "Погрузка",
    "Разгрузка",
    "На проверке",
    "Ожидает причала",
    "Отправлено",
  ];

  const handleSubmit = async () => {
    try {
      await api.post("/port/changeStatus", {
        ...formData,
        id: id,
      });
      reload();
      console.log("✅ Запись статуса успешно добавлена");
      handleClose(); // закрываем форму только после успешного добавления
    } catch (error) {
      console.error("❌ Ошибка при добавлении записи:", error);
      // можно добавить сообщение об ошибке через Snackbar или Alert
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "hasPassengers") {
      setFormData((prev) => ({
        ...prev,
        hasPassengers: checked,
        crew_passenger: checked ? prev.crew_passenger : "", // очищаем при снятии галочки
      }));
    } else if (name === "hasCargo") {
      setFormData((prev) => ({
        ...prev,
        hasCargo: checked,
        gryz_type: checked ? prev.gryz_type : "",
        gryz_classification: checked ? prev.gryz_classification : "",
        gryz_data: checked ? prev.gryz_data : "",
      }));
    } else if (name === "hasSostav") {
      setFormData((prev) => ({
        ...prev,
        hasSostav: checked,
        sostav_ship_ids: checked ? prev.sostav_ship_ids : [], // сбрасываем массив если unchecked
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  return (
    <>
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Добавить в состав"
        onClick={handleClickOpen}
        color="inherit"
      />
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Редактировать статус судна: </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <Typography>{id}</Typography>
          <TextField
            type="datetime-local"
            label="Время статуса"
            name="date_status"
            value={formData.date_status}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            sx={{ mb: 3 }}
            name="status"
            select
            label="Статус на данный момент"
            value={formData.status}
            onChange={handleChange}
            variant="standard"
          >
            {status.map((st) => (
              <MenuItem key={st} value={st}>
                {st}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Дополнительная информация"
            name="comment"
            multiline
            minRows={3}
            value={formData.comment || ""}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Закрыть
          </Button>
          <Button onClick={handleSubmit}>Редактировать статус</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
