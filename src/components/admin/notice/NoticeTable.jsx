import * as React from "react";
import { useState, useEffect, useContext } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ReplayIcon from '@mui/icons-material/Replay';
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import PopupEdit from "./PopupEdit.jsx";
import style from "../style.module.css";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";

export default function NoticeTable(props) {
  const [rows, setRows] = useState([]);
  const { setMessage } = useContext(MessageContext);

  console.log("DATA:", props.data);
  useEffect(() => {
    setRows(
      props.data.map((doc) => {
        let cause = "";
        if (doc.cause1) {
          cause += "Изменение СНО; ";
        }
        if (doc.cause2) {
          cause += "Метеологические условия; ";
        }
        if (doc.cause3) {
          cause += "Путевые работы; ";
        }

        return { ...doc, cause: cause };
      })
    );
  }, [props.data]);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleDeleteClick = (id) => async () => {
    try {
      let res = await api.delete("/notices/delete/" + id);
      props.deleteData(id);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  console.log(rows);  
  const handlerReplayClick = (id) => async () => {
    try {
      if (!props.data) {
        console.error("Props data is undefined or null.");
        return;
      }
  
      const findObjectById = (array, id) => {
        return array.find(obj => obj.id === id);
      };
      const notice = findObjectById(props.data, id);
  
      if (!notice) {
        console.error("Notice with the specified ID not found.");
        return;
      }
  
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  
      await api.post("/notices/change", { ...notice, date: formattedDate });

      const newDate = `${day}.${month}.${year},\n${hours}:${minutes}`;


      console.log(newDate);

      setMessage(() => ({
        open: true,
        messageText: "Уведомление успешно обновлено!",
        severity: "success",
      }));
      
      // Check if rows and setRows are defined
      if (rows && setRows) {
        const newRows = rows.data.map(row => (row.id === id ? { ...row, date: newDate } : row));
        setRows(newRows);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };
  
  const columns = [
    {
      field: "river",
      headerName: "Река",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "site",
      headerName: "Участок реки",
      type: "string",
      width: 220,
      editable: true,
    },
    {
      field: "date",
      headerName: "Дата",
      type: "dateTime",
      width: 150,
      editable: true,
    },
    {
      field: "cause",
      headerName: "Причина уведомления",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "content",
      headerName: "Содержание",
      type: "string",
      width: 350,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <PopupEdit data={props.data} changeData={props.changeData} id={id} sites={props.sites} />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
          icon={<ReplayIcon />}
          label="Повторить"
          onClick={handlerReplayClick(id)}
          color="inherit"
        />,
        ];
      },
    },
  ];

  return (
    <Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        componentsProps={{
          toolbar: { setRows },
        }}
        experimentalFeatures={{ newEditingApi: true }}
        getRowHeight={() => "auto"}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 1,
          },
          height: 650,
          maxWidth: 1240,
        }}
      />
    </Typography>
  );
}
