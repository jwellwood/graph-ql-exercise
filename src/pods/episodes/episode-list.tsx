import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Episode } from 'common/models/episode.model';
import BackButton from 'common/components/button/back-button';

interface Props {
  episodes: Episode[];
  name: string;
}

const EpisodeList: React.FC<Props> = ({ episodes, name }) => {
  return (
    <>
      <BackButton />
      <h1>Episode List</h1>
      <h3>{name}</h3>
      <List dense>
        {episodes.map((episode: Episode) => (
          <ListItem key={episode.id}>
            <ListItemAvatar>
              <Avatar>{episode.id}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={episode.name}
              secondary={`${episode.episode} | ${episode.air_date}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default EpisodeList;
