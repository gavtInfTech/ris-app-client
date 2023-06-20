import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import  {GridActionsCellItem } from '@mui/x-data-grid';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import PopupEdit from './PopupEdit.jsx';
import style from '../style.module.css'
import { api } from '../../../axiosConfig';

export default function NoticeTable(props) {
  const [rows, setRows] = useState([]);

useEffect(() => {
    setRows(props.data.map((doc) => {
        let cause = "";
        if (doc.cause1) {cause += "Изменение СНО; " }
        if (doc.cause2) {cause += "Метеологические условия; " }
        if (doc.cause3) {cause += "Опасно для жизни; " }
        
        return {...doc, cause: cause};
    }))
}, [props.data])

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleDeleteClick = (id) => async () => {
    try {
      let res = await api.delete('/notice/delete/' + id);
      props.deleteData(id);
    } catch(err) {
      console.log(err.response.data)
    }
  };

  const columns = [
    { field: 'river', 
      headerName: 'Река', 
      type: 'string',
      width: 200, 
      editable: true 
    },
    { field: 'site', 
      headerName: 'Участок реки', 
      type: 'string', 
      width: 220, 
      editable: true 
    },
    {
      field: 'date',
      headerName: 'Дата',
      type: 'dateTime',
      width: 150,
      editable: true,
    },
    {
      field: 'cause',
      headerName: 'Причина уведомления',
      type: 'string',
      width: 200,
      editable: true,

    },
    {
        field: 'content',
        headerName: 'Содержание',
        type: 'string',
        width: 350,
        editable: true,
        
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Действия',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {

        return [
        <PopupEdit data={props.data} changeData={props.changeData} id={id} />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ];
      },
    },
  ];

  return (
 
    <Typography>
        <Box
            sx={{
            height: 500,
            width: 1240,
            
            }}
        >
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
            getRowHeight={() => 'auto'}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 1,
              },
            }}
            />
        </Box>
    </Typography>
    
  );
}