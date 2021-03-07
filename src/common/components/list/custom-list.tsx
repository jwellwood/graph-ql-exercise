import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

interface Props {
  data: any;
}

const CustomList: React.FC<Props> = ({ data }) => {
  return (
    <List dense aria-label="character-details">
      {data.map((item) => (
        <ListItem key={item.primary}>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
};

export default CustomList;
