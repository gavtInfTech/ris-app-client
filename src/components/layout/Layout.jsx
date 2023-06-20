import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile';
import styles from './layout.module.css';
import classNames from 'classnames';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { MessageContext } from "../../contexts/MessageContext";
import { useContext } from 'react';

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

export default function Layout() {
  
  const {message, setMessage} = useContext(MessageContext);

  const handleCloseMessage = (reason) => {
    if (reason === 'clickaway') {
        return;
        }
    
    setMessage((prevState) => ({
        ...prevState,
        open: false
      }));
}

  return (
    <div className={styles.conteiner}>
      <header className={styles.header}>
          <div className={styles.header_section}>
            <Avatar  sx={{mr: 1, marginLeft: 2 }} src="/yakor.png" />
            <Link className={classNames(styles.header_main_item)} to={'/'}>РИАС РБ</Link>
            <Link className={classNames(styles.link, styles.header_item)} to={'/notices'}>Для судоводителей</Link>
            {/* <Link className={classNames(styles.link, styles.header_item)} to={'/gabarit'}>Сроки навигации</Link> */}
            <Link className={classNames(styles.link, styles.header_item)} to={'/infmenu'}>Инфраструктура ВВП</Link>
          </div>
          <div className={styles.header_section}>
            <Profile />
          </div>
      </header>
      
      <main className={styles.main}>
          <Outlet />
      </main>

      <footer className={styles.footer}>
        Администрация водного транспорта
      </footer>

      <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={message.open} autoHideDuration={5000} onClose={handleCloseMessage}>
            <div>
                <Alert onClose={handleCloseMessage} severity={message.severity}>
                    {message.messageText}
                </Alert>
            </div>
        </Snackbar>

    </div>
  );
}