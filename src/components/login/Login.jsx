/* eslint-disable default-case */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./style.module.css";
import { api } from "../../axiosConfig";
import Typography from "@mui/material/Typography";
import * as adminInfo from "../admin/adminInfo";
import * as berezinskoeInfo from "../admin/berezinskoeInfo";
import * as bugskoeInfo from "../admin/bugskoeInfo";
import * as dvinskoeInfo from "../admin/dvinskoeInfo";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    let username = form.username.value;
    let password = form.password.value;

    try {
      let res = await api.post("/auth/login", { username, password });
      if (res.data.role === "Администратор") {
        setAuth({ ...res.data, info: adminInfo, rolePath: "main" });
        navigate("/admin-main/informationTab/levels/levelsGp");
      } else if (res.data.role === "Клиент") {
        setAuth({ ...res.data });
        navigate("/client/sib");
      } else if (res.data.role === "Путевик") {
        setAuth({ ...res.data });
        navigate("/path-information/dnepr");
      } else {
        switch (res.data.organisation) {
          case 'РУ ЭСП "Днепро-Бугский водный путь"':
            setAuth({ ...res.data, info: bugskoeInfo, rolePath: "bugskoe" });
            navigate("/admin-bugskoe/informationTab/levels/levelsGp");
            break;
          case 'РУ Днепро-Двинское предприятие водных путей "Белводпуть"':
            setAuth({ ...res.data, info: dvinskoeInfo, rolePath: "dvinskoe" });
            navigate("/admin-dvinskoe/informationTab/levels/levelsGp");
            break;
          case "РУ Днепро-Березинское предприятие водных путей":
            setAuth({
              ...res.data,
              info: berezinskoeInfo,
              rolePath: "berezinskoe",
            });
            navigate("/admin-berezinskoe/informationTab/levels/levelsGp");
            break;
        }
      }
    } catch (err) {
      setMessage(err.response.data);
    }
  };

  return (
    <Box className={styles.container}>
      <Box
        component="img"
        sx={{
          width: 60,
          color: "black",
        }}
        alt="Иконка якоря"
        src="/yakor.png"
      />

      <Typography sx={{ mt: 2, mb: 1 }}>Войдите в систему или</Typography>

      <Link to={"/registration"} className={styles.link}>
        зарегистрируйтесь
      </Link>

      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          sx={{ pb: 1 }}
          required
          label="Имя пользователя или e-mail"
          className={styles.input}
          name="username"
        />
        <TextField
          sx={{ pb: 1 }}
          required
          label="Пароль"
          type="password"
          className={styles.input}
          name="password"
        />
        <Typography color="red" sx={{ mb: 1 }}>
          {message}
        </Typography>
        <Button variant="contained" type="submit" className={styles.button}>
          Войти
        </Button>
      </form>
    </Box>
  );
}
