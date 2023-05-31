import React, {  useState, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Depth from './Depth';
import { AuthContext } from "../../../contexts/AuthContext";

    const getSites = (river, siteGroups) => {
      // eslint-disable-next-line default-case
      switch (river) {
        case "Днепр":
            return siteGroups.dnepr;
        case "Березина":
          return siteGroups.berezina;
        case "Сож":
          return siteGroups.soj;
        case "Неман":
          return siteGroups.neman;
        case "Мухавец":
          return siteGroups.muhavets;
        case "Днепро-Бугский канал":
          return siteGroups.dnepBug;
        case "Пина":
          return siteGroups.pina;
        case "Верхний участок реки Припять":
          return siteGroups.upperPripyat;
        case "Припять":
            return siteGroups.pripyat;
        case "Микашевичский канал":
            return siteGroups.mikashevichskiCanal;
        case "Горынь":
            return siteGroups.gorin;
        case "Западная Двина":
            return siteGroups.zapDvina;
        case "Туровский затон":
            return siteGroups.turovskiZaton;
        case "Августовский канал":
            return siteGroups.avgustovskiCanal;
        case "Свислочь":
            return siteGroups.svisloch;
      }
    }

export default function RiverAccordionDepth(props) {

  const {auth} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }  

  const sites = getSites(props.river, auth.info.siteGroups);

  const depths = sites.map(site => {
    return (
      <Depth river={props.river} site={site} />
    );
  });

  return (
    <Accordion sx={{ width: 1260, backgroundColor: '#ebf4fc', mb: "5px", boxShadow: "0px 1px 1px #b4b8c2" }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ width: 1250 }}
            onClick={handleClick}
        >
            <Typography sx={{ ml: '20px', fontSize: 17 }}>{props.river}</Typography>
        </AccordionSummary>
          <AccordionDetails>
        
         { isOpen && depths}
      
         
          </AccordionDetails>
          </Accordion>
  );
}