import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import styles from "./layout.module.css";
import Avatar from "@mui/material/Avatar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { MessageContext } from "../../contexts/MessageContext";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import WeatherComponent from "../weather/weather";

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

export default function Layout() {
  const { message, setMessage } = useContext(MessageContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showWeather, setShowWeather] = useState(false);

  const handleCloseMessage = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleWeatherClick = (event) => {
    event.preventDefault();
    setShowWeather(true);
  };

  const handleCloseWeather = () => {
    setShowWeather(false);
  };

  return (
    <div className={styles.conteiner}>
      <header className={styles.header}>
        <Box sx={{ display: { md: "none" } }}>
          <IconButton
            size="50"
            sx={{
              backgroundColor: "white",
              ml: 1,
              ":hover": {
                backgroundColor: "white",
              },
            }}
            onClick={handleOpenUserMenu}
          >
            <MenuIcon sx={{ color: "#34418f" }} />
          </IconButton>
        </Box>

        <Box className={styles.header_section}>
          <Avatar sx={{ mr: 1, ml: 1 }} src="/yakor3.png" />
          <Link
            className={styles.mainLink}
            to={"/"}
          >
              РИС РБ<Typography sx={{fontSize: 12, marginTop: 1}}>Речные информационные службы</Typography>
          </Link>
          <Link className={styles.link} to={"/sib"}>
            Сводный информационный бюллетень
          </Link>
          <Link className={styles.link} to={"/infmenu"}>
            Инфраструктура ВВП
          </Link>
          {/* Update link to trigger modal */}
          <Link className={styles.link} to={"#"} onClick={handleWeatherClick}>
            Погода
          </Link>
        </Box>
        <Box className={styles.header_section}>
          <Profile />
        </Box>

        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem sx={{ fontSize: 20, color: '#34418f', fontWeight: 'bold' }} onClick={handleCloseUserMenu}>
            <Link to={"/sib"}>
              Сводный информационный бюллетень
            </Link>
          </MenuItem>
          <MenuItem sx={{ fontSize: 20, color: '#34418f', fontWeight: 'bold' }} onClick={handleCloseUserMenu}>
            <Link to={"/infmenu"}>
              Инфраструктура ВВП
            </Link>
          </MenuItem>
          {/* Weather Link in Mobile Menu */}
          <MenuItem sx={{ fontSize: 20, color: '#34418f', fontWeight: 'bold' }} onClick={(e) => {handleWeatherClick(e); handleCloseUserMenu();}}>
            Погода
          </MenuItem>
        </Menu>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <a href="https://gawt.by/" target="_blank" rel="noopener noreferrer">Государственная администрация водного транспорта</a>
      </footer>

      <Snackbar
        sx={{mb: 10}}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={message.open}
        autoHideDuration={5000}
        onClose={handleCloseMessage}
      >
        <div>
          <Alert onClose={handleCloseMessage} severity={message.severity}>
            {message.messageText}
          </Alert>
        </div>
      </Snackbar>

      {/* WeatherComponent Modal */}
      <Modal
        open={showWeather}
        onClose={handleCloseWeather}
        aria-labelledby="weather-modal-title"
        aria-describedby="weather-modal-description"
      >
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 }, // Responsive width for mobile
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4, 
          borderRadius: 2, 
          display: "flex", 
          alignItems: "center",
          justifyContent: "center"
        }}>
          <WeatherComponent />
        </Box>
      </Modal>
    </div>
  );
}
