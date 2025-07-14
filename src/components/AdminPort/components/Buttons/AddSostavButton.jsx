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
} from "@mui/material";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { api } from "../../../../axiosConfig";
import AddLinkIcon from "@mui/icons-material/AddLink";

export default function AddSostavButton({ id, portId, ships, reload }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [state, setState] = useState({
    id_portRecord: "",
    id_toAdd: id,
  });
  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get(`/port/getAllByPortId/${portId}`);

        const filteredRows = res.data.filter((row) => {
          return (
            String(row.id) !== String(id) && // не совпадает с текущим id
            row.archived === false && // не архивирован
            (!row.sostav || row.sostav.length === 0) // нет состава
          );
        });

        console.log("Отфильтрованные записи:", filteredRows);

        const readyRows = filteredRows.map((element) => ({
          id_ship: element.id_ship,
          id: element.id, // это id записи (record), нужен тебе
        }));

        setRows(readyRows);

        console.log("Это можно в состав:", readyRows); // не `rows`, а `readyRows`
      } catch (err) {
        console.log("Ошибка при получении портов:", err);
      }
    };

    getRows();
  }, [id, portId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await api.post("/port/addToSostav", {
              ...state,
            });
      console.log("DSS", state);
      reload();
      handleClose(); // закрываем форму только после успешного добавления
    } catch (error) {
      console.error("❌ Ошибка при добавлении записи:", error);
      // можно добавить сообщение об ошибке через Snackbar или Alert
    }
  };

  return (
    <>
      <GridActionsCellItem
        icon={<AddLinkIcon />}
        label="Внести в состав"
        onClick={handleClickOpen}
        color="inherit"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "30vw",
            height: "30vh",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <DialogTitle>Добавить в состав: </DialogTitle>
        <DialogContent>
          <Autocomplete
            sx={{ mb: 3 }}
            options={rows
              .map((row) => {
                const ship = ships.find(
                  (s) => String(s.id) === String(row.id_ship)
                );
                if (!ship) return null;
                return {
                  label: ship.name,
                  id_portRecord: row.id, // id записи порта
                };
              })
              .filter(Boolean)} // удалить null если ship не найден
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.id_portRecord === value.id_portRecord
            }
            onChange={(event, newValue) => {
              if (newValue) {
                setState((prevState) => ({
                  ...prevState,
                  id_portRecord: newValue.id_portRecord,
                }));
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Выберите судно для состава"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Закрыть
          </Button>
          <Button onClick={handleSubmit}>Добавить в состав</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
