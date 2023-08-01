import { React, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import Style from "./style.module.css";
import Pagination from "@mui/material/Pagination";

export default function NoticesList(props) {
  const { data } = props;
  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {visibleData.map((doc) => (
        <Accordion sx={{ mt: 1 }} key={doc.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{}}>
            <Typography sx={{ ml: "20px", fontSize: "17px" }}>
              {" "}
              ({doc.date.toLocaleString().slice(0, 17)}) – {doc.site}
            </Typography>
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

        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          className={Style.pagination}
        />
    </div>
  );
}
