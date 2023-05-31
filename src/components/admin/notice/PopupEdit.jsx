import { useState, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Styles from '../style.module.css'
import { Box } from '@mui/system';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setDoc, doc } from "firebase/firestore";
import  { db }  from "../../../init-firebase.js";
import { AuthContext } from "../../../contexts/AuthContext";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Style from './style.module.css';

export default function PopupEdit(props) {

    const {auth} = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const { changeData, handleOpenMessage } = props;

    const rivers = auth.info.siteRivers;
    const sites = auth.info.siteGroups;

  const handleClick = (event) => {
    const document = props.data.find((doc) => doc.id === props.id);

    setState((prevState) => ({
        noticeInfo: {
            ...document,
        },
        sites: [...prevState.sites]
    }))
    setAnchorEl(event.currentTarget);
    setSites(document.river);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const setSites = (river) => {
    // eslint-disable-next-line default-case
    switch (river) {
        case "Днепр":
            setState((prevState) => ({
                noticeInfo: {
                    ...prevState.noticeInfo,
                },
                sites: sites.dnepr
            }))
            break;
        case "Березина":
            setState((prevState) => ({
                noticeInfo: {
                    ...prevState.noticeInfo,
                },
                sites: sites.berezina
            }))
            break;
        case "Сож":
            setState((prevState) => ({
                noticeInfo: {
                    ...prevState.noticeInfo,
                },
                sites: sites.soj
            }))
            break;
        case "Неман":
            setState((prevState) => ({
                noticeInfo: {
                    ...prevState.noticeInfo,
                },
                sites: sites.neman
            }))
            break;
        case "Мухавец":
            setState((prevState) => ({
                noticeInfo: {
                    ...prevState.noticeInfo,
                },
                sites: sites.muhavets
            }))
            break;
        case "Днепро-Бугский канал":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.dnepBug
            }))
        break;
        case "Пина":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.pina
            }))
        break;
        case "Верхний участок реки Припять":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.upperPripyat
            }))
        break;
        case "Припять":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.pripyat
            }))
        break;
        case "Микашевичский канал":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.mikashevichskiCanal
            }))
        break;
        case "Горынь":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.gorin
            }))
        break;
        case "Западная Двина":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.zapDvina
            }))
        break;
        case "Туровский затон":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.turovskiZaton
            }))
        break;
        case "Августовский канал":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.avgustovskiCanal
            }))
        break;
        case "Свислочь":
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                },
                sites: sites.svisloch
            }))
        break;
    }
}

    const [state, setState] = useState({
        noticeInfo: {
            river: "",
            site: "",
            date: "",
            cause1: false,
            cause2: false,
            cause3: false,
            content: ""
        },

        sites: []
    })

    const sendForm =  async (event) => {
        event.preventDefault();
        if (state.noticeInfo.river === "" || 
        state.noticeInfo.site === "" || 
        state.noticeInfo.date === "" || 
        (state.noticeInfo.cause1 === false && state.noticeInfo.cause2 === false && state.noticeInfo.cause3 === false) ||
        state.noticeInfo.content === "" ) {
            handleOpenMessage("Заполнены не все поля формы!", "error" );
        } else {
            changeData(state.noticeInfo, props.id);
            await setDoc(doc(db, 'notices', props.id), state.noticeInfo);
            setAnchorEl(null);
            props.handleOpenMessage("Уведомление успешно изменено!");
        }
    }

    const resetForm = (event) => {
        event.preventDefault();
        setState({
            noticeInfo: {
                river: "",
                site: "",
                date: "",
                cause1: false,
                cause2: false,
                cause3: false,
                content: ""
            },
    
            sites: []
        })
    }

    const handleChangeCheckBox = (event) => {
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                [event.target.name]: event.target.checked,
                },
              sites: [...prevState.sites]
          }))
    }

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name
        setState((prevState) => ({
            noticeInfo: {
                ...prevState.noticeInfo,
                [name]: value,
              },

              sites: [...prevState.sites]
          }))
          if (name === "river") {
            setState((prevState) => ({
                noticeInfo: {
                    ...prevState.noticeInfo,
                    site: '',
                  },
    
                  sites: [...prevState.sites]
    
              }))
              setSites(value);
          }

    }

  return (
    <div>
      <GridActionsCellItem
            aria-describedby={props.id}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleClick}
            color="inherit"
        />
      <Dialog maxWidth={'md'} onClose={handleClose} open={open}>  
            <DialogTitle sx={{ m: 0, p: 2 }}>
                Изменение уведомления
                <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
                </IconButton>

            </DialogTitle>
       
        <form className={Styles.form} onSubmit={sendForm}>
            <TextField
                sx={{width: 400}}
                name="river"
                select
                label="Река"
                value={state.noticeInfo.river}
                onChange={handleChange}
                variant="standard"
                
                >
                {rivers.map((river) => (
                    <MenuItem key={river} value={river}>
                        {river}
                    </MenuItem>
                ))}
            </TextField>
            <Box className={Styles.input}>
                <TextField
                    sx={{width: 800}}
                    name="site"
                    select
                    label="Участок реки"
                    value={state.noticeInfo.site}
                    onChange={handleChange}
                    variant="standard"
                    
                    >
                    {state.sites.map((site) => (
                        <MenuItem key={site} value={site}>
                            {site}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box className={Styles.input}>
                <TextField
                    sx={{width: 200}}
                    name="date"
                    type={'datetime-local'}
                    value={state.noticeInfo.date}
                    onChange={handleChange}
                    variant="standard"   
                    />
            </Box>

            <FormControl sx={{ mt: 3, ml: 1, width: 240}} component="fieldset" variant="standard">
                <FormLabel sx={{ mb: 1 }} component="legend">Причина уведомления</FormLabel>
                <FormGroup >
                <FormControlLabel sx={{ mb: 1 }}
                    control={
                    <Checkbox checked={state.noticeInfo.cause1} onChange={handleChangeCheckBox} name="cause1" />
                    }
                    label="Изменение СНО"
                />
                <FormControlLabel sx={{ mb: 1 }}
                    control={
                    <Checkbox checked={state.noticeInfo.cause2} onChange={handleChangeCheckBox} name="cause2" />
                    }
                    label="Метеологические условия"
                />
                <FormControlLabel sx={{ mb: 1 }}
                    control={
                    <Checkbox checked={state.noticeInfo.cause3} onChange={handleChangeCheckBox} name="cause3" />
                    }
                    label="Опасно для жизни"
                />
                </FormGroup>
            </FormControl>

            <Box className={Styles.input}>
            <TextField
                sx={{ width: 400 }}
                name="content"
                label="Содержание"
                value={state.noticeInfo.content}
                onChange={handleChange}
                multiline
                rows={4}  
            />
            </Box>

            <Box className={Style.buttonsConteiner}>
            <button 
                className={Styles.button}
                type='submit'
            >
                Изменить
            </button>

            <button 
                className={Styles.button}
                onClick={resetForm}
            >
                Очистить
            </button>
            </Box>                        
        </form>
      
        </Dialog>
    </div>
  );
}