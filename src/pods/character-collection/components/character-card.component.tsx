import * as React from 'react';
import { CharacterVm } from 'common/models';
import CustomCard from 'common/components/card';

interface Props {
  character: CharacterVm;
  onView: (id: number) => void;
}

export const CharacterCard: React.FC<Props> = (props) => {
  const { character, onView } = props;

  return (
    <CustomCard
      onClick={() => onView(character.id)}
      image={character.image}
      title={character.name}
    />
  );
};
