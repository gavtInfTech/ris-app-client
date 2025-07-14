import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, gridClasses } from "@mui/x-data-grid";
import { api } from "../../../../axiosConfig";
import { MessageContext } from "../../../../contexts/MessageContext.jsx";
import PreviewIcon from "@mui/icons-material/Preview";
import Details from "./Details/Details.jsx";
import DeleteDetailsButton from "./Details/Delete.jsx";

export default function PreviewShipDetailsButton({ ships, id }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [forceReload, setForceReload] = useState(false);
  const { setMessage } = useContext(MessageContext);

  const reload = ()=>{
    setForceReload(prev=>!prev);
  }

  const columns = [
    {
      field: "archivedAt",
      headerName: "Дата архивации",
      width: 180,
      valueGetter: ({ value }) =>
        value ? new Date(value).toLocaleString("ru-RU") : "—",
    },
    {
      field: "id_ship",
      headerName: "Название судна",
      width: 130,
      editable: true,
      renderCell: (params) => {
        const ship = ships.find((ship) => ship.id === params.value);
        return <span>{ship ? ship.name : "Не указано"}</span>;
      },
      renderEditCell: (params) => (
        <Select
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({
              id: params.id,
              field: "id_ship",
              value: event.target.value,
            })
          }
          fullWidth
        >
          {ships.map((ship) => (
            <MenuItem key={ship.id} value={ship.id}>
              {ship.name}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      field: "infromation",
      headerName: "Информация",
      width: 140,
      editable: false,
      renderCell: () => <Details ships={ships} data_info={rows} />,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 120,
      align: "left",
      cellClassName: "actions",
      getActions: (params) => {
        const { id } = params;
        return [
          <Details reload={reload} ships={ships} data_info={rows} editItem={true} />,
          <DeleteDetailsButton  reload={reload} id={id} />,
        ];
      },
    },
  ];
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        console.log("ID", id);
        const res = await api.get(`/port/getShipDetailsHistory/${id}`);
        console.log("RESULTAT", res.data);
        setRows(res.data);
      } catch (err) {
        console.error("Ошибка при получении архивов:", err);
        setMessage({
          open: true,
          messageText: "Не удалось загрузить архивы",
          severity: "error",
        });
      }
    };

    if (open) fetchHistory();
  }, [id, open, forceReload]);

  return (
    <>
      <GridActionsCellItem
        icon={<PreviewIcon />}
        label="Просмотреть архив"
        onClick={() => setOpen(true)}
        color="inherit"
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Архив изменений записи судна</DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, fontStyle: "italic" }}>
            ID исходной записи: {id}
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.id}
            getRowHeight={() => "auto"}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
              sorting: { sortModel: [{ field: "archivedAt", sort: "desc" }] },
            }}
            sx={{
              [`& .${gridClasses.cell}`]: { py: 1 },
              height: 400,
              minHeight: 300,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "red" }}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
