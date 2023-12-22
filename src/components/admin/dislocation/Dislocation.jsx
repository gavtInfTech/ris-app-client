import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { randomId } from '@mui/x-data-grid-generator';
import { AuthContext } from "../../../contexts/AuthContext";
import { MessageContext } from '../../../contexts/MessageContext.jsx';
import { api } from '../../../axiosConfig';
import { forbiddenTime } from "../Time/forbiddenTime";

const organisations = [
  "РУ ЭСП \"Днепро-Бугский водный путь\"",
  "РУ Днепро-Двинское предприятие водных путей \"Белводпуть\"",
  "РУ Днепро-Березинское предприятие водных путей"
]

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const {auth} = useContext(AuthContext);

  const handleClick = () => {
    const id = randomId();
    let organisation;
    if (auth.role === "Администратор") organisation = null;
    else {
      organisation = auth.organisation;
    }
    setRows((oldRows) => [...oldRows, { id, organisation: organisation, number: "", typeOfWork: "",
    riverName: "", distance: "", place: "", date: null }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'number' },
    }));
  };

  return (
    <GridToolbarContainer sx={{ color: '#4778e9' }}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Добавить данные
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function Dislocation() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const {auth} = useContext(AuthContext);
  const [updateFlag, setUpdateFlag] = useState(false);
  const {setMessage} = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
 
  useEffect(() => {
    const currentTime = new Date();
    setIsEditAllowed(currentTime < forbiddenTime);
  }, []);

useEffect(() => {
  const getData = async () => {
      try {
        const res = await api.get("/dislocation/getAllByOrganisation", { params: { organisationName: auth.organisation } });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
        })
        let ready = res.data.sort((a, b) => a.date.getTime() - b.date.getTime());
        const filteredReady = ready.filter((row) => {
          // Проверяем, есть ли в массиве ready элемент с аналогичным id, но с припиской "_change"
        const hasChange = ready.some((changeRow) => changeRow.id === row.id + '_change');
        
          // Возвращаем элемент, если для него нет соответствующего id с припиской "_change"
          return !hasChange;
        });
        setRows(filteredReady);
        if (!isEditAllowed){
          setMessage(() => ({
            open: true,
            messageText: `Изменения после ${forbiddenTime.getHours()}:00 должны подтверждаться Администрацией!`,
            severity: "warning",
          }));
        }
      } catch (err) { 
        console.log(err)
      }
  }   

  getData();
  }, [forceReload])

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date().toDateString();
    
    // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today) {
      // Если не равно, выводим сообщение и не выполняем действие
      setMessage(() => ({
        open: true,
        messageText: "Редактирование прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    }
  
    setUpdateFlag(true);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date().toDateString();
  
    // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today) {
      // Если не равно, выводим сообщение и не выполняем действие
      setMessage(() => ({
        open: true,
        messageText: "Удаление прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    }
  
    try {
      isEditAllowed ? await api.delete(`/dislocation/delete/${id}`) : await api.post(`/dislocation/deleteWithConfirm/${id}`);
      setForceReload((prev) => !prev);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.organisation === null) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    console.log(newRow);
    if (newRow.organisation === null || newRow.number === "" ||
        newRow.typeOfWork === "" || newRow.riverName === "" ||
        newRow.distance === "" || newRow.place === "" ||
        newRow.date === null) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error"
    }))
    return;
    }
   
    if(updateFlag) {
      try {
        if (isEditAllowed){
          await api.post('/dislocation/change',  {...newRow, typeOfChange: "Изменено", confirmation: isEditAllowed });
        }
        else{
          await api.post("/dislocation/change", {...newRow, 
            id: newRow.id.includes("_change") ? newRow.id : newRow.id + "_change",
            typeOfChange: "Изменено", 
            confirmation: isEditAllowed });
        }
        setForceReload((prev) => !prev);
      } catch(err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    } else {
      try {
        let res = await api.post('/dislocation/add', {...newRow, typeOfChange: "Добавлено", confirmation: isEditAllowed });
        setForceReload((prev) => !prev);
      } catch(err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    }
    setUpdateFlag(false);
    return newRow;
  };

  let columns = [
    { field: 'number', 
      headerName: '№ судна / партии', 
      width: 140, 
      editable: true 
    },
    {
      field: 'typeOfWork',
      headerName: 'Вид работы',
      width: 250,
      editable: true,
    },
    {
      field: 'riverName',
      headerName: 'Наименование реки и № участка*',
      width: 225,
      editable: true,
    },
    {
      field: 'distance',
      headerName: 'Км от устья',
      width: 100,
      editable: true,
    },
    {
      field: 'place',
      headerName: 'Место дислокации	',
      width: 200,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Дата начала работы',
      type: 'date',
      width: 150,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Действия',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    {
      field: "typeOfChange",
      headerName: "Тип изменения",
      type: "number",
      width: 120,
      editable: false,
    },
    {
      field: "confirmation",
      headerName: "Статус",
      type: "boolean",
      width: 150,
      editable: false,
    }
  ];

  if (auth.role === "Администратор") {
    columns = [{ field: 'organisation', 
    headerName: 'Название предприятия', 
    type: 'singleSelect',
    valueOptions: organisations,
    width: 300, 
    editable: true 
  }, ...columns]
  }

  return (
 
      <DataGrid
      getRowHeight={() => 'auto'}
      sx={{
        [`& .${gridClasses.cell}`]: {
          py: 2,
        },
        height: 700,
        maxWidth: 1600
      }}
      rows={rows}
      columns={columns}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
      onRowEditStart={handleRowEditStart}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      components={{
          Toolbar: EditToolbar,
      }}
      componentsProps={{
          toolbar: { setRows, setRowModesModel },
      }}
      experimentalFeatures={{ newEditingApi: true }}
      />
    
  );
}