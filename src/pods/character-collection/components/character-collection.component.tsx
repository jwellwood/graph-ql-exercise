import * as React from 'react';
import { CharacterVm } from 'common/models';
import { CharacterCard } from './character-card.component';
import * as classes from '../styles/character-collection.styles';
import { SearchBar } from 'pods/character-collection/components/search-bar.component';
import CustomPagination from 'pods/character-collection/components/pagination.component';

interface Props {
  characterCollection: CharacterVm[];
  onView: (id: number) => void;
  input: { search: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSearch: () => void;
  pageInfo: any;
  onChangePage: (e, page: number) => void;
  page: number;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characterCollection,
  onView,
  input,
  onChange,
  onSearch,
  onClear,
  pageInfo,
  onChangePage,
  page,
}) => {
  return (
    <div className={classes.root}>
      {pageInfo ? (
        <CustomPagination
          pageInfo={pageInfo}
          onChangePage={onChangePage}
          page={page}
        />
      ) : null}
      <SearchBar
        input={input}
        onChange={onChange}
        onSearch={onSearch}
        onClear={onClear}
      />

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onView={onView} />
          </li>
        ))}
      </ul>
    </div>
  );
};
