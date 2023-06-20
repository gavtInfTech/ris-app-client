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
useEffect(() => {
  const getData = async () => {
      try {
        const res = await api.get("/dislocation/getAllByOrganisation", { params: { organisationName: auth.organisation } });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
        })
        setRows(res.data);
      } catch (err) { 
        console.log(err)
      }
  }   

  getData();
  }, [])

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setUpdateFlag(true);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    try {
      let res = await api.delete('/dislocation/delete/' + id);
      setRows(rows.filter((row) => row.id !== id));
    } catch(err) {
      console.log(err.response.data)
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
        let res = await api.post('/dislocation/change', newRow);
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
      } catch(err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    } else {
      try {
        let res = await api.post('/dislocation/add', newRow);
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
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
      width: 250,
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
      width: 160,
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
        height: 500,
        width: '100%'
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