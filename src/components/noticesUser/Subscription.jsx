import { React, useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import Style from "./style.module.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Styles from "./style.module.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { randomId } from "@mui/x-data-grid-generator";

const rivers = [
  "Днепр",
  "Березина",
  "Сож",
  "Неман",
  "Мухавец",
  "Днепро - Бугский канал",
  "Пина",
  "верхний участок реки Припять",
  "река Припять",
  "Микашевичский канал",
  "Горынь",
  "Западная Двина",
  "Туровский затон",
  "Августовский канал",
  "Свислочь",
];

export default function Subscription(props) {
  const [state, setState] = useState({
    email: "",
    river: "",
    levels: false,
    notices: false,
    gabs: false,
    heights: false,
    dislocations: false,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value;
    if (name === "river" || name === "email") {
      value = event.target.value;
    } else value = event.target.checked;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendForm = async (event) => {
    event.preventDefault();
    if (
      state.email === "" ||
      state.river === "" ||
      (state.levels === false &&
        state.notices === false &&
        state.gabs === false &&
        state.heights === false &&
        state.dislocations === false)
    ) {
      props.handleOpenMessage("Заполнены не все поля формы!", "error");
    } else {
      props.handleOpenMessage("Подписка успешно оформлена");
      resetForm();
    }
  };

  const resetForm = (event) => {
    if (event) {
      event.preventDefault();
    }
    setState({
      email: "",
      river: "",
      levels: false,
      notices: false,
      gabs: false,
      heights: false,
      dislocations: false,
    });
  };

  return (
    <div>
      <Accordion sx={{ width: 840, mt: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ width: 840, color: "white", backgroundColor: "#437db6", mt: 1 }}
        >
          <Typography
            sx={{ ml: "20px", fontSize: "17px", textAlign: "center" }}
          >
            Подписка на уведомления
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 780, backgroundColor: "white" }}>
            <form className={Styles.form} onSubmit={sendForm}>
              <TextField
                sx={{ width: 300 }}
                name="email"
                label="e-mail"
                value={state.email}
                onChange={handleChange}
                email
              />

              <TextField
                sx={{ width: 300 }}
                name="river"
                select
                label="Река"
                value={state.river}
                onChange={handleChange}
                variant="standard"
              >
                {rivers.map((river) => (
                  <MenuItem key={river} value={river}>
                    {river}
                  </MenuItem>
                ))}
              </TextField>

              <FormControl
                sx={{ mt: 3, ml: 1, width: 240 }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel sx={{ mb: 1 }} component="legend">
                  Тип информации
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.levels}
                        onChange={handleChange}
                        name="levels"
                      />
                    }
                    label="Уровни воды"
                  />
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.notices}
                        onChange={handleChange}
                        name="notices"
                      />
                    }
                    label="Извещения"
                  />
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.gabs}
                        onChange={handleChange}
                        name="gabs"
                      />
                    }
                    label="Габариты судового хода"
                  />
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.heights}
                        onChange={handleChange}
                        name="heights"
                      />
                    }
                    label="Габариты подмостовых переходов"
                  />
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.dislocations}
                        onChange={handleChange}
                        name="dislocations"
                      />
                    }
                    label="Дислокация тех. флота"
                  />
                </FormGroup>
              </FormControl>

              <button className={Style.button2} onClick={sendForm}>
                Подписаться
              </button>
            </form>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
