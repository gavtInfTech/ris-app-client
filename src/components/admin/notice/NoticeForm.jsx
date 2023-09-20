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
import { Button } from "@mui/material";

export default function NoticeForm(props) {
  const [sites, setSites] = useState(props.sites);
  const { auth } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);
  const { addData } = props;
  console.log(sites);
  const rivers = auth.info.siteRivers;

  const [state, setState] = useState({
    noticeInfo: {
      river: "",
      site: "",
      date: "",
      cause1: false,
      cause2: false,
      cause3: false,
      content: "",
    },

    sites: [],
  });

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
        let res = await api.post("/notices/add", {
          ...state.noticeInfo,
          id: id,
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
        date: "",
        cause1: false,
        cause2: false,
        cause3: false,
        content: "",
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
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Березина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Сож":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Неман":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Мухавец":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Днепро-Бугский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Пина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Верхний участок реки Припять":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Припять":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Микашевичский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Горынь":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Западная Двина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Туровский затон":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Августовский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
        }));
        break;
      case "Свислочь":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.filter(site => site.river === river).map(site => site.name),
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
            Форма добавления уведомлений
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={Style.accordionDetails}>
          <form className={Style.form} onSubmit={sendForm}>
            <TextField
              sx={{mb: 2}}
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
              sx={{mb: 2}}
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
              sx={{ width: 180 }}
              name="date"
              type={"datetime-local"}
              value={state.noticeInfo.date}
              onChange={handleChange}
              variant="standard"
            />

            <FormControl
              sx={{ mt: 3, ml: 1, width: 240 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ mb: 1 }} component="legend">
                Причина уведомления
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
                  label="Метеологические условия"
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
                  label="Опасно для жизни"
                />
              </FormGroup>
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
