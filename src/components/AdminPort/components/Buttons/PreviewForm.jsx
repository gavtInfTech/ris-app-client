import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, gridClasses } from "@mui/x-data-grid";
import { api } from "../../../../axiosConfig";
import { MessageContext } from "../../../../contexts/MessageContext.jsx";
import EditStatusButton from "./Status/Edit.jsx";
import DeleteStatusButton from "./Status/Delete.jsx";
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function PreviewButton({ id, notices }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [forceReload, setForceReload] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);

  const reload = ()=>{
    setForceReload(prev=>!prev);
  }

  const columns = [
    {
      field: "date_recordMade",
      headerName: "Дата добавления записи",
      width: 180,
      valueGetter: (params) => {
        if (!params.value) return "—";
        return new Date(params.value).toLocaleString("ru-RU");
      },
    },
    {
      field: "date",
      headerName: "Дата статуса",
      width: 180,
      valueGetter: (params) => {
        if (!params.value) return "—";
        return new Date(params.value).toLocaleString("ru-RU");
      },
    },
    {
      field: "status",
      headerName: "Статус",
      width: 140,
    },
    {
      field: "comment",
      headerName: "Комментарий",
      width: 240,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 120,
      align: "left",
      cellClassName: "actions",
      getActions: (params) => {
        const { id, row } = params;
        return [
          <EditStatusButton reload={reload} id={id} data={row} />,
          <DeleteStatusButton reload={reload} id={id} />,
        ];
      },
    },
  ];

  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get(`/port/getAllStatusById/${id}`);
        setRows(res.data);
      } catch (err) {
        console.log("Ошибка при получении статусов:", err);
        setMessage({
          open: true,
          messageText: "Не удалось загрузить статусы",
          severity: "error",
        });
      }
    };

    if (open) getRows();
  }, [id, open, forceReload]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GridActionsCellItem
        icon={<AssignmentIcon />}
        label="Просмотреть записи"
        onClick={handleClickOpen}
        color="inherit"
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Статусы судна:</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <Typography variant="body2" sx={{ mb: 1, fontStyle: "italic" }}>
            ID записи: {id}
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.id}
            getRowHeight={() => "auto"}
            pageSizeOptions={[5]}
            isCellEditable={() => false} 
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
              sorting: { sortModel: [{ field: "date", sort: "asc" }] },
            }}
            sx={{
              [`& .${gridClasses.cell}`]: { py: 1 },
              height: 600,
              minHeight: 300,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
