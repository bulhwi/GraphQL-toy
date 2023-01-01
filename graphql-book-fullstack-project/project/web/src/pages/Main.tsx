import * as React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import FilmList from "../components/film/FilmList";


export const Main = (): React.ReactElement => {
  return (
    <Box>
      <Heading size="lg">최고의 장면을 찾아보세요.</Heading>
      <FilmList />
    </Box>
  );
};