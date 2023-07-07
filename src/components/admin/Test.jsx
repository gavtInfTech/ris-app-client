import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NestedList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Главный пункт" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Подпункт 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Подпункт 2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;