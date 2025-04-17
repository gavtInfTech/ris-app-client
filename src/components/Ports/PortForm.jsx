import { React, useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Style from "./style.module.css";
import { Box, Stack } from "@mui/system";
import { Button, Chip } from "@mui/material";
import { api } from "../../axiosConfig.js";
import { MessageContext } from "../../contexts/MessageContext.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";
import { v4 as uuidv4 } from "uuid";

export default function NoticeForm(props) {
  const portName = props.portName;
  const setForceReload = props.setForceReload;
  const { setMessage } = useContext(MessageContext);
  const [ships, setShips] = useState([]);
  const [state, setState] = useState({
    id: uuidv4(),
    id_ship: "",
    portName: portName,
    place: "",
    date: getCurrentDateTime(),
    date_enter: new Date(),
    date_out: new Date(),
    content: "",
    status: "",
  });
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
  useEffect(() => {
    const fetchShips = async () => {
      try {
        const res = await api.get("/allShips/getAllShips");
        const sortedShips = res.data
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name, "ru-RU"));
        setShips(sortedShips);
      } catch (err) {
        console.error("Ошибка загрузки судов", err);
      }
    };
    fetchShips();
  }, []);

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
  const sendForm = async (event) => {
    event.preventDefault();
    if (state.id_ship === "") {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все поля формы!",
        severity: "error",
      }));
    } else {
      try {
        await api.post("/ports/add", {
          ...state,
        });
        setMessage(() => ({
          open: true,
          messageText: "Запись успешно добавлено!",
          severity: "success",
        }));
        resetForm();
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        return;
      }
    }
  };
  const handleSostavChange = (event) => {
    const selectedShip = ships.find((ship) => ship.id === event.target.value);
    if (
      selectedShip &&
      !(state.sostav || []).some((ship) => ship.id === selectedShip.id)
    ) {
      setState((prevState) => ({
        ...prevState,
        sostav: [...(prevState.sostav || []), selectedShip],
      }));
    }
  };

  const handleRemoveShip = (id) => {
    setState((prevState) => ({
      ...prevState,
      sostav: prevState.sostav.filter((ship) => ship.id !== id),
    }));
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

  const handleChangeCheckBox = (event) => {
    const { name, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div>
      <Accordion
        sx={{
          maxWidth: 1240,
          backgroundColor: "#ebf4fc",
          mb: "5px",
          boxShadow: "0px 1px 1px #b4b8c2",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ ml: "20px", fontSize: 17 }}>
            Форма добавления судна
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={Style.accordionDetails}>
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
                Добавить
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
