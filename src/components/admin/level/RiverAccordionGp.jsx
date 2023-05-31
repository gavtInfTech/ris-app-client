import { useState, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import LevelsGp from './LevelsGp';
import { AuthContext } from "../../../contexts/AuthContext";

    const getCities = (river, hydropostGroups) => {
      // eslint-disable-next-line default-case
      switch (river) {
            case "Днепр":
                return hydropostGroups.dnepr;
            case "Березина":
              return hydropostGroups.berezina;
            case "Сож":
              return hydropostGroups.soj;
            case "Припять":
              return hydropostGroups.pripiat;
            case "Горынь":
              return hydropostGroups.gorin;
            case "Зап. Двина":
              return hydropostGroups.dvina;
            case "Неман":
              return hydropostGroups.neman;
          }
    }

export default function RiverAccordion(props) {

  const {auth} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }

  const hydroposts = getCities(props.river, auth.info.hydropostGroups);

  const levels = hydroposts.map(hydropost => {
    return (<LevelsGp river = {props.river} hydropost = {hydropost} />)
  });

  return (
    <Accordion sx={{ width: 970, backgroundColor: '#ebf4fc', mb: "5px", boxShadow: "0px 1px 1px #b4b8c2" }} boxShadow={5}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ width: 960 }}
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