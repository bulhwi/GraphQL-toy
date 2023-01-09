import {ApolloClient, from, HttpLink, NormalizedCacheObject} from '@apollo/client';
import { createApolloCache } from "./createApolloCache";
import {onError} from "@apollo/client/link/error";
import {setContext} from "@apollo/client/link/context";

/**
 * http uri
 */
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

/**
 * error log, network error log
 */
const errorLink = onError(({graphQLErrors, networkError, operation}) => {
  if(graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) => {
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: -> ${operation.operationName}
        Message: ${message}, Query: ${path}, Location: ${JSON.stringify(locations)}`,
      )
    })
  }

  if(networkError) {
    // eslint-disable-next-line no-console
    console.log(`[networkError]: -> ${operation.operationName} Message: ${networkError.message}`);
  }
});

/**
 * header에 인증 토큰 세팅
 */
const authLink = setContext((request, prevContext) => {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      ...prevContext.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    }
  }
});

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    cache: createApolloCache(),
    link: from([authLink, errorLink, httpLink]),
  });