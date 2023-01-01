import * as React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import FilmList from "../components/film/FilmList";
import CommonLayout from '../components/CommonLayout';


export const Main = (): React.ReactElement => {
  return (
    <Box>
      <CommonLayout>
        <Heading size="lg">최고의 장면을 찾아보세요.</Heading>
        <FilmList/>
      </CommonLayout>
    </Box>
  );
};