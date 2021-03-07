import { Episode } from './episode.model';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: Episode[];
  url: string;
  created: string;
};

interface ILocation {
  name: string;
  url: string;
}

export interface CharacterApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: Episode[];
  url: string;
  created: string;
}

export interface CharacterVm {
  id: number;
  image: string;
  name: string;
  species: string;
  gender: string;
  location: ILocation;
  origin: ILocation;
  episode: Episode[];
}

export const createEmptyCharacter = (): CharacterApi => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
  image: '',
  episode: [],
  url: '',
  created: '',
});
