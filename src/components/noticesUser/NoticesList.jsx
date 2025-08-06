import { React, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import Style from "./style.module.css";
import Pagination from "@mui/material/Pagination";
import Icon from "@mui/material/Icon";

export default function NoticesList(props) {
  const { data } = props;
  const itemsPerPage = 6;

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
          <AccordionSummary
            sx={{ background: doc.importance ? "#FF9999" : "" }}
          >
            {doc.cause.includes("Изменение СНО") && (
              <Icon sx={{ width: "30px", height: "40px" }}>
                {" "}
                <img src="/images/sno.png" />
              </Icon>
            )}
            {(doc.cause.includes("Гидрометеорологические условия") ||
              doc.cause.includes("Гидрометеорологические условия")) && (
              <Icon sx={{ width: "40px", height: "40px" }}>
                {" "}
                <img src="/images/weatherNotices.png" />
              </Icon>
            )}
            {doc.cause.includes("Путевые работы") && (
              <Icon sx={{ width: "40px", height: "40px" }}>
                {" "}
                <img src="/images/put1.png" />
              </Icon>
            )}
             {doc.cause.includes("Ремонтные работы") && (
              <Icon sx={{ width: "40px", height: "40px" }}>
                {" "}
                <img src="/images/remrab.png" />
              </Icon>
            )}
              {doc.cause.includes("Мероприятие") && (
              <Icon sx={{ width: "40px", height: "40px" }}>
                {" "}
                <img src="/images/mer.png" />
              </Icon>
            )}
              {doc.cause.includes("Другое") && (
              <Icon sx={{ width: "40px", height: "40px" }}>
                {" "}
                <img src="/images/drygrab.png" />
              </Icon>
            )}
            <Typography
              sx={{
                ml: "20px",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
              }}
            >
              ({doc.date.toLocaleString().slice(0, 17)}) – р. {doc.river} –{" "}
              {doc.site} – Действует с:{" "}
              {new Date(doc.date_start).toLocaleDateString("ru-Ru")} по{" "}
              {new Date(doc.date_end).toLocaleDateString("ru-Ru")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={Style.typography}>
              <p className={Style.p}>Причина извещения: {doc.cause}</p>
            </Typography>
            <Typography className={Style.typography}>
              <p className={Style.p}>Тема извещения: {doc.theme || "-"}</p>
            </Typography>
            <Typography className={Style.typography}>
              <p className={Style.p}>Получатели: {doc.recipient || "-"}</p>
            </Typography>

            <Typography className={Style.typography}>
              <p className={Style.p}>Содержание: {doc.content}</p>
            </Typography>

            <Typography className={Style.typography}>
              <p className={Style.p}>
                Официальный источник: {doc.source || "-"}
              </p>
            </Typography>
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
