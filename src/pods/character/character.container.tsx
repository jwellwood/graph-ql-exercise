import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from 'core/api';
import * as gql from 'core/graphql';
import { createEmptyCharacter, CharacterVm } from 'common/models';
import { mapCharacterFromApiToVm } from 'common/mappers/character.mappers';
import { CharacterComponent } from './character.component';
import { Comment } from 'common/models';
import { linkRoutes } from 'core/router';

export const CharacterContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );

  const [comments, setComments] = React.useState<Comment[]>([]);

  const handleLoadCharacter = async () => {
    const apiCharacter = await gql.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleLoadComments = async () => {
    const apiComments = await api.getComments(id);
    setComments(apiComments);
  };

  const handleAddCommentClick = async () => {
    history.push(linkRoutes.editComment(id));
  };

  const handleViewEpisodes = async () => {
    history.push(linkRoutes.viewEpisodes(id));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
      handleLoadComments();
    }
  }, []);

  return (
    <CharacterComponent
      character={character}
      comments={comments}
      onAddComment={handleAddCommentClick}
      handleViewEpisodes={handleViewEpisodes}
    />
  );
};
