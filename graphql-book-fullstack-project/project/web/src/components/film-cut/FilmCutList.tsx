import * as React from 'react';
import { Box, Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import {useCutsQuery} from "../../generated/graphql";

interface FilmCutListProps {
  filmId: number;
};

export const FilmCutList = ({filmId}: FilmCutListProps): React.ReactElement => {
  const {data, loading} = useCutsQuery({variables: {filmId}});
  console.log(data);

  if(loading) {
    return (
      <Box textAlign="center" my={10}>
        <Spinner />
      </Box>
    )
  }

  return (
    <SimpleGrid
      my={4}
      columns={[1, 2, null, 3]}
      spacing={[2, null, 8]}
    >
      {data?.cuts.map((cut) => (
        <Image src={cut.src} key={cut.id} />
      ))}
    </SimpleGrid>
  );
};