import * as React from "react";
import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import NoticesList from "./NoticesList";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { rivers, sites } from "./info";
import { Button, DialogContent } from "@mui/material"
import Subscription from "./Subscription";
import { api } from "../../axiosConfig";
import Style from "./style.module.css";

export default function NoticesUser(props) {
  const [open, setOpen] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    noticeInfo: {
      river: "",
      site: "",
      date1: "",
      date2: "",
    },

    sites: [],
  });

  const getData = async () => {
    try {
      const res = await api.get("/notices/getAll");
      res.data.forEach((item) => {
        item.date = new Date(item.date);
      });
      setMainData(
        res.data.map((doc) => {
          let cause = "";
          if (doc.cause1) {
            cause += "Изменение СНО; ";
          }
          if (doc.cause2) {
            cause += "Метеологические условия; ";
          }
          if (doc.cause3) {
            cause += "Опасно для жизни; ";
          }
          return { ...doc, id: doc.id, cause: cause };
        })
      );
      setData(
        res.data.map((doc) => {
          let cause = "";
          if (doc.cause1) {
            cause += "Изменение СНО; ";
          }
          if (doc.cause2) {
            cause += "Метеологические условия; ";
          }
          if (doc.cause3) {
            cause += "Опасно для жизни; ";
          }
          return { ...doc, id: doc.id, cause: cause };
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setFilter = () => {
    let copiOfMainData = mainData;

    if (state.noticeInfo.river !== "") {
      copiOfMainData = copiOfMainData.filter(
        (note) => note.river === state.noticeInfo.river
      );
    }
    if (state.noticeInfo.site !== "") {
      copiOfMainData = copiOfMainData.filter(
        (note) => note.site === state.noticeInfo.site
      );
    }
    if (state.noticeInfo.date1 !== "") {
      copiOfMainData = copiOfMainData.filter(
        (note) => note.date > new Date(state.noticeInfo.date1)
      );
    }
    if (state.noticeInfo.date2 !== "") {
      copiOfMainData = copiOfMainData.filter(
        (note) => note.date < new Date(state.noticeInfo.date2)
      );
    }
    setData(copiOfMainData);
    setOpen(false);
  };

  const unsetFilter = () => {
    getData();
    setState({
      noticeInfo: {
        river: "",
        site: "",
        date1: "",
        date2: "",
      },

      sites: [],
    });
    setOpen(false);
  };

  const setSites = (river) => {
    // eslint-disable-next-line default-case
    switch (river) {
      case rivers[0]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site1,
        }));
        break;
      case rivers[1]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site2,
        }));
        break;
      case rivers[2]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site3,
        }));
        break;
      case rivers[3]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site4,
        }));
        break;
      case rivers[4]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site5,
        }));
        break;
      case rivers[5]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site6,
        }));
        break;
      case rivers[6]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site7,
        }));
        break;
      case rivers[7]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site8,
        }));
        break;
      case rivers[8]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site9,
        }));
        break;
      case rivers[9]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site10,
        }));
        break;
      case rivers[10]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site11,
        }));
        break;
      case rivers[11]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site12,
        }));
        break;
      case rivers[12]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site13,
        }));
        break;
      case rivers[13]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site14,
        }));
        break;
      case rivers[14]:
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.site15,
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
    setSites(value);
  };

  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Button
        // sx={{ width: "100%", backgroundColor: "#34418f" }}
        onClick={handleOpen}
        className={Style.button}
      >
        <FilterAltIcon className={Style.filterIcon} />
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle sx={{ alignSelf: "center" }}>
          Фильтрация уведомлений
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "100%", mb: 2 }}
            name="river"
            select
            label="Река"
            value={state.noticeInfo.river}
            onChange={handleChange}
            variant="standard"
            size="large"
          >
            {rivers.map((river) => (
              <MenuItem key={river} value={river}>
                {river}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            sx={{ width: "100%", mb: 2 }}
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

          <Box className={Style.defaultContainer}>
            <Box sx={{ m: 3 }}>
              <p>Уведомления с: </p>
              <TextField
                name="date1"
                type={"datetime-local"}
                value={state.noticeInfo.date1}
                onChange={handleChange}
                variant="standard"
              />
            </Box>
            <Box sx={{ m: 3 }}>
              <p>Уведомления по: </p>
              <TextField
                name="date2"
                type={"datetime-local"}
                value={state.noticeInfo.date2}
                onChange={handleChange}
                variant="standard"
              />
            </Box>
          </Box>

          <Box className={Style.defaultContainer}>
            <Button
              className={Style.buttonForFilter}
              variant="contained"
              onClick={setFilter}
            >
              Применить
            </Button>
            <Button
              className={Style.buttonForFilter}
              variant="contained"
              onClick={unsetFilter}
            >
              Сбросить
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* <Subscription handleOpenMessage={props.handleOpenMessage} data={data} /> */}

      <NoticesList data={data} />
    </Box>
  );
}
