import { useState, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import LevelsGu from './LevelsGu';
import { AuthContext } from "../../../contexts/AuthContext";

    const getHydronodes = (river, hydronodeGroups) => {
      // eslint-disable-next-line default-case
      switch (river) {
        case "Припять":
            return hydronodeGroups.pripiat;
        case "Пина":
            return hydronodeGroups.pina;
        case "ДБК":
            return hydronodeGroups.dbk;
        case "Мухавец":
            return hydronodeGroups.muhavets;
        case "Западная Двина":
            return hydronodeGroups.zapDvina;
        case "Неман":
            return hydronodeGroups.neman;
        case "Августовский канал":
            return hydronodeGroups.avgCanal;
        }
    }

export default function RiverAccordion(props) {

    const {auth} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    }

  const hydronodes = getHydronodes(props.river, auth.info.hydronodeGroups);

  const levels = hydronodes.map(hydronode => {
    return (<LevelsGu river = {props.river} hydronode = {hydronode} />)
  });

  return (
    <Accordion sx={{ width: 810, backgroundColor: '#ebf4fc', mb: "5px", boxShadow: "0px 1px 1px #b4b8c2" }} boxShadow={5}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ width: 800 }}
            onClick={handleClick}
        >
            <Typography sx={{ ml: '20px', fontSize: 17 }}>{props.river}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Box>
            {isOpen && levels}
          </Box>
           
        </AccordionDetails>
          </Accordion>
  );
}