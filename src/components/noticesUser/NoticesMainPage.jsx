import { React, useState } from 'react';
import NoticesUser from './NoticesUser';
import SideMenu from './SideMenu';
import SideMenu2 from './SideMenu2';
import Style from './style.module.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
    return <MuiAlert elevation={1} variant="filled" {...props} />;
  }

export default function NoticesMainPage () {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const handleCloseMessage = (reason) => {
        if (reason === 'clickaway') {
            return;
            }
        
        setOpen(false);
    }

    const handleOpenMessage = (message, severity) => {
        setOpen(true);
        setMessage(message);
        setSeverity(severity);
    }

    return (
        <div className={Style.container}>
            <div className={Style.item1}>   
                <SideMenu />
            </div>
            <div className={Style.item2}>   
                <NoticesUser handleOpenMessage={handleOpenMessage} />
            </div>
            <div className={Style.item3}>   
                <SideMenu2 />
            </div>
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={open} autoHideDuration={5000} onClose={handleCloseMessage}>
                <div>
                    <Alert onClose={handleCloseMessage} severity={severity}>
                        {message}
                    </Alert>
                </div>
            </Snackbar>
        </div>
    )
}