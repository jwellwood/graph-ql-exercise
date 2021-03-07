import React from 'react';
import { Button, Container } from '@material-ui/core';
import { CharacterVm } from 'common/models';
import { Comment } from 'common/models';
import BackButton from 'common/components/button/back-button';
import CustomCard from 'common/components/card';
import CommentListContainer from 'pods/comment/comment-list.container';
import CustomList from 'common/components/list/custom-list';
import { linkRoutes } from 'core/router';

interface Props {
  character: CharacterVm;
  comments: Comment[];
  onAddComment: () => void;
  handleViewEpisodes: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({
  character,
  onAddComment,
  handleViewEpisodes,
}) => {
  const { name, image, species, gender, location, origin, episode } = character;

  const data = [
    { primary: 'Species', secondary: species },
    { primary: 'Gender', secondary: gender },
    { primary: 'Location', secondary: location.name },
    { primary: 'Origin', secondary: origin.name },
    {
      primary: 'Appears in',
      secondary: `${episode.length} episode${episode.length === 1 ? '' : 's'}`,
    },
  ];

  return (
    <Container maxWidth="sm">
      <BackButton link={linkRoutes.characterCollection} />
      <CustomCard title={name} image={image}>
        <CustomList data={data} />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleViewEpisodes}
        >
          View List of Episodes
        </Button>
        <Button variant="contained" color="primary" onClick={onAddComment}>
          Add comment
        </Button>
        <CommentListContainer />
      </CustomCard>
    </Container>
  );
};
