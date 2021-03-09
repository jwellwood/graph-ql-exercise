import { Character } from 'common/models';
import { graphQLClient } from 'core/graphql/graphql.client';

export const getCharacter = (id): Promise<Character> => {
  const query = `
    query {
      character(id: ${id}) {
        id
        name
        image
        species
        gender
        location {
          name
        }
        origin {
          name
        }
        episode {
          id
          name
          episode
          air_date
        }
      }
    }
  `;
  return graphQLClient.request<any>(query).then((res) => res.character);
};
