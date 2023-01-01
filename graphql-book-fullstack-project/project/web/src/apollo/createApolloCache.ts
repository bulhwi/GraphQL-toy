import { InMemoryCache } from '@apollo/client';
import { PaginatedFilms } from "../generated/graphql";

export const createApolloCache = (): InMemoryCache => {
  return new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          films: {
            keyArgs: false,
            merge: (
              existing: PaginatedFilms | undefined, // 기존 데이터
              incoming: PaginatedFilms // 새롭게 응답받은 데이터
            ): PaginatedFilms => {
              return {
                cursor: incoming.cursor,
                films: existing ? [...existing.films, ...incoming.films] : incoming.films
              };
            },
          },
        },
      },
    },
  });
};