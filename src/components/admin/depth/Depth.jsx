import React  from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  gridClasses
} from '@mui/x-data-grid';
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from '@mui/x-data-grid-generator';
import { collection, query, where, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import  { db }  from "../../../init-firebase.js";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, date: new Date(), limitedRoll: null, planDepth: null, forecastDate: null, forecastDepth: null }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'planDepth' },
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

export default function Depth(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

useEffect(() => {
      const getRows = async () => {
        const data = await getDocs(query(collection(db, "depths"), where('site', '==', props.site)));
        setRows(data.docs.map((doc) => ({...doc.data(), 
          date: doc.data().date.toDate(), 
          forecastDate: doc.data().forecastDate !== null ? doc.data().forecastDate.toDate() : ""})))
        }

        getRows();
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

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    deleteDoc(doc(db, "depths", id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.width === undefined) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    console.log(newRow);
    const updatedRow = { ...newRow, river: props.river, site: props.site };
    setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
    await setDoc (doc(db, 'depths', updatedRow.id), updatedRow);
    return updatedRow;
  };

  

  const columns = [
    { field: 'planDepth', 
      headerName: 'Плановая глубина', 
      type: 'number', 
      width: 140, 
      editable: true 
    },
    {
      field: 'date',
      headerName: 'Дата',
      type: 'date',
      width: 120,
      editable: true,
    },
    {
      field: 'limitedRoll',
      headerName: 'Лимитирующий перекат',
      width: 200,
      editable: true,
    },
    {
      field: 'depth',
      headerName: 'Глубина, см',
      type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'width',
      headerName: 'Ширина, м',
      type: 'number',
      width: 90,
      editable: true,
    },
    { 
      field: 'forecastDate', 
      headerName: 'Дата прогноза', 
      type: 'date',
      width: 120, 
      editable: true 
    },
    { 
      field: 'forecastDepth', 
      headerName: 'Прогнозируемая глубина, м', 
      type: 'number', 
      width: 200, 
      editable: true 
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
    <Accordion sx={{ width: 1170 }}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ width: 1160 }}
    >
    <Typography sx={{ ml: '20px', fontSize: 17 }}>{props.site}</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            <Box
              sx={{
                height: 500,
                width: 1090,
                
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
                getRowHeight={() => 'auto'}
                sx={{
                    [`& .${gridClasses.cell}`]: {
                      py: 2,
                    },
                  }}
                components={{
                  Toolbar: EditToolbar,
                }}
                componentsProps={{
                  toolbar: { setRows, setRowModesModel },
                }}
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>
        </Typography>
    </AccordionDetails>
</Accordion>
  );
}