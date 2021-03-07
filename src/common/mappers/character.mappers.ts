import * as model from 'common/models';
import { Character } from 'common/models';

export const mapCharacterFromApiToVm = (
  character: model.CharacterApi
): model.CharacterVm => ({
  ...character,
  id: character.id,
  name: character.name,
});

export const mapCharacterFromVmToApi = (
  character: model.CharacterVm
): model.CharacterApi =>
  (({
    ...character,
    id: character.id,
    name: character.name,
  } as Character) as model.CharacterApi);
