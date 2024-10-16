import { Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { React, useState, useEffect } from "react";
import { api } from "../../axiosConfig";
import { AuthContext } from "../../contexts/AuthContext";
export default function DownloadTable(props) {
  const generatePDF = props.generatePDF;
  const [loading, setLoading] = useState(false);
  const [startPeriod, setStartPeriod] = useState();
  const [endPeriod, setEndPeriod] = useState();
  const { auth } = useContext(AuthContext);
  const sites = props.site;
  const generatePdfFile = async () => {
    try {
      const resLevelsGp = await api.get(`/${props.way}/getAllByPeriodDates`, {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      resLevelsGp.data.forEach((item) => {
        item.date = new Date(item.date);
      });
      let levelsGpDataByPeriod = resLevelsGp.data;
      console.log("LEVELS DATE", levelsGpDataByPeriod);
      generatePDF(
        new Date(startPeriod),
        new Date(endPeriod),
        levelsGpDataByPeriod,
        auth.info,
        sites
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeStartPeriod = (event) => {
    setStartPeriod(event.target.value);
  };

  const handleChangeEndPeriod = (event) => {
    setEndPeriod(event.target.value);
  };

  return (
    <Typography sx={{ fontSize: 18 }}>
      <Button
        variant="contained"
        type="submit"
        sx={{ m: 1, width: "200px" }}
        onClick={generatePdfFile}
      >
        Скачать за период
      </Button>
      <TextField
        name="startPeriod"
        type={"date"}
        value={startPeriod}
        onChange={handleChangeStartPeriod}
        variant="standard"
        sx={{ m: 1 }}
      />
      По <span> </span>
      <TextField
        name="endPeriod"
        type={"date"}
        value={endPeriod}
        onChange={handleChangeEndPeriod}
        variant="standard"
        sx={{ m: 1 }}
      />
    </Typography>
  );
}
