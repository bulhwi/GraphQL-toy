import * as React from 'react';
import {AspectRatio, Box, Button, Flex, Heading, HStack, Image} from "@chakra-ui/react";
import {FaHeart} from "react-icons/all";

interface MovieCutDetailProps {
  cutImg: string;
  cutId: number;
}

export const FilmCutDetail = ({
                                cutImg,
                                cutId,
                              }: MovieCutDetailProps): React.ReactElement => {
  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image src={cutImg} objectFit="cover" fallbackSrc="" />
      </AspectRatio>

      <Box py={4}>
        <Flex justify="space-between" alignItems="center">
          <Heading size="sm">{cutId}번째 사진</Heading>
          <HStack spacing={1} alignItems="center">
            <Button aria-label="like-this-cut-button" leftIcon={<FaHeart />} />
            <Button colorScheme={"teal"}>감상 남기기</Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};