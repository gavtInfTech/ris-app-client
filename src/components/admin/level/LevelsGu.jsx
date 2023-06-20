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
import PropTypes from 'prop-types';
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from '@mui/x-data-grid-generator';
import { api } from '../../../axiosConfig';
import { MessageContext } from '../../../contexts/MessageContext.jsx';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, date: new Date(), level1: null, level2: null }]);
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

export default function LevelsGuAdmin(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const {setMessage} = useContext(MessageContext);

useEffect(() => {
  const getData = async () => {
   try {
      const res = await api.get("/levelsGu/getAllByHydronode", { params: { hydropost: props.hydronode } });
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
      let res = await api.delete('/levelsGu/delete/' + id);
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
    if (editedRow.hydronode === undefined) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.level1 === null || newRow.level2 === null) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error"
    }))
    return;
    }

    const updatedRow = { ...newRow, river: props.river, hydronode: props.hydronode };
    if(updateFlag) {
      try {
        let res = await api.post('/levelsGu/change', updatedRow);
        setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
      } catch(err) {
        console.log(err.response.data);
        return;
      }
    } else {
      try {
        let res = await api.post('/levelsGu/add', updatedRow);
        setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
      } catch(err) {
        setMessage((prevState) => ({
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
      width: 120, 
      editable: true, 
    },
    {
      field: 'level1',
      headerName: 'Уровень воды над ПГ, ВБ',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'level2',
      headerName: 'Уровень воды над ПГ, НБ',
      type: 'number',
      width: 200,
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

  return (
    <Accordion sx={{ width: 720 }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ width: 710 }}
        >
            <Typography sx={{ ml: '20px', fontSize: 17 }}>{props.hydronode}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                <Box
                  sx={{
                    height: 500,
                    width: 640,
                    
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
            </Typography>
        </AccordionDetails>
          </Accordion>
  );
}