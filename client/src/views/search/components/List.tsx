import {
  ExpandLess,
  ExpandMore,
  MoveToInbox,
  StarBorder,
} from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

type ListFilterTypes = {
  title: string;
  elements: string[];
};

export const ListFilter = ({ title, elements }: ListFilterTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <List component="div" disablePadding>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <MoveToInbox />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      ;
    </List>
  );
};
