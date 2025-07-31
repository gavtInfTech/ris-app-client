import { React, useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Style from "./style.module.css";
import { Box } from "@mui/system";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { randomId } from "@mui/x-data-grid-generator";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { Autocomplete, Button } from "@mui/material";

export default function NoticeForm(props) {
  const [sites, setSites] = useState(props.sites);
  const { auth } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);
  const { addData } = props;
  console.log(sites);
  const rivers = auth.info.siteRivers;
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

  const [state, setState] = useState({
    noticeInfo: {
      river: "",
      site: "",
      date: getCurrentDateTime(),
      date_start: new Date(),
      date_end: new Date(),
      cause1: false,
      cause2: false,
      cause3: false,
      content: "",
      status: "",
      theme: "",
      importance: "",
      recipient: "",
      source: "",
    },

    sites: ["Выберите Реку!"],
  });
  const noticeStatus = ["Действует", "Завершено"];
  const sendForm = async (event) => {
    event.preventDefault();
    if (
      state.noticeInfo.river === "" ||
      state.noticeInfo.site === "" ||
      state.noticeInfo.date === "" ||
      (state.noticeInfo.cause1 === false &&
        state.noticeInfo.cause2 === false &&
        state.noticeInfo.cause3 === false) ||
      state.noticeInfo.content === ""
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все поля формы!",
        severity: "error",
      }));
    } else {
      try {
        let id = randomId();
        await api.post("/notices/add", {
          ...state.noticeInfo,
          id: id,
          date_end: state.date_end ? state.date_end : new Date(),
        });
        addData(state.noticeInfo, id);
        setMessage(() => ({
          open: true,
          messageText: "Уведомелние успешно отправлено",
          severity: "success",
        }));
        resetForm();
      } catch (err) {
        console.log(err.response.data);
        return;
      }
    }
  };

  const resetForm = (event) => {
    if (event) {
      event.preventDefault();
    }
    setState({
      noticeInfo: {
        river: "",
        site: "",
        date: getCurrentDateTime(),
        date_start: getCurrentDateTime(),
        date_end: getCurrentDateTime(),
        cause1: false,
        cause2: false,
        cause3: false,
        content: "",
        status: "",
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
            Форма добавления извещений
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={Style.accordionDetails}>
          <form className={Style.form} onSubmit={sendForm}>
            <TextField
              sx={{ mb: 2 }}
              name="river"
              select
              label="Река"
              value={state.noticeInfo.river}
              onChange={handleChange}
              variant="standard"
            >
              {rivers.map((river) => (
                <MenuItem key={river} value={river}>
                  {river}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={{ mb: 2 }}
              name="site"
              select
              label="Участок реки"
              value={state.noticeInfo.site}
              onChange={handleChange}
              variant="standard"
            >
              {state.sites.map((site) => (
                <MenuItem key={site} value={site}>
                  {site}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={{ width: 180, marginTop: 3, marginBottom: 3 }}
              name="date"
              type={"text"}
              value={state.noticeInfo.date}
              onChange={handleChange}
              variant="standard"
              disabled
              label="Дата публикации извещения"
            />
            <TextField
              sx={{ width: 180, marginBottom: 3 }}
              name="date_start"
              type={"date"}
              value={state.noticeInfo.date_start}
              onChange={handleChange}
              variant="standard"
              label="Действует с"
            />
            <TextField
              sx={{ mb: 2 }}
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
            <TextField
              sx={{ width: 180 }}
              name="date_end"
              type={"date"}
              value={state.noticeInfo.date_end}
              onChange={handleChange}
              variant="standard"
              label="Действует по"
            />
            <Typography sx={{ fontSize: 12 }}>
              *если не известна дата конца, не указывайте
            </Typography>
            <FormControl
              sx={{ mt: 3, width: 240 }}
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
                  sx={{ mb: 1 }}
                  control={
                    <Checkbox
                      checked={state.noticeInfo.cause3}
                      onChange={handleChangeCheckBox}
                      name="cause3"
                    />
                  }
                  label="Путевые работы"
                />
              </FormGroup>
            </FormControl>

            <FormControl
              sx={{ mt: 3, width: "full", mb: 3 }}
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
                  setState({ ...state, noticeInfo: { ...state.noticeInfo , theme: newValue } }); // Просто сохраняем строку
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
                 setState({ ...state, noticeInfo: { ...state.noticeInfo , source: newValue } }); // Просто сохраняем строку
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
