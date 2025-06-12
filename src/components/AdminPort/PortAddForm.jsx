import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { React, useState } from "react";

export default function PortAddPort({ portName }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    gryz_type: "",
    gryz_classification: "",
    crew_sailor: "",
    crew_passenger: "",
    time_enter: "",
    time_out: "",
    place_enter: "",
    place_out: "",
    enter_in_sostav: false,
    out_in_sostav: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted data:", formData);
    // TODO: отправить данные на сервер
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} sx={{ mb: 2 }}>
        Добавить запись
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Запись</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField label="Тип груза" name="gryz_type" value={formData.gryz_type} onChange={handleChange} />
          <TextField label="Классификация груза" name="gryz_classification" value={formData.gryz_classification} onChange={handleChange} />
          <TextField label="Экипаж (матросы)" name="crew_sailor" value={formData.crew_sailor} onChange={handleChange} />
          <TextField label="Экипаж (пассажиры)" name="crew_passenger" value={formData.crew_passenger} onChange={handleChange} />
          <TextField type="datetime-local" label="Время входа" name="time_enter" value={formData.time_enter} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          <TextField type="datetime-local" label="Время выхода" name="time_out" value={formData.time_out} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          <TextField label="Место входа" name="place_enter" value={formData.place_enter} onChange={handleChange} />
          <TextField label="Место выхода" name="place_out" value={formData.place_out} onChange={handleChange} />
          <FormControlLabel
            control={<Checkbox checked={formData.enter_in_sostav} onChange={handleChange} name="enter_in_sostav" />}
            label="Вошёл в состав"
          />
          <FormControlLabel
            control={<Checkbox checked={formData.out_in_sostav} onChange={handleChange} name="out_in_sostav" />}
            label="Вышел из состава"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleSubmit} variant="contained">Добавить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
