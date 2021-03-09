import React, { useState, useEffect } from 'react';
import { Character } from 'common/models';
import { Episode } from 'common/models/episode.model';
import { getEpisodes } from './api';
import { useParams } from 'react-router-dom';
import EpisodeList from './episode-list';
import { getCharacter } from 'pods/character/api';

const EpisodesContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getCharacter(id).then((res: Character) => {
      setName(res.name);
      if (res.episode) {
        const nums = res.episode.map((ep: Episode) => ep.id);
        const episodeArr = [];
        getEpisodes(nums).then((res) => {
          if (Array.isArray(res)) {
            res.forEach((ep) => episodeArr.push(ep));
          } else {
            episodeArr.push(res);
          }
          setEpisodes(episodeArr);
        });
      }
    });
  }, []);

  return episodes.length ? (
    <EpisodeList episodes={episodes} name={name} />
  ) : (
    <div>No data</div>
  );
};

export default EpisodesContainer;
