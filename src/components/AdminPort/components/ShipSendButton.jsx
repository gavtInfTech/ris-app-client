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
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { api } from "../../../axiosConfig";
import InfoIcon from "@mui/icons-material/Info";

export default function ShipSendButton({ data_info, ships, reload, bigReload }) {
  const [open, setOpen] = useState(false);
  const [idShip, setIdShip] = useState("");
  const [shipInfoOpen, setShipInfoOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [infoText, setInfoText] = useState({});

  const [openQuestion, setOpenQuestion] = useState(false);

  const handleClickOpen = () => {
    setOpenQuestion(true);
  };

  const handleCloseQuestion = () => {
    setOpenQuestion(false);
  };

  const handleOpen = (text) => {
    setInfoText(text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setInfoText("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "hasPassengers") {
      setInfoText((prev) => ({
        ...prev,
        hasPassengers: checked,
        crew_passenger: checked ? prev.crew_passenger : "", // очищаем при снятии галочки
      }));
    } else if (name === "hasCargo") {
      setInfoText((prev) => ({
        ...prev,
        hasCargo: checked,
        gryz_type: checked ? prev.gryz_type : "",
        gryz_classification: checked ? prev.gryz_classification : "",
        gryz_data: checked ? prev.gryz_data : "",
      }));
    } else if (name === "hasSostav") {
      setInfoText((prev) => ({
        ...prev,
        hasSostav: checked,
        sostav_ship_ids: checked ? prev.sostav_ship_ids : [], // сбрасываем массив если unchecked
      }));
    } else {
      setInfoText((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleShipInfoOpen = (id) => {
    setIdShip(id);
    setShipInfoOpen(true);
  };

  const handleShipInfoClose = () => setShipInfoOpen(false);

  const handleSubmit = async () => {
    try {
      await api.post("/port/send", {
        ...infoText,
      });

      console.log("✅ Запись успешно добавлена");
      reload();
      handleCloseQuestion();
      handleClose(); // закрываем форму только после успешного добавления
      bigReload();
    } catch (error) {
      console.error("❌ Ошибка при добавлении записи:", error);
      // можно добавить сообщение об ошибке через Snackbar или Alert
    }
  };

  return (
    <>
      <GridActionsCellItem
        icon={<DirectionsBoatFilledIcon />}
        label="Отправить"
        onClick={() => {
          handleOpen(data_info);
        }}
        color="inherit"
      />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Запись о заходе судна</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <Typography>Первичные данные: </Typography>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Autocomplete
              sx={{ flex: 1 }}
              options={ships}
              filterSelectedOptions
              getOptionLabel={(option) => option.name}
              value={ships.find((ship) => ship.id === infoText.id_ship) || null}
              onChange={(event, newValue) => {
                if (!isEditing) return;
                setInfoText((prev) => ({
                  ...prev,
                  id_ship: newValue ? newValue.id : "",
                }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Судно" variant="standard" />
              )}
              PopperComponent={(props) => (
                <Popper {...props} placement="bottom-start" disablePortal>
                  {props.children}
                </Popper>
              )}
              ListboxProps={{
                sx: {
                  "& .MuiAutocomplete-option": {
                    padding: "10px 16px",
                  },
                },
              }}
            />
            {infoText.id_ship && (
              <IconButton onClick={() => handleShipInfoOpen(infoText.id_ship)}>
                <InfoIcon />
              </IconButton>
            )}
          </div>

          <TextField
            label="Экипаж (количество)"
            name="crew_sailor"
            value={infoText.crew_sailor}
            onChange={handleChange}
          />
          <TextField
            type="datetime-local"
            label="Время подхода"
            name="time_enter"
            value={infoText.time_enter}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="datetime-local"
            label="Время выхода"
            name="time_out"
            value={infoText.time_out}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <Typography>Данные о маршруте: </Typography>
          <TextField
            label="Пункт отправления"
            name="place_enter"
            value={infoText.place_enter}
            onChange={handleChange}
          />
          <TextField
            label="Пункт назначения"
            name="place_out"
            value={infoText.place_out}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={infoText.hasCargo}
                onChange={handleChange}
                name="hasCargo"
              />
            }
            label="Наличие груза"
          />

          {infoText.hasCargo && (
            <>
              <TextField
                label="Классификация груза"
                name="gryz_classification"
                value={infoText.gryz_classification}
                onChange={handleChange}
              />
              <TextField
                label="Тип груза"
                name="gryz_type"
                value={infoText.gryz_type}
                onChange={handleChange}
              />
              <TextField
                label="Масса/Объем груза"
                name="gryz_volume"
                value={infoText.gryz_volume || ""}
                onChange={handleChange}
              />
            </>
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={infoText.hasPassengers}
                onChange={handleChange}
                name="hasPassengers"
              />
            }
            label="Наличие пассажиров"
          />

          {infoText.hasPassengers && (
            <TextField
              label="Пассажиры (количество)"
              name="crew_passenger"
              value={infoText.crew_passenger}
              onChange={handleChange}
            />
          )}
          <Typography>Дополнительная информация: </Typography>
          <TextField
            label="Дополнительная информация"
            name="comment"
            multiline
            minRows={3}
            value={infoText.comment || ""}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleClickOpen} variant="contained">
            Отправить
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={shipInfoOpen}
        onClose={handleShipInfoClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Информация о судне</DialogTitle>
        <DialogContent dividers>
          {(() => {
            const ship = ships.find((s) => s.id === idShip);
            if (!ship) return null;
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Typography>
                  <strong>Название:</strong> {ship.name}
                </Typography>
                <Typography>
                  <strong>Тип:</strong> {ship.type}
                </Typography>
                <Typography>
                  <strong>Ширина:</strong> {ship.width}{" "}
                  {ship.width.length > 1 ? "м" : ""}
                </Typography>
                <Typography>
                  <strong>Длина:</strong> {ship.length}{" "}
                  {ship.length.length > 1 ? "м" : ""}
                </Typography>
                <Typography>
                  <strong>Осадка (груз):</strong> {ship.osadka_gryz}{" "}
                  {ship.osadka_gryz.length > 1 ? "м" : ""}
                </Typography>
                <Typography>
                  <strong>Осадка (порожн.):</strong> {ship.osadka_poroshnem}{" "}
                  {ship.osadka_poroshnem.length > 1 ? "м" : ""}
                </Typography>
                <Typography>
                  <strong>Владелец:</strong> {ship.owner}
                </Typography>
                <Typography>
                  <strong>Проект:</strong> {ship.project_number}
                </Typography>
                <Typography>
                  <strong>Рег. номер:</strong> {ship.reg_id}
                </Typography>
              </div>
            );
          })()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleShipInfoClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openQuestion}
        onClose={handleCloseQuestion}
        maxWidth="md"
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
        <DialogTitle>Вы действительно хотите отправить судно? </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseQuestion} sx={{ color: "red" }}>
            Нет
          </Button>
          <Button onClick={handleSubmit}>Да</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
