import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { api } from "../../../axiosConfig";
import { siLK } from "@mui/material/locale";
import Spravka from "./Spravka";

export default function RiverAccordionSpravka(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <Accordion
      sx={{
        backgroundColor: "#ebf4fc",
        mb: "5px",
        boxShadow: "0px 1px 1px #b4b8c2",
        maxWidth: "100%"
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{}}
        onClick={handleClick}
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>{props.organisation}</Typography>
      </AccordionSummary>
      <AccordionDetails>{isOpen && <Spravka organisation = {props.organisation}></Spravka>}</AccordionDetails>
    </Accordion>
  );
}
