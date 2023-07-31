import { React, useState } from "react";
import NoticesUser from "./NoticesUser";
import { Link } from "react-router-dom";
import Style from "./style.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

export default function NoticesMainPage() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleCloseMessage = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOpenMessage = (message, severity) => {
    setOpen(true);
    setMessage(message);
    setSeverity(severity);
  };

  return (
    <div className={Style.container}>
      <div className={Style.item1}>
        <button className={Style.btn}>
          <Link to={"/levelsMenu"}>
            <img src="/images/levelGp.png" alt="mlevel"></img>
            <br />Уровни воды
          </Link>
        </button>
      </div>

      <div className={Style.item2}>
        <button className={Style.btn}>
          <Link to={"/sib"}>
            <img src="/images/sib.png" alt="meteo"></img>
            <br/>Сводный
            <br/>
            инфрмационный
            <br/>
            бюллетень
          </Link>
        </button>
      </div>

      <div className={Style.item3}>
        <NoticesUser handleOpenMessage={handleOpenMessage} />
      </div>
      
      <div className={Style.item4}>
        <button className={Style.btn}>
          <Link to={"/bridgeGabs"}>
            <img src="/images/bridgeGab.png" alt="gabmost"></img>
            <br></br>Подмостовые<br></br>
            габариты
          </Link>
        </button>
      </div>

      <div className={Style.item5}>
        <button className={Style.btn}>
          <Link to={"/limit"}>
            <img src="/images/depth.png" alt="limit"></img>
            <br></br>Глубины<br></br>
            на лимитирующих <br></br>
            перекатах
          </Link>
        </button>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleCloseMessage}
      >
        <div>
          <Alert onClose={handleCloseMessage} severity={severity}>
            {message}
          </Alert>
        </div>
      </Snackbar>
    </div>
  );
}
