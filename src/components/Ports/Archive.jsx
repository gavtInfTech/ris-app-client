import { React, useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Style from "./style.module.css";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

export default function Archive(props) {
      const [rowModesModel, setRowModesModel] = useState({});
  return (
    <div>
      <Accordion
        sx={{
          maxWidth: 1240,
          backgroundColor: "#ebf4fc",
          mb: "5px",
          boxShadow: "0px 1px 1px #b4b8c2",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ ml: "20px", fontSize: 17 }}>Архив судов</Typography>
        </AccordionSummary>
        <AccordionDetails className={Style.accordionDetails}>
          <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: "name", sort: "desc" }],
              },
            }}
            rows={props.rows}
            columns={props.columns}
            editMode="row"
            processRowUpdate={props.processRowUpdate}
            experimentalFeatures={{ newEditingApi: true }}
            getRowHeight={() => "auto"}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 1,
              },
              maxWidth: 1400,
              height: 600,
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
