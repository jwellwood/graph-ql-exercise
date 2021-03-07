import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './components/character-collection.component';

export const CharacterCollectionContainer: React.FC = () => {
  const history = useHistory();
  const [input, setInput] = useState({ search: '' });
  const [page, setPage] = useState(1);
  const {
    characterCollection,
    loadCharacterCollection,
    pageInfo,
  } = useCharacterCollection();
  React.useEffect(() => {
    loadCharacterCollection(input.search);
  }, []);

  const onChange = (e) => {
    const value = e.target.value;
    setInput({ search: value });
  };

  const onSearch = () => {
    loadCharacterCollection(input.search);
  };

  const onClear = () => {
    setInput({ search: '' });
    loadCharacterCollection();
  };

  const onChangePage = (e, page: number) => {
    setPage(page);
    loadCharacterCollection(input.search, page);
  };

  const handleViewCharacter = (id: number) => {
    history.push(linkRoutes.viewCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onView={handleViewCharacter}
      input={input}
      onChange={onChange}
      onClear={onClear}
      onSearch={onSearch}
      pageInfo={pageInfo}
      onChangePage={onChangePage}
      page={page}
    />
  );
};
