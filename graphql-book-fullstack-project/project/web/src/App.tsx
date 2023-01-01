import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Box, ChakraProvider, Text, theme } from '@chakra-ui/react';
import * as React from 'react';
import FilmList from "./components/film/FilmList";
import {createApolloClient} from "./apollo/createApolloClient";

const apolloClient = createApolloClient();

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box>
        <Text>Ghibli GraphQL</Text>
        <FilmList />
      </Box>
    </ChakraProvider>
  </ApolloProvider>
);
