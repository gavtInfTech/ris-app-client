import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import styles from "./style.module.css";
import { api } from "../../axiosConfig";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MessageContext } from '../../contexts/MessageContext';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export default function Login() {

  const {setMessage} = useContext(MessageContext);
  const [state, setState] = useState({
    fio: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [errState, setErrState] = useState({
    fio: false,
    email: false,
    password: false,
    passwordRepeat: false,
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    setErrState((prevState) => ({
        ...prevState,
        [name]: false,
      }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let flag = false;

    if (state.fio.length === 0) {
        setErrState((prevState) => ({
        ...prevState,
        fio: true,
      }));
      flag = true;
    }

    if (state.email.length === 0 || !EMAIL_REGEXP.test(state.email)) {
        setErrState((prevState) => ({
        ...prevState,
        email: true,
      }));
      flag = true;
    }

    if (state.password.length < 6 || state.password.length > 32) {
        setErrState((prevState) => ({
        ...prevState,
        password: true,
      }));
      flag = true;
    }

    if (state.passwordRepeat.length < 6 || state.passwordRepeat.length > 32 || state.password !== state.passwordRepeat) {
        setErrState((prevState) => ({
        ...prevState,
        passwordRepeat: true,
      }));
      flag = true;
    }

    if (flag === true) return;
    try {
    //   let res = await api.post("/auth/login", { username, password });

      setMessage(() => ({
        open: true,
        messageText: "Пользователь успешно зарегистрирован!",
        severity: "success"
    }))
    } catch (err) {
      setMessage(() => ({
        open: true,
        messageText: err.response.data,
        severity: "error",
    }))
    }
  };

  return (
    <Box className={styles.containerReg}>
      <Box className={styles.containerForm}>
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Регистрация пользователя
        </Typography>

        <form
          className={styles.formReg}
          onSubmit={handleSubmit}
          sx={{ mt: 2, mb: 1 }}
        >
          <InputLabel>Полные ФИО пользователя*</InputLabel>
          <TextField
            name="fio"
            value={state.fio}
            className={styles.inputReg}
            variant="standard"
            onChange={handleChange}
            error={errState.fio}
            helperText={errState.fio && "Необходимо указать ФИО пользователя."}
          />

          <InputLabel>Адрес электронной почты*</InputLabel>
          <TextField
            name="email"
            value={state.email}
            className={styles.inputReg}
            variant="standard"
            onChange={handleChange}
            error={errState.email}
            helperText={errState.email && "Необходимо ввести корректный адрес электронной почты."}
          />

          <InputLabel>Пароль*</InputLabel>
          <TextField
            name="password"
            value={state.password}
            type="password"
            className={styles.inputReg}
            variant="standard"
            onChange={handleChange}
            error={errState.password}
            helperText={errState.password && "Пароль не может быть меньше 6 символов и не более 32."}
          />

          <InputLabel>Повторите пароль*</InputLabel>
          <TextField
            name="passwordRepeat"
            value={state.passwordRepeat}
            type="password"
            className={styles.inputReg}
            variant="standard"
            onChange={handleChange}
            error={errState.passwordRepeat}
            helperText={errState.passwordRepeat && "Пароли не совпадают."}
          />

          <Button
            variant="contained"
            type="submit"
            className={styles.buttonReg}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Box>
  );
}
