import { CharacterApi } from 'common/models';
import { graphQLClient } from 'core/graphql/graphql.client';

export const getCharacterCollection = (
  searchTerm = '',
  page = 1
): Promise<{ info: any; results: CharacterApi[] }> => {
  const query = `
    query {
      characters(page: ${+page}, filter: { name: "${searchTerm}" }) {
        info {
          pages
          count
        }
        results {
          id
          name
          image
        }
      }
    }
  `;
  return graphQLClient.request<any>(query).then((res) => res.characters);
};
