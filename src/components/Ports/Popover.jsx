import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { api } from '../../axiosConfig';

export default function BoatPopupButton({ id, portName, ships, forceReload }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [state, setState] = useState({
    id_ship: '',
    portName: portName,
    gruz_amount: '',
    gruz_type: '',
    place: '',
    date_enter: new Date(),
    date_out: new Date(),
    content: '',
    status: '',
    sostav: [], // инициализация массива
  });

  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get('/ports/getAllByPort', {
          params: { portName },
        });

        const filteredRows = res.data.filter(
          (row) =>
            String(row.id) !== String(id) && row.status !== 'Отправлено'
        );

        setRows(filteredRows);
      } catch (err) {
        console.log(err);
      }
    };

    getRows();
  }, [id, portName, forceReload]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getShipNameById = (shipId) => {
    const ship = ships.find((ship) => String(ship.id) === String(shipId));
    return ship?.name || '';
  };

  return (
    <>
      <GridActionsCellItem
        icon={<DirectionsBoatFilledIcon />}
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
          '& .MuiDialog-paper': {
            width: '30vw',
            height: '30vh',
            maxWidth: 'none',
            maxHeight: 'none',
          },
        }}
      >
        <DialogTitle>Добавить в </DialogTitle>
        <DialogContent>
          <Typography>Хеллоу, судно ID: {id}</Typography>
          <Autocomplete
            sx={{ mb: 3 }}
            options={rows}
            getOptionLabel={(option) => {
              if (!option) return '';
              const shipName = getShipNameById(option.id_ship);
              return shipName || option.name || 'Без названия';
            }}
            filterSelectedOptions
            onChange={(event, newValue) => {
              if (newValue && !state.sostav.includes(newValue.id)) {
                setState((prevState) => ({
                  ...prevState,
                  sostav: [...prevState.sostav, newValue.id],
                }));
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="Выберите состав:" variant="standard" />
            )}
            PopperComponent={(props) => (
              <Popper {...props} placement="bottom-start" disablePortal>
                {props.children}
              </Popper>
            )}
            ListboxProps={{
              sx: {
                '& .MuiAutocomplete-option': {
                  padding: '10px 16px',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} sx={{color: "red"}}>Закрыть</Button>
          <Button onClick={handleClose}>Добавить в состав</Button>
        </DialogActions>
        
      </Dialog>
    </>
  );
}
