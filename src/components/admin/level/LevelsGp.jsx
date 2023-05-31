import * as React from 'react';
import { useState, useEffect } from 'react';
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
import axios from 'axios';
import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { collection, query, where, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import  { db }  from "../../../init-firebase.js";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, difference: 0 }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'hydropost' },
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

useEffect(() => {
  const getData = async () => {
  const data = await getDocs(query(collection(db, "levelsGp"), where('hydropost', '==', props.hydropost)));
  setRows(data.docs.map((doc) => ({...doc.data(), date: doc.data().date.toDate()})))
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
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    
    setRows(rows.filter((row) => row.id !== id));
    deleteDoc(doc(db, "levelsGp", id));
  };

  const handleCancelClick = (id) => () => {
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
    console.log(newRow.date)
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
      setRows(rows.map((row) => (row.id === hydropostData[index + 1].id ? hydropostData[index + 1] : row)));
      await setDoc (doc(db, 'levelsGp', hydropostData[index + 1].id), hydropostData[index + 1]);
    }
    setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
    await setDoc (doc(db, 'levelsGp', updatedRow.id), updatedRow);
    // let res = await axios.post('/levelsGp/add', updatedRow);
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