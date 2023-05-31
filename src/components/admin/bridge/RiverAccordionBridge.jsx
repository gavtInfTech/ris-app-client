import {React, useState, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import Bridge from './Bridge';
import { AuthContext } from "../../../contexts/AuthContext";

const getBridges = (river, bridgeGroups) => {
  // eslint-disable-next-line default-case
  switch (river) {
    case "Днепр":
      return bridgeGroups.dnepr;
    case "Березина":
      return bridgeGroups.berezina;
    case "Сож":
      return bridgeGroups.soj;
    case "Неман":
      return bridgeGroups.neman;
    case "Августовский канал":
      return bridgeGroups.avgCanal;
    case "ДБК":
      return bridgeGroups.dbk;
    case "Припять":
      return bridgeGroups.pripyat;
    case "Западная Двина":
      return bridgeGroups.zapDvina;
  }
}

export default function RiverAccordion(props) {

  const {auth} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }

    const bridges = getBridges(props.river, auth.info.bridgeGroups);

    const heights = bridges.map(bridge => {
      return (<Bridge key= {bridge} river = {props.river} bridge = {bridge} />)
    });

  return (
    <Accordion sx={{ width: 615, backgroundColor: '#ebf4fc', mb: "5px", boxShadow: "0px 1px 1px #b4b8c2" }} boxShadow={5}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ width: 605 }}
            onClick={handleClick}
        >
            <Typography sx={{ ml: '20px', fontSize: 17 }}>{props.river}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Box>
            {isOpen && heights}
          </Box>
           
        </AccordionDetails>
          </Accordion>
  );
}