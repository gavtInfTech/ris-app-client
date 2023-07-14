import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import Style from './style.module.css'

export default function NoticesList(props) {

    return (
        <div className={Style.conteiner}>
            { props.data.map((doc) => (
                <Accordion sx={{ mt: 1 }} key={doc.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{}}
                    >
                        <Typography sx={{ ml: '20px', fontSize: '17px' }}> ({doc.date.toLocaleString().slice(0, 17)}) – {doc.site}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{}}>
                            <Typography className={Style.typography}>
                                <p className={Style.p}>Река:</p>
                                {doc.river}
                            </Typography>
                            <Typography className={Style.typography}>
                                <p className={Style.p}>Причины:</p>
                                {doc.cause}
                            </Typography>
                            <Typography className={Style.typography}>
                                <p className={Style.p}>Содержание:</p>
                                {doc.content}
                            </Typography>

                        </Box>
                    </AccordionDetails>
            </Accordion>
            ))}
        </div>
    )
}