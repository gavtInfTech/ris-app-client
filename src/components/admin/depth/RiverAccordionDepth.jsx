import React, { useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Depth from "./Depth";
import { AuthContext } from "../../../contexts/AuthContext";

export default function RiverAccordionDepth(props) {
  const { auth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const depths = props.sites.map((site) => {
    return <Depth river={props.river} site={site.name} />;
  });

  return (
    <Accordion
      sx={{
        backgroundColor: "#ebf4fc",
        mb: "5px",
        boxShadow: "0px 1px 1px #b4b8c2",
        maxWidth: 1250
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{}}
        onClick={handleClick}
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>{props.river}</Typography>
      </AccordionSummary>
      <AccordionDetails>{isOpen && depths}</AccordionDetails>
    </Accordion>
  );
}
