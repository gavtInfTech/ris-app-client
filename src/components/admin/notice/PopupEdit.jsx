import { useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./style.module.css";
import { Box } from "@mui/system";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../../../contexts/AuthContext";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { Autocomplete, Button, DialogContentText } from "@mui/material";

export default function PopupEdit(props) {
  const { auth } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const { changeData } = props;
  const { setMessage } = useContext(MessageContext);
  const [sites, setSites] = useState(props.sites);
  const [state, setState] = useState({
    noticeInfo: {
      river: "",
      site: "",
      date: "",
      date_start: "",
      date_end: "",
      cause1: false,
      cause2: false,
      cause3: false,
      cause4: false,
      cause5: false,
      cause6: false,
      content: "",
      theme: "",
      importance: "",
      recipient: "",
      source: "",
    },

    sites: [],
  });
  const rivers = auth.info.siteRivers;
  const noticeStatus = ["Действует", "Завершено"];
  const handleClick = (event) => {
    const notice = props.data.find((doc) => doc.id === props.id);

    function formatDate(noticeDate) {
      const date = new Date(noticeDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    console.log("THIS IS NOTIIICE!", notice);
    setState((prevState) => ({
      noticeInfo: {
        ...notice,
        date: formatDate(notice.date),
        date_start: formatDate(notice.date_start),
        date_end: formatDate(notice.date_end),
      },
      sites: [...prevState.sites],
    }));
    setAnchorEl(event.currentTarget);
    setSitesByRiver(notice.river);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const setSitesByRiver = (river) => {
    // eslint-disable-next-line default-case
    switch (river) {
      case "Днепр":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Березина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Сож":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Неман":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Мухавец":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Днепро-Бугский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Пина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Верхний участок реки Припять":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Припять":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Микашевичский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Горынь":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Западная Двина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Туровский затон":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Августовский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
      case "Свислочь":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites
            .filter((site) => site.river === river)
            .map((site) => site.name),
        }));
        break;
    }
  };

  const sendForm = async (event) => {
    event.preventDefault();
    if (
      state.noticeInfo.river === "" ||
      state.noticeInfo.site === "" ||
      state.noticeInfo.date === "" ||
      state.noticeInfo.date_start === "" ||
      state.noticeInfo.date_end === "" ||
      state.noticeInfo.status === "" ||
      (state.noticeInfo.cause1 === false &&
        state.noticeInfo.cause2 === false &&
        state.noticeInfo.cause3 === false &&
        state.noticeInfo.cause4 === false &&
        state.noticeInfo.cause5 === false &&
        state.noticeInfo.cause6 === false) ||
      state.noticeInfo.content === ""
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все поля формы!",
        severity: "error",
      }));
    } else {
      try {
        let res = await api.post("/notices/change", state.noticeInfo);
        changeData(state.noticeInfo, props.id);
        setAnchorEl(null);
        setMessage(() => ({
          open: true,
          messageText: "Уведомелние успешно изменено",
          severity: "success",
        }));
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  const resetForm = (event) => {
    event.preventDefault();
    setState({
      noticeInfo: {
        river: "",
        site: "",
        date: "",
        date_start: "",
        date_end: "",
        cause1: false,
        cause2: false,
        cause3: false,
        cause4: false,
        cause5: false,
        cause6: false,
        content: "",
        theme: "",
        importance: "",
        recipient: "",
        source: "",
      },

      sites: [],
    });
  };

  const handleChangeCheckBox = (event) => {
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        [event.target.name]: event.target.checked,
      },
      sites: [...prevState.sites],
    }));
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        [name]: value,
      },

      sites: [...prevState.sites],
    }));
    if (name === "river") {
      setState((prevState) => ({
        noticeInfo: {
          ...prevState.noticeInfo,
          site: "",
        },

        sites: [...prevState.sites],
      }));
      setSitesByRiver(value);
    }
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
          <form className={styles.form} onSubmit={sendForm}>
            <TextField
              name="river"
              select
              label="Река"
              value={state.noticeInfo.river}
              onChange={handleChange}
              variant="standard"
              sx={{ mb: 2 }}
            >
              {rivers.map((river) => (
                <MenuItem key={river} value={river}>
                  {river}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              name="site"
              select
              label="Участок реки"
              value={state.noticeInfo.site}
              onChange={handleChange}
              variant="standard"
              sx={{ mb: 2 }}
            >
              {state.sites.map((site) => (
                <MenuItem key={site} value={site}>
                  {site}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={{ width: 180, mb: 2 }}
              label="Дата"
              name="date"
              type={"datetime-local"}
              value={state.noticeInfo.date}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              sx={{ width: 180, mb: 3 }}
              name="date_start"
              type={"datetime-local"}
              value={state.noticeInfo.date_start}
              onChange={handleChange}
              variant="standard"
              label="Действует с"
            />
            <TextField
              sx={{ width: 180, mb: 3 }}
              name="date_end"
              type={"datetime-local"}
              value={state.noticeInfo.date_end}
              onChange={handleChange}
              variant="standard"
              label="Действует по"
            />
            <TextField
              name="status"
              select
              label="Статус на данный момент"
              value={state.noticeInfo.status}
              onChange={handleChange}
              variant="standard"
            >
              {noticeStatus.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
            <FormControl
              sx={{ mt: 3, ml: 1, width: 240 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ mb: 1 }} component="legend">
                Причина извещения
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause1}
                      onChange={handleChangeCheckBox}
                      name="cause1"
                    />
                  }
                  label="Изменение СНО"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause2}
                      onChange={handleChangeCheckBox}
                      name="cause2"
                    />
                  }
                  label="Гидрометеорологические условия"
                />
                <FormControlLabel
                  sx={{ mb: 3 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause3}
                      onChange={handleChangeCheckBox}
                      name="cause3"
                    />
                  }
                  label="Путевые работы"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause4}
                      onChange={handleChangeCheckBox}
                      name="cause4"
                    />
                  }
                  label="Ремонтные работы"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause5}
                      onChange={handleChangeCheckBox}
                      name="cause5"
                    />
                  }
                  label="Мероприятие"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause6}
                      onChange={handleChangeCheckBox}
                      name="cause6"
                    />
                  }
                  label="Другое"
                />
              </FormGroup>
            </FormControl>
            <FormControl
              sx={{ width: "full", mb: 3 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ mb: 1 }} component="legend">
                Тема извещения
              </FormLabel>
              <Autocomplete
                options={[
                  "Объявление",
                  "Предупреждение",
                  "Уведомление",
                  "Оповещение",
                  "Информирование",
                ]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Выберите тему"
                  />
                )}
                onChange={(event, newValue) => {
                  setState({
                    ...state,
                    noticeInfo: { ...state.noticeInfo, theme: newValue },
                  }); // Просто сохраняем строку
                }}
                disableClearable
                freeSolo={false}
              />
            </FormControl>

            <FormControl
              sx={{ width: "full" }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ mb: 1 }} component="legend">
                Укажите важность уведомления, если требуется
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.importance}
                      onChange={handleChangeCheckBox}
                      name="importance"
                    />
                  }
                  label="Важное"
                />
              </FormGroup>
            </FormControl>

            <FormControl
              sx={{ width: "full", mb: 3 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ mb: 1 }} component="legend">
                Укажите получателей уведомления:
              </FormLabel>
              <TextField
                name="recipient"
                label="Получатели уведомления"
                value={state.noticeInfo.recipient}
                onChange={handleChange}
                rows={4}
              />
            </FormControl>

            <FormControl
              sx={{ width: "full", mb: 3 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ mb: 1 }} component="legend">
                Укажите официальный источник:
              </FormLabel>
              <Autocomplete
                options={[
                  "Государственная администрация водного транспорта",
                  'РУЭСП "Днепро-Бугский водный путь"',
                  'РУ Днепро-Двинское предприятие водных путей "Белводпуть"',
                  "РУ Днепро-Березинское предприятие водных путей",
                  'Филиал "Нижне-Припятский" г. Мозырь',
                  'Филиал "Витебскводтранс" г. Витебск',
                  'Филиал "Гродненский участок" г. Гродно',
                  "Белорусское речное пароходство",
                  "Речной порт Бобруйск",
                  "Речной порт Гомель",
                  "Речной порт Речица",
                  "Речной порт Брест",
                  "Речной порт Пинск",
                  "Речной порт Мозырь",
                  "Речной порт Микашевичи",
                ]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Официальный источник"
                  />
                )}
                onChange={(event, newValue) => {
                  setState({
                    ...state,
                    noticeInfo: { ...state.noticeInfo, source: newValue },
                  }); // Просто сохраняем строку
                }}
                disableClearable
                freeSolo={false}
              />
            </FormControl>

            <TextField
              name="content"
              label="Содержание"
              value={state.noticeInfo.content}
              onChange={handleChange}
              multiline
              rows={4}
            />

            <Box className={styles.buttonsConteiner}>
              <Button
                variant="contained"
                className={styles.button}
                type="submit"
              >
                Изменить
              </Button>

              <Button
                variant="contained"
                className={styles.button}
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
