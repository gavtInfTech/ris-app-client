import { React, useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { api } from '../../../axiosConfig';
import { MessageContext } from '../../../contexts/MessageContext.jsx';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, difference: 0, date: new Date(), level1: null, level2: null }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'level1' },
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

export default function LevelsGpAdmin(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const {setMessage} = useContext(MessageContext);

useEffect(() => {
  const getData = async () => {
    try {
      const res = await api.get("/levelsGp/getAllByHydropost", { params: { hydropost: props.hydropost } });
      res.data.forEach((item) => {
        item.date = new Date(item.date);
        item.difference = Number(item.difference)
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
      let res = await api.delete('/levelsGp/delete/' + id);
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
    if (editedRow.hydropost === undefined) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    console.log(newRow);
    if (newRow.level1 === null || newRow.level2 === null) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error"
    }))
    return;
    }

    const updatedRow = { ...newRow, river: props.river, hydropost: props.hydropost };
    let updatedRows = rows.map((row) => (row.id === updatedRow.id ? updatedRow : row));
    let hydropostData = updatedRows.filter(row => row.hydropost === updatedRow.hydropost);
    hydropostData.sort((a, b) => a.date.getTime() - b.date.getTime());
    let index = hydropostData.findIndex(item => item.id === updatedRow.id);
    let difference;
    if (index - 1 < 0) { difference = 0; } else { 
      difference = hydropostData[index].level1 - hydropostData[index - 1].level1; 
      updatedRow.difference = difference;
    }
    if (hydropostData[index + 1] !== undefined) {
      hydropostData[index + 1].difference = hydropostData[index + 1].level1 - hydropostData[index].level1;

      try {
        let res = await api.post('/levelsGp/change', hydropostData[index + 1]);
        setRows(rows.map((row) => (row.id === hydropostData[index + 1].id ? hydropostData[index + 1] : row)));
      } catch(err) {
        console.log(err.response.data);
        return;
      }
    }
   
    if(updateFlag) {
      try {
        let res = await api.post('/levelsGp/change', updatedRow);
        setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
      } catch(err) {
        console.log(err.response.data);
        return;
      }
    } else {
      try {
        let res = await api.post('/levelsGp/add', updatedRow);
        setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
      } catch(err) {
        setMessage(() => ({
          open: true,
          messageText: err.response.data,
          severity: "error"
      }))
      console.log(err.response.data);
        return;
      }
    }
    setUpdateFlag(false);
    return updatedRow;
  };

  const columns = [
    { field: 'date', 
      headerName: 'Дата', 
      type: 'date',
      editable: true,
      width: 120, 
    },
    {
      field: 'level1',
      headerName: 'Уровень воды над 0 граф',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'level2',
      headerName: 'Уровень воды над ПГ',
      type: 'number',
      width: 180,
      editable: true,
    },
    {
      field: 'difference',
      headerName: 'Прибыло (+), убыло (-)',
      type: 'number',
      cellClassName: (params) => {
        if (params.value == null) {
          return '';
        }
  
        return clsx('super-app', {
          negative: params.value < 0,
          positive: params.value > 0,
          default: params.value === 0
        });
      },
      width: 180,
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

  return (
    <Accordion sx={{ width: 880 }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ width: 870 }}
        >
            <Typography sx={{ ml: '20px', fontSize: 17 }}>{props.hydropost}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
                <Box
                  sx={{
                    height: 500,
                    width: 800,
                    '& .super-app.negative': {
                      backgroundColor: '#d47483',
                      color: '#1a3e72',
                      fontWeight: '600',
                    },
                    '& .super-app.positive': {
                      backgroundColor: 'rgba(157, 255, 118, 0.49)',
                      color: '#1a3e72',
                      fontWeight: '600',
                    },
                    '& .super-app.default': {
                      backgroundColor: 'rgba(114, 163, 255, 0.49)',
                      color: '#1a3e72',
                      fontWeight: '600',
                    },
                  }}
                >
                  <DataGrid
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
                </Box>
           
        </AccordionDetails>
          </Accordion>
  );
}