import * as model from 'common/models';

export const mapFromApiToVm = (
  character: model.CharacterApi
): model.CharacterVm => ({
  id: character.id,
  name: character.name,
  species: character.species,
  gender: character.gender,
  location: character.location,
  origin: character.origin,
  image: character.image,
  episode: character.episode,
});
