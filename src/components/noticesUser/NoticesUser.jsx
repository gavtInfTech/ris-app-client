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
import { Button, Chip, DialogContent, Typography } from "@mui/material";
import Subscription from "./Subscription";
import { api } from "../../axiosConfig";
import Style from "./style.module.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";
import { customComparator } from "../vvp/siteMethods";

export default function NoticesUser(props) {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [filterApply, setFilterApply] = useState(false);
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [state, setState] = useState({
    noticeInfo: {
      river: "",
      site: "",
      date1: "",
      date2: "",
    },
    sites: [],
  });
  const previousFilters = useRef({});

  const getData = async () => {
    try {
      const res = await api.get("/notices/getAll");
      console.log(res);
      res.data.forEach((item) => {
        item.date = new Date(item.date);
      });

      res.data = res.data.map((doc) => {
        let cause = "";
        if (doc.cause1) {
          cause += "Изменение СНО; ";
        }
        if (doc.cause2) {
          cause += "Гидрометеорологические условия; ";
        }
        if (doc.cause3) {
          cause += "Путевые работы; ";
        }
        return { ...doc, id: doc.id, cause: cause };
      });

      setMainData(res.data.sort((a, b) => b.date.getTime() - a.date.getTime()));
      setData(res.data.sort((a, b) => b.date.getTime() - a.date.getTime()));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
    previousFilters.current = { ...state.noticeInfo };
  };

  const handleClose = () => {
    setOpen(false);
    if (!filterApply) {
      setState((prevState) => ({
        ...prevState,
        noticeInfo: { ...previousFilters.current.noticeInfo },
      }));
    }
  };

  const setFilter = () => {
    setFilterApply(true);
    let filteredData = mainData.filter((note) => {
      if (state.noticeInfo.river && note.river !== state.noticeInfo.river) {
        return false;
      }
      if (state.noticeInfo.site && note.site !== state.noticeInfo.site) {
        return false;
      }
      if (
        state.noticeInfo.date1 &&
        new Date(note.date_start) >= new Date(state.noticeInfo.date1)
      ) {
        return false;
      }
      if (
        state.noticeInfo.date2 &&
        new Date(note.date_end) <= new Date(state.noticeInfo.date2)
      ) {
        return false;
      }
      return true;
    });

    setData(filteredData);
    setOpen(false);
  };

  const unsetFilter = () => {
    setData(mainData);
    setState({
      noticeInfo: {
        river: "",
        site: "",
        date1: "",
        date2: "",
      },
      sites: [],
    });
    setFilterApply(false);
    setOpen(false);
  };

  const unsetFilterRiver = () => {
    setData(mainData);
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        river: "",
        site: "",
      },
      sites: [],
    }));
    setOpen(false);
    setFilter();
  };

  const unsetFilterSite = () => {
    setData(mainData);
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        site: "",
      },
      sites: [],
    }));
    setFilter();
    setOpen(false);
  };

  const unsetFilterDate1 = () => {
    setData(mainData);
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        date1: "",
      },
      sites: [],
    }));
    setFilter();
    setOpen(false);
  };

  const unsetFilterDate2 = () => {
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        date2: "",
      },
      sites: [],
    }));
    setFilter();
    setOpen(false);
  };

  const getSites = async (river) => {
    const res = await api.get("sites/getAllByRiver/", {
      params: { river: river },
    });
    let filteredData = res.data.sort(customComparator);
    return filteredData.map((site) => site.name);
  };

  const handleChangeRiver = async (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setDisabled(true);
    try {
      const sites = await getSites(value);
      setState((prevState) => ({
        noticeInfo: {
          ...prevState.noticeInfo,
          [name]: value,
        },
        sites: sites,
      }));
      setDisabled(false);
    } catch (error) {
      console.error(error);
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
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ fontSize: 23, textAlign: "center", marginBottom: 2, marginTop: 2 }}>
        Извещения для судоводителей
      </Typography>
      {filterApply && !open && (
  <Chip
    sx={{ mb: 1 }}
    label={`${state.noticeInfo.river}${state.noticeInfo.site ?  ","  + state.noticeInfo.site : ""} ${state.noticeInfo.date1 ? "," + new Date(state.noticeInfo.date1).toLocaleDateString("ru-Ru") : ""}${state.noticeInfo.date2 ?  " - " + new Date(state.noticeInfo.date2).toLocaleDateString("ru-Ru") : ""}`}
    variant="outlined"
    onDelete={unsetFilter}
  />
)}

      <Button onClick={handleOpen} className={Style.btnFilter}>
        <FilterAltIcon className={Style.filterIcon} />
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle sx={{ alignSelf: "center" }}>
          Фильтрация извещений
        </DialogTitle>

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
            onChange={handleChangeRiver}
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
            disabled={disabled}
          >
            {state.sites.map((site) => (
              <MenuItem key={site} value={site}>
                {site}
              </MenuItem>
            ))}
          </TextField>

          <Box className={Style.defaultContainer}>
            <Box sx={{ m: 3 }}>
              <p>Извещения с: </p>
              <TextField
                name="date1"
                type="date"
                value={state.noticeInfo.date1}
                onChange={handleChange}
                variant="standard"
              />
            </Box>
            <Box sx={{ m: 3 }}>
              <p>Извещения по: </p>
              <TextField
                name="date2"
                type="date"
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

      <NoticesList data={data} />
    </Box>
  );
}
