import { React, useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import Bridge from "./Bridge.jsx";
import { AuthContext } from "../../../contexts/AuthContext.jsx";

const getBridges = (river, bridgeGroups) => {
  const extractNames = (group) => group.map((bridge) => bridge.name);

  // eslint-disable-next-line default-case
  switch (river) {
    case "Днепр":
      return extractNames(bridgeGroups.dnepr);
    case "Березина":
      return extractNames(bridgeGroups.berezina);
    case "Сож":
      return extractNames(bridgeGroups.soj);
    case "Неман":
      return extractNames(bridgeGroups.neman);
    case "Августовский канал":
      return extractNames(bridgeGroups.avgCanal);
    case "Днепро-Бугский канал":
      return extractNames(bridgeGroups.dbk);
    case "Припять":
      return extractNames(bridgeGroups.pripyat);
    case "Пина":
      return extractNames(bridgeGroups.pina);
    case "Верхний участок реки Припять":
      return extractNames(bridgeGroups.vpripyat);
    case "Западная Двина":
      return extractNames(bridgeGroups.zapDvina);
    case "Мухавец":
      return extractNames(bridgeGroups.muhavets);
  }
};

export default function RiverAccordion(props) {
  const { auth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const bridges = getBridges(props.river, auth.info.bridgeGroups);

  const heights = bridges.map((bridge) => {
    return <Bridge key={bridge} river={props.river} bridge={bridge} />;
  });

  return (
    <Accordion
      sx={{
        maxWidth: 800,
        backgroundColor: "#ebf4fc",
        mb: "5px",
        boxShadow: "0px 1px 1px #b4b8c2",
      }}
      boxShadow={5}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={handleClick}
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>{props.river}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>{isOpen && heights}</Box>
      </AccordionDetails>
    </Accordion>
  );
}
