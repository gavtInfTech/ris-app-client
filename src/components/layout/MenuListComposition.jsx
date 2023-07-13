/* eslint-disable default-case */
import {React, useContext, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import styles from './layout.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { api } from '../../axiosConfig';

export default function MenuListComposition() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const {auth, setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExit = async () => {
    let res = await api.get('/auth/logout');
    setAuth({role: null, organisation: null});
    navigate('/vvp');
  }

  function handleMenu() {

    if (auth.role === "Администратор") navigate('/admin-main/informationTab/levels/levelsGp');
      else {
        switch (auth.organisation) {
          case "РУ ЭСП \"Днепро-Бугский водный путь\"":
            navigate('/admin-bugskoe/informationTab/levels/levelsGp');
            break;
          case "РУ Днепро-Двинское предприятие водных путей \"Белводпуть\"":
            navigate('/admin-dvinskoe/informationTab/levels/levelsGp');
            break;
          case "РУ Днепро-Березинское предприятие водных путей":
            navigate('/admin-berezinskoe/informationTab/levels/levelsGp');
            break;
        }
      }
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0, width: '100%' }}>
     
      <AccountCircleIcon sx={{fontSize: 50 }} className={styles.avatarImg} onClick={handleOpenUserMenu} />
    
      <Menu 
        sx={{ mt: '50px', width: '100%' }}
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
          <MenuItem onClick={handleMenu}>Меню</MenuItem>
          <MenuItem onClick={handleExit}>Выйти</MenuItem>
      </Menu>
    </Box>
  );
}