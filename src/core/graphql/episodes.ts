import { Episode } from 'common/models/episode.model';
import { graphQLClient } from './graphql.client';

export const getEpisodes = (ids): Promise<Episode[]> => {
  const query = `
    query {
      episodesByIds(ids: [${ids}]){
        id
        name
        episode
        air_date
      }
    }
  `;
  return graphQLClient.request(query).then((res) => res.episodesByIds);
};
