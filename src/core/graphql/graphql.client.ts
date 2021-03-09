import { GraphQLClient } from 'graphql-request';
import { apiUrl } from 'common/constants';

export const graphQLClient = new GraphQLClient(apiUrl);
