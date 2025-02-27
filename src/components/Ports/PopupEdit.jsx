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
import { Button, Chip } from "@mui/material";
import Style from "./style.module.css";
import { api } from "../../axiosConfig.js";
import { MessageContext } from "../../contexts/MessageContext.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";
import { v4 as uuidv4 } from "uuid";
export default function PopupEdit(props) {
  const portName = props.portName;
  const ships = props.ships;
  const [anchorEl, setAnchorEl] = useState(null);
  const { changeData } = props;
  const { setMessage } = useContext(MessageContext);
  const setForceReload = props.setForceReload;
  const [state, setState] = useState({
    id: uuidv4(),
    id_ship: "",
    portName: portName,
    place: "",
    date: getCurrentDateTime(),
    date_enter: new Date(),
    date_out: new Date(),
    content: [],
    status: "",
  });
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
  const handleClick = (event) => {
    const notice = props.data.find((doc) => doc.id === props.id);
    setState(notice);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
      let res = await api.post("/ports/change", {
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
          Изменение извещения
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
              value={state.date_out}
              onChange={handleChange}
              variant="standard"
              label="Отправление в"
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

            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              {(state.sostav || [])
                .map((id) => ships.find((ship) => ship.id === id)) // Ищем объект судна по id
                .filter(Boolean) // Убираем undefined, если судно не найдено
                .map((ship) => (
                  <Chip
                    key={ship.id}
                    label={ship.name} // Выводим название судна
                    onDelete={() =>
                      setState((prevState) => ({
                        ...prevState,
                        sostav: prevState.sostav.filter(
                          (sId) => sId !== ship.id
                        ), // Удаляем id из state
                      }))
                    }
                  />
                ))}
            </Stack>

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

              <Button
                variant="contained"
                className={Style.button}
                onClick={resetForm}
              >
                Очистить
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
