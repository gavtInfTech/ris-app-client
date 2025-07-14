import { React, useState, useEffect, useContext } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box, textAlign } from "@mui/system";
import { GridActionsCellItem, gridClasses } from "@mui/x-data-grid";
import { api } from "../../../axiosConfig.js";
import { DataGrid } from "@mui/x-data-grid";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  MenuItem,
  Popper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BoatPopupButton from "../../Ports/Popover.jsx";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddLinkButton from "./Buttons/AddLinkButton.jsx";
import PreviewButton from "./Buttons/PreviewForm.jsx";
import AddSostavButton from "./Buttons/AddSostavButton.jsx";
import RemoveSostavButton from "./Buttons/RemoveSostavButton.jsx";
import DeleteRecordButton from "./Buttons/DeleteRecordButtom.jsx";
import ShipDetailsInfoButton from "./ShipDetailsInfoButton.jsx";
import ShipSendButton from "./ShipSendButton.jsx";
import PreviewShipDetailsButton from "./Buttons/PreviewShipDetails.jsx";

export default function PortTableSend({ portId, bigReload, bigForceReload }) {
  const [expandedRows, setExpandedRows] = useState([]);
  const toggleExpand = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const { setMessage } = useContext(MessageContext);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const [rows, setRows] = useState([]);
  const [ships, setShips] = useState([]);
  const [forceReload, setForceReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [infoText, setInfoText] = useState({});
  const [displayRows, setDisplayRows] = useState([]);
  const [idShip, setIdShip] = useState("");
  const [shipInfoOpen, setShipInfoOpen] = useState(false);
  const reload = ()=>{
    setForceReload(prev=>!prev);
  }
  useEffect(() => {
    const getShips = async () => {
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

    const getRows = async () => {
      try {
        const res = await api.get(`/port/getAllArchived/${portId}`);
        setRows(res.data);
        console.log("Дата результата:", res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getShips();
    getRows();
  }, [forceReload, portId, bigForceReload]); // Убрали expandedRows из зависимостей

  // Отдельный эффект для построения displayRows
  useEffect(() => {
    const newDisplayRows = [];
    rows.forEach((row) => {
      newDisplayRows.push({ ...row, isSostavRow: false });

      if (expandedRows.includes(row.id)) {
        row.sostav?.forEach((element) => {
          newDisplayRows.push({
            id: element.id + "_" + row.id, // Уникальный ID для каждой строки состава
            date_recordMade: row.date_recordMade,
            id_ship: element.id_ship,
            isSostavRow: true,
            shipDetails: element,
          });
        });
      }
    });

    setDisplayRows(newDisplayRows);
  }, [rows, expandedRows]); // Зависит от rows и expandedRows

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInfoText("");
  };

  const columns = [
    {
      field: "expand",
      headerName: "",
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        // Скрываем для строк состава И для обычных строк без состава
        if (params.row.isSostavRow || !params.row.sostav?.length) return null;

        const isOpen = expandedRows.includes(params.row.id);
        return (
          <Box
            onClick={() => toggleExpand(params.row.id)}
            sx={{ cursor: "pointer", pl: 1 }}
          >
            {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </Box>
        );
      },
    },
    {
      field: "date_recordMade",
      headerName: "Дата добавления записи",
      width: 180,
      editable: false,
      valueGetter: (params) => {
        if (!params.value) return "—";
        return new Date(params.value).toLocaleString("ru-RU");
      },
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
      renderCell: (params) => (
        <ShipDetailsInfoButton
          ships={ships}
          data_info={params.row.shipDetails}
          reload={reload}
        />
      ),
    },
    {
      field: "sostav",
      headerName: "Состав",
      width: 150,
      editable: false,
      renderCell: (params) => {
        const names =
          params.row.sostav
            ?.map((shipSostav) => {
              // Если это строка (например, ID), можно попробовать найти по нему
              return ships.find((ship) => ship.id == shipSostav.id_ship)?.name;
            })
            .filter(Boolean)
            .join(", ") || "—";
        return names;
      },
    },
    {
      field: "status",
      headerName: "Статус",
      width: 140,
      editable: true,
      renderCell: (params) => {
        // Безопасное получение последнего статуса
        const lastStatus =
          params.row.shipDetails.notices?.at(-1)?.status || "—";
        return lastStatus;
      },
    },
    {
      field: "content",
      headerName: "Доп. информация",
      width: 140,
      editable: true,
      renderCell: (params) => {
        // Безопасное получение последнего статуса
        const lastStatus =
          params.row.shipDetails.notices?.at(-1)?.comment || "—";
        return lastStatus;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 240,
      align: "left",
      cellClassName: "actions",
      getActions: (params) => {
        const { id, row } = params;
        if (row.isSostavRow) {
          return [
            <PreviewShipDetailsButton ships={ships} id={row.shipDetails.id} reload={reload} />,
            <AddLinkButton
              ships={ships}
              portName={portId}
              id={row.shipDetails.id}
              reload={reload}
            />,
            <PreviewButton
              ships={ships}
              portName={portId}
              id={row.shipDetails.id}
              reload={reload}
            />,
            <RemoveSostavButton
              idRecord={id.split("_")[1]}
              idSostav={row.shipDetails.id}
              reload={reload}
            />,
            <DeleteRecordButton id={row.shipDetails.id} reload={reload} />,
          ];
        }
        return [
          <PreviewShipDetailsButton ships={ships} id={row.shipDetails.id} reload={reload} />,
          <AddLinkButton
            ships={ships}
            portName={portId}
            id={row.shipDetails.id}
            reload={reload}
          />,
          <PreviewButton
            ships={ships}
            portName={portId}
            id={row.shipDetails.id}
            reload={reload}
          />,
          <AddSostavButton
            ships={ships}
            portId={portId}
            id={id}
            reload={reload}
          />,
          <DeleteRecordButton id={id} reload={reload}/>,
        ];
      },
    },
  ];

  return (
    <Typography>
      <Button variant="outlined" size="small" onClick={handleOpen}>
        ОТПРАВЛЕННЫЕ СУДА
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogTitle>Статусы судна:</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <DataGrid
            rows={displayRows}
            columns={columns}
            getRowId={(row) => row.id}
            isRowSelectable={(params) => !params.row.isSostavRow}
            getRowHeight={() => "auto"}
            isCellEditable={() => false} // 🔒 Отключает редактирование
            initialState={{
              sorting: {
                sortModel: [{ field: "name", sort: "desc" }],
              },
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 1,
              },
              height: 600,
              minHeight: 500,
              minWidth: 1400
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Typography>
  );
}
