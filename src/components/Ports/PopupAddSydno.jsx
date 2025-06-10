import { useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box, Stack } from "@mui/system";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Chip, DialogActions } from "@mui/material";
import Style from "./style.module.css";
import { api } from "../../axiosConfig.js";
import { MessageContext } from "../../contexts/MessageContext.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";
import { v4 as uuidv4 } from "uuid";

export default function PopupAddSydno(props) {
  const portName = props.portName;
  const ships = props.ships;
  const edited = props.edited != undefined ? props.edited : false;
  const [anchorEl, setAnchorEl] = useState(null);
  const { changeData } = props;
  const { setMessage } = useContext(MessageContext);
  const setForceReload = props.setForceReload;
  const [state, setState] = useState({
    id: "",
    id_ship: "",
    portName: portName,
    place: "",
    gruz_amount: "",
    gruz_type: "",
    date: getCurrentDateTime(),
    date_enter: new Date(),
    date_out: new Date(),
    content: [],
    status: "",
  });
  function formatDateToLocalString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`; // Format for datetime-local
  }

  const noticeStatus = [
    "Ожидается",
    "Прибыло",
    "У причала",
    "Погрузка",
    "Разгрузка",
    "На проверке",
    "Ожидает причала",
    "Отправлено",
  ];
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedShip, setSelectedShip] = useState(null);

  const handleClick = (event) => {
    const notice = props.data.find((doc) => doc.id === props.id);
    console.log("BIG NOTICE", notice);
    setState(notice);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (ship) => {
    setSelectedShip(ship);
    setOpenConfirm(true);
  };

  const confirmDelete = async (withApiCall) => {
    if (withApiCall && selectedShip) {
      try {
        console.log("Привести в порядок!!!");
        await api.post("/ports/deleteWithAdd", {
          shipId: selectedShip.id,
          portId: state.id,
        });
        handleClose();
        setForceReload((prev) => !prev);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        sostav: prevState.sostav.filter((id) => id !== selectedShip.id),
        id_ship: selectedShip.id,
      }));
    }

    setOpenConfirm(false);
    setSelectedShip(null);
  };

  const open = Boolean(anchorEl);

  function getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // месяц начинается с 0
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  }

  const sendForm = async (event) => {
    event.preventDefault();
    try {
      edited
        ? await api.post("/ports/changeArchive", {
            ...state,
          })
        : await api.post("/ports/change", {
            ...state,
          });
      setForceReload((prev) => !prev);
      setAnchorEl(null);
      setMessage(() => ({
        open: true,
        messageText: "Запись успешно изменена!",
        severity: "success",
      }));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const resetForm = (event) => {
    if (event) {
      event.preventDefault();
    }
    setState({
      id: uuidv4(),
      id_ship: "",
      portName: portName,
      date: getCurrentDateTime(),
      date_enter: new Date(),
      date_out: new Date(),
      sostav: [],
      gruz_amount: "",
      gruz_type: "",
      content: "",
      status: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <GridActionsCellItem
        aria-describedby={props.id}
        icon={<EditIcon />}
        label="Edit"
        className="textPrimary"
        onClick={handleClick}
        color="inherit"
      />
      <Dialog
        fullWidth="true"
        sx={{ "& .MuiDialog-paper": { maxWidth: 750 } }}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Изменение Записи
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form className={Style.form} onSubmit={sendForm}>
            <TextField
              sx={{ width: 180, marginTop: 3, marginBottom: 3 }}
              name="date"
              type="text"
              value={state.date}
              onChange={handleChange}
              variant="standard"
              disabled
              label="Дата добавления записи"
            />
            <Autocomplete
              sx={{ mb: 2 }}
              options={ships}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              onChange={(event, newValue) => {
                setState((prevState) => ({
                  ...prevState,
                  id_ship: newValue ? newValue.id : "", // Устанавливаем id судна
                }));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Укажите судно:"
                  variant="standard"
                />
              )}
              PopperComponent={(props) => (
                <Popper {...props} placement="bottom-start" disablePortal>
                  {props.children}
                </Popper>
              )}
              value={ships.find((ship) => ship.id === state.id_ship) || null} // Устанавливаем текущее значение судна
              ListboxProps={{
                sx: {
                  "& .MuiAutocomplete-option": {
                    padding: "10px 16px", // Увеличьте отступы между вариантами
                  },
                },
              }}
            />

            <TextField
              sx={{ mb: 2 }}
              name="place"
              label="Прибыл из:"
              value={state.place}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              sx={{ mb: 2 }}
              name="gruz_type"
              label="Тип груза:"
              value={state.gruz_type}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              sx={{ mb: 2 }}
              name="gruz_amount"
              label="Масса/объем груза:"
              value={state.gruz_amount}
              onChange={handleChange}
              variant="standard"
            />

            <TextField
              sx={{ width: 180, marginBottom: 3 }}
              name="date_enter"
              type="datetime-local"
              value={state.date_enter}
              onChange={handleChange}
              variant="standard"
              label="Прибытие в порт"
            />

            <TextField
              sx={{ width: 180, marginBottom: 3 }}
              name="date_out"
              type="datetime-local"
              value={
                state.date_out ? formatDateToLocalString(state.date_out) : ""
              }
              onChange={handleChange}
              variant="standard"
              label="Отправление"
              InputLabelProps={{ shrink: true }} // 🚀 Решает проблему наложения текста
            />

            <TextField
              sx={{ mb: 3 }}
              name="status"
              select
              label="Статус на данный момент"
              value={state.status}
              onChange={handleChange}
              variant="standard"
            >
              {noticeStatus.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
            <Autocomplete
              sx={{ mb: 3 }}
              options={ships}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              onChange={(event, newValue) => {
                if (newValue && !(state.sostav || []).includes(newValue.id)) {
                  setState((prevState) => ({
                    ...prevState,
                    sostav: [...(prevState.sostav || []), newValue.id], // Записываем только id
                  }));
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Выберите состав:"
                  variant="standard"
                />
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

            <>
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                {(state.sostav || [])
                  .map((id) => ships.find((ship) => ship.id === id))
                  .filter(Boolean)
                  .map((ship) => (
                    <Chip
                      key={ship.id}
                      label={ship.name}
                      onDelete={() => handleDelete(ship)}
                    />
                  ))}
              </Stack>

              {/* Модальное окно подтверждения удаления */}
              <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
                <DialogTitle>Вынести из состава</DialogTitle>
                <DialogContent>
                  Убрав судно оно попадет в порт отдельной записью
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => confirmDelete(true)} color="secondary">
                    Вынести
                  </Button>
                </DialogActions>
              </Dialog>
            </>

            <TextField
              name="content"
              label="Дополнительные сведения"
              value={state.content}
              onChange={handleChange}
              multiline
              rows={4}
            />

            <Box className={Style.buttonsConteiner}>
              <Button
                variant="contained"
                className={Style.button}
                type="submit"
              >
                Изменить
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
