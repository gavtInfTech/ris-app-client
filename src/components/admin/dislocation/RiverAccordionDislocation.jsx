import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dislocation from "./Dislocation";
import { api } from "../../../axiosConfig";
import { siLK } from "@mui/material/locale";

export default function RiverAccordionDislocation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dislocation = props.ships.map((ship, index) => {
    return <Dislocation key={index} ship={ship} organisation ={props.organisation} />;
  });
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
      <AccordionDetails>{isOpen && dislocation}</AccordionDetails>
    </Accordion>
  );
}
