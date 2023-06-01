import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {
  GridActionsCellItem,
  gridClasses
} from '@mui/x-data-grid';
import { DataGrid } from "@mui/x-data-grid";
import styles from './style.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { api } from '../../../axiosConfig';
import MenuItem from '@mui/material/MenuItem';
import { randomId } from '@mui/x-data-grid-generator';

const organisations = [
  "РУ ЭСП \"Днепро-Бугский водный путь\"",
  "РУ Днепро-Двинское предприятие водных путей \"Белводпуть\"",
  "РУ Днепро-Березинское предприятие водных путей"
]

export default function Users(props) {
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState();
  const [messageColor, setMessageColor] = useState();
useEffect(() => {
    const getUsers = async () => {
      try {
        let res = await api.get('/auth/users');
        setRows (res.data);
      } catch(err) {
        console.log(err.response.data)
      }
      
    }

    getUsers();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    let user = {
      id: randomId(),
      username: form.username.value,
      password: form.password.value,
      repeatPassword: form.repeatPassword.value,
      role: "Оператор",
      organisation: form.organisation.value
    }
    try {
      let res = await api.post('/auth/registration', user);
      setRows((rows) => [...rows, {
        id: user.id,
        username: user.username,
        organisation: user.organisation,
      }]);
      setMessage(res.data);
      setMessageColor("green");
      form.reset();
    } catch (err) {
      setMessageColor("red");
      setMessage(err.response.data);
    }
  };

  const handleDeleteClick = (id) => async () => {
    try {
      let res = await api.delete('/auth/delete/' + id);
      setRows(rows.filter((row) => row.id !== id));
    } catch(err) {
      console.log(err.response.data)
    }
  };



  const columns = [
    { field: 'username', 
      headerName: 'Имя пользователя', 
      type: 'singleSelect',
      width: 220,
      editable: true 
    },
    {
      field: 'organisation',
      headerName: 'Организация',
      width: 450,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Удалить',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {

        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ]
      },
    },
  ];

  

  return (
    <div className={styles.conteiner}>

      <form className={styles.form} onSubmit={handleSubmit}>

    <TextField
        sx={{width: 520, mb: 1}}
        name="organisation"
        label="Организация"
        select
        defaultValue=""
        >
        {organisations.map((organisation) => (
            <MenuItem key={organisation} value={organisation}>
                {organisation}
            </MenuItem>
        ))}
    </TextField>
        <TextField
          sx={{pb: 1}}
          required
          label="Имя пользователя"
          className={styles.input}  
          name='username' />
        <TextField
        sx={{pb: 1}}
          required
          label="Пароль"
          type="password"
          className={styles.input} 
          name='password'/>
        <TextField
          sx={{pb: 1}}
          required
          label="Повторите пароль"
          type="password"
          className={styles.input} 
          name='repeatPassword'/>

        <Typography color={messageColor} sx={{mb: 1}}>
        {message}
        </Typography>

        <Button 
          variant="contained"  
          type='submit'
          className={styles.button} 
           >
            Зарегистрировать
          </Button>
      </form>
      
   
      <Box className={styles.tableContainer}>   
          <DataGrid
          rows={rows}
          columns={columns}
          getRowHeight={() => 'auto'}
          sx={{
              [`& .${gridClasses.cell}`]: {
                  py: 2,
              },
              width: 800
              }}
          experimentalFeatures={{ newEditingApi: true }}
          />
      </Box>
   
  </div>

  );
}