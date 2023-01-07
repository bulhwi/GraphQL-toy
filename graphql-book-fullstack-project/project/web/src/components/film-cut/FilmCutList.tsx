import React, {lazy} from 'react';
import {Box, LinkBox, LinkOverlay, SimpleGrid, Spinner} from '@chakra-ui/react';
import {useCutsQuery} from "../../generated/graphql";
import {CutImage} from "./CutImage";

interface FilmCutListProps {
  filmId: number;
  onClick: (cutId: number) => void;
};

export const FilmCutList = ({filmId, onClick}: FilmCutListProps): React.ReactElement => {
  const {data, loading} = useCutsQuery({variables: {filmId}});
  console.log(data);

  if (loading) {
    return (
      <Box textAlign="center" my={10}>
        <Spinner/>
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
        <LinkBox as={"article"}>
          <Box>
            <LinkOverlay cursor={"pointer"} onClick={() => onClick(cut.id)}>
              <CutImage src={cut.src} id={cut.id} key={cut.id} />
            </LinkOverlay>
          </Box>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
};