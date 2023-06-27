/* eslint-disable no-undef */
import {React, useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Style from './style.module.css';
import { Typography } from '@mui/material';

export default function Graph(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  google.charts.load('current', {packages: ['corechart'], 'language': 'ru'}); 
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      [
        { type: "date" },
        "Уровень воды над ПГ",
      ], ...props.data
    ]);
  
    var options = {
      title: "Гидропост: " + props.row.hydropost + "; Река: " + props.row.river,
      curveType: 'function',
      legend: { position: 'bottom' }
    };
  
    var chart = new google.visualization.LineChart(document.getElementById(props.row.id));
  
    chart.draw(data, options);
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (props.data.length === 0) return (<div>—</div>)

  return (
    <div>
      <Button aria-describedby={props.id} onClick={handleClick}>
      Показать
      </Button>
      <Popover
        id={props.id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <Typography className={Style.graph} style={{width: '40vw', height: '40vh'}}>
          <div id={props.row.id} style={{width: '40vw', height: '40vh'}}></div>
      </Typography>
      
      </Popover>
    </div>
  );
}