import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Autocomplete,
  Popper,
  Typography,
  Chip,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import PortTable from "./PortTable";
import { api } from "../../axiosConfig";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminPort({ portName }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id_ship: "",
    gryz_type: "",
    gryz_classification: "",
    gryz_volume: "",
    crew_sailor: "",
    crew_passenger: "",
    time_enter: "",
    time_out: "",
    place_enter: "",
    place_out: "",
    comment: "",
    enter_in_sostav: false,
    out_in_sostav: false,
    hasCargo: false,
    hasPassengers: false,
    hasSostav: false,
    sostav_ship_ids: [],
  });
  const [sostavDialogOpen, setSostavDialogOpen] = useState(false);
  const initialSostavForm = {
    id: "",
    gryz_type: "",
    gryz_classification: "",
    gryz_volume: "",
    crew_sailor: "",
    crew_passenger: "",
    comment: "",
    hasCargo: false,
    hasPassengers: false,
  };

  const [sostavForm, setSostavForm] = useState(initialSostavForm);
  const [ships, setShips] = useState([]);
  const [shipInfoOpen, setShipInfoOpen] = useState(false);
  const handleShipInfoOpen = () => setShipInfoOpen(true);
  const handleShipInfoClose = () => setShipInfoOpen(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const res = await api.get("/allShips/getAllShips");
        const sortedShips = res.data
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name, "ru-RU"));
        setShips(sortedShips);
        console.log(res.data);
      } catch (err) {
        console.error("Ошибка загрузки судов", err);
      }
    };
    fetchShips();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <DialogTitle>Уведомление о заходе судна </DialogTitle>
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
              value={ships.find((ship) => ship.id === formData.id_ship) || null}
              onChange={(event, newValue) => {
                setFormData((prev) => ({
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
            {formData.id_ship && (
              <IconButton onClick={handleShipInfoOpen}>
                <InfoIcon />
              </IconButton>
            )}
          </div>
          <TextField
            label="Экипаж (количество)"
            name="crew_sailor"
            value={formData.crew_sailor}
            onChange={handleChange}
          />
          <TextField
            type="datetime-local"
            label="Время подхода"
            name="time_enter"
            value={formData.time_enter}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="datetime-local"
            label="Время выхода"
            name="time_out"
            value={formData.time_out}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.hasSostav}
                onChange={handleChange}
                name="hasSostav"
              />
            }
            label="Наличие состава"
          />
          {formData.hasSostav && (
            <>
              <Button
                variant="outlined"
                onClick={() => setSostavDialogOpen(true)}
              >
                Добавить судно в состав
              </Button>

              {formData.sostav_ship_ids.length > 0 && (
                <div>
                  <Typography sx={{ mt: 2, mb: 1 }}>Состав:</Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {formData.sostav_ship_ids.map((item, index) => {
                      const ship = ships.find((s) => s.id === item.id);
                      const parts = [];

                      if (ship?.name) parts.push(`Судно: ${ship.name}`);
                      if (item.gryz_type)
                        parts.push(`Тип груза: ${item.gryz_type}`);
                      if (item.gryz_classification)
                        parts.push(`Класс груза: ${item.gryz_classification}`);
                      if (item.gryz_volume)
                        parts.push(`Объём: ${item.gryz_volume}`);
                      if (item.crew_sailor)
                        parts.push(`Экипаж: ${item.crew_sailor}`);
                      if (item.crew_passenger)
                        parts.push(`Пассажиры: ${item.crew_passenger}`);

                      return (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "#f5f5f5",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                        >
                          <Typography variant="body2">
                            {parts.join(", ")}
                          </Typography>
                          <IconButton
                            color="error"
                            onClick={() => {
                              setDeleteIndex(index);
                              setDeleteConfirmOpen(true);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dialog for adding ship */}
              <Dialog
                open={sostavDialogOpen}
                onClose={() => setSostavDialogOpen(false)}
                fullWidth
                maxWidth="sm"
              >
                <DialogTitle>Добавить судно в состав</DialogTitle>
                <DialogContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mt: 1,
                  }}
                >
                  <Autocomplete
                    sx={{ flex: 1 }}
                    options={ships}
                    getOptionLabel={(option) => option.name}
                    value={ships.find((s) => s.id === sostavForm.id) || null}
                    onChange={(event, newValue) =>
                      setSostavForm((prev) => ({
                        ...prev,
                        id: newValue ? newValue.id : "",
                      }))
                    }
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
                  <TextField
                    label="Экипаж (кол-во)"
                    name="crew_sailor"
                    value={sostavForm.crew_sailor}
                    onChange={(e) =>
                      setSostavForm((prev) => ({
                        ...prev,
                        crew_sailor: e.target.value,
                      }))
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sostavForm.hasCargo}
                        onChange={(e) =>
                          setSostavForm((prev) => ({
                            ...prev,
                            hasCargo: e.target.checked,
                            gryz_type: e.target.checked ? prev.gryz_type : "",
                            gryz_classification: e.target.checked
                              ? prev.gryz_classification
                              : "",
                            gryz_volume: e.target.checked
                              ? prev.gryz_volume
                              : "",
                          }))
                        }
                      />
                    }
                    label="Наличие груза"
                  />
                  {sostavForm.hasCargo && (
                    <>
                      <TextField
                        label="Классификация груза"
                        name="gryz_classification"
                        value={sostavForm.gryz_classification}
                        onChange={(e) =>
                          setSostavForm((prev) => ({
                            ...prev,
                            gryz_classification: e.target.value,
                          }))
                        }
                      />
                      <TextField
                        label="Тип груза"
                        name="gryz_type"
                        value={sostavForm.gryz_type}
                        onChange={(e) =>
                          setSostavForm((prev) => ({
                            ...prev,
                            gryz_type: e.target.value,
                          }))
                        }
                      />
                      <TextField
                        label="Объём груза"
                        name="gryz_volume"
                        value={sostavForm.gryz_volume}
                        onChange={(e) =>
                          setSostavForm((prev) => ({
                            ...prev,
                            gryz_volume: e.target.value,
                          }))
                        }
                      />
                    </>
                  )}

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sostavForm.hasPassengers}
                        onChange={(e) =>
                          setSostavForm((prev) => ({
                            ...prev,
                            hasPassengers: e.target.checked,
                            crew_passenger: e.target.checked
                              ? prev.crew_passenger
                              : "",
                          }))
                        }
                      />
                    }
                    label="Наличие пассажиров"
                  />
                  {sostavForm.hasPassengers && (
                    <TextField
                      label="Пассажиры (кол-во)"
                      name="crew_passenger"
                      value={sostavForm.crew_passenger}
                      onChange={(e) =>
                        setSostavForm((prev) => ({
                          ...prev,
                          crew_passenger: e.target.value,
                        }))
                      }
                    />
                  )}
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setSostavDialogOpen(false)}>
                    Отмена
                  </Button>
                  <Button
                    onClick={() => {
                      if (sostavForm.id) {
                        setFormData((prev) => ({
                          ...prev,
                          sostav_ship_ids: [
                            ...prev.sostav_ship_ids,
                            sostavForm,
                          ],
                        }));
                        setSostavForm(initialSostavForm);
                        setSostavDialogOpen(false);
                      }
                    }}
                    variant="contained"
                  >
                    Добавить
                  </Button>
                </DialogActions>
              </Dialog>

              {/* Confirm Deletion Dialog */}
              <Dialog
                open={deleteConfirmOpen}
                onClose={() => setDeleteConfirmOpen(false)}
              >
                <DialogTitle>Удалить судно из состава?</DialogTitle>
                <DialogContent>
                  <Typography>
                    Вы уверены, что хотите удалить это судно из состава?
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setDeleteConfirmOpen(false)}>
                    Отмена
                  </Button>
                  <Button
                    color="error"
                    onClick={() => {
                      if (deleteIndex !== null) {
                        setFormData((prev) => ({
                          ...prev,
                          sostav_ship_ids: prev.sostav_ship_ids.filter(
                            (_, i) => i !== deleteIndex
                          ),
                        }));
                        setDeleteIndex(null);
                        setDeleteConfirmOpen(false);
                      }
                    }}
                  >
                    Удалить
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}

          <Typography>Данные о маршруте: </Typography>
          <TextField
            label="Пункт отправления"
            name="place_enter"
            value={formData.place_enter}
            onChange={handleChange}
          />
          <TextField
            label="Пункт назначения"
            name="place_out"
            value={formData.place_out}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.hasCargo}
                onChange={handleChange}
                name="hasCargo"
              />
            }
            label="Наличие груза"
          />

          {formData.hasCargo && (
            <>
              <TextField
                label="Классификация груза"
                name="gryz_classification"
                value={formData.gryz_classification}
                onChange={handleChange}
              />
              <TextField
                label="Тип груза"
                name="gryz_type"
                value={formData.gryz_type}
                onChange={handleChange}
              />
              <TextField
                label="Данные о грузе"
                name="gryz_data"
                value={formData.gryz_data || ""}
                onChange={handleChange}
              />
            </>
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.hasPassengers}
                onChange={handleChange}
                name="hasPassengers"
              />
            }
            label="Наличие пассажиров"
          />

          {formData.hasPassengers && (
            <>
              <TextField
                label="Пассажиры (количество)"
                name="crew_passenger"
                value={formData.crew_passenger}
                onChange={handleChange}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleSubmit} variant="contained">
            Добавить
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
            const ship = ships.find((s) => s.id === formData.id_ship);
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
                  <strong>Ширина:</strong> {ship.width}
                </Typography>
                <Typography>
                  <strong>Длина:</strong> {ship.length}
                </Typography>
                <Typography>
                  <strong>Осадка (груз):</strong> {ship.osadka_gryz}
                </Typography>
                <Typography>
                  <strong>Осадка (порожн.):</strong> {ship.osadka_poroshnem}
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

      <PortTable portName={portName} />
    </div>
  );
}
