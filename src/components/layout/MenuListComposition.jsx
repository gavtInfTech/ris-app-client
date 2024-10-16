/* eslint-disable default-case */
import { React, useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import styles from "./layout.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { api } from "../../axiosConfig";

export default function MenuListComposition() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExit = async () => {
    let res = await api.get("/auth/logout");
    setAuth({ role: null, organisation: null });
    navigate("/vvp");
  };

  function handleMenu() {
    setAnchorElUser(null);
    if (auth.role === "Администратор")
      navigate("/admin-main/informationTab/levels/levelsGp");
    else if (auth.role === "Клиент") navigate("/client/sib");
    else if (auth.role === "Путевик") navigate("/path-information/dnepr");
    else {
      switch (auth.organisation) {
        case 'РУЭСП "Днепро-Бугский водный путь"':
          navigate("/admin-bugskoe/informationTab/levels/levelsGp");
          break;
        case 'РУ Днепро-Двинское предприятие водных путей "Белводпуть"':
          navigate("/admin-dvinskoe/informationTab/levels/levelsGp");
          break;
        case "РУ Днепро-Березинское предприятие водных путей":
          navigate("/admin-berezinskoe/informationTab/levels/levelsGp");
          break;
        case 'Филиал \"Нижне-Припятский\" г. Мозырь':
          navigate("/admin-nijnepripyat/informationTab/levels/levelsGp");
          break;
        case 'Филиал \"Гродненский участок\" г. Гродно':
          navigate("/admin-grodnenskiy/informationTab/levels/levelsGp");
          break;
        case 'Филиал \"Витебскводтранс\" г. Витебск':
          navigate("/admin-vitebskvodtrans/informationTab/levels/levelsGp");
          break;
          case "Белорусское речное пароходство":
          navigate("/admin-parahodstvo/informationTab/spravkaorabote");
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
    <Box sx={{ flexGrow: 0, width: "100%" }}>
      <AccountCircleIcon
        sx={{ fontSize: 50 }}
        className={styles.avatarImg}
        onClick={handleOpenUserMenu}
      />

      <Menu
        sx={{ mt: "50px", width: "100%" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          sx={{ fontSize: 20, color: "#34418f", fontWeight: "bold" }}
          onClick={handleMenu}
        >
          Меню
        </MenuItem>
        <MenuItem
          sx={{ fontSize: 20, color: "#34418f", fontWeight: "bold" }}
          onClick={handleExit}
        >
          Выйти
        </MenuItem>
      </Menu>
    </Box>
  );
}
