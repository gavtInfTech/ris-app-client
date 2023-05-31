import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { Table, TableContainer,TableRow,TableCell,TableHead,TableBody } from "@mui/material";

export default function AdditionalInfo(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  let info = props.info;

  return (
    <div>
      <Button aria-describedby={props.id} onClick={handleClick}>
      Показать
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 600 }}  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"><b>Дата последнего измерения уровня воды</b></TableCell>
                  <TableCell align="center"><b>Расстояние от устья, км</b></TableCell>
                  <TableCell align="center"><b>Площадь водосбора</b></TableCell>
                  <TableCell align="center"><b>Открыт</b></TableCell>
                  <TableCell align="center"><b>Закрыт</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center">{info.date}</TableCell>
                    <TableCell align="center">{info.distance}</TableCell>
                    <TableCell align="center">{info.square}</TableCell>
                    <TableCell align="center">{info.openDate}</TableCell>
                    <TableCell align="center">{info.closeDate}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
        </TableContainer>
      </Popover>
    </div>
  );
}