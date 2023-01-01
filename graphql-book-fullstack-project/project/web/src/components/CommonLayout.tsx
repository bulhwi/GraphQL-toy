import {Box, BackgroundProps} from "@chakra-ui/react";
import NavBar from "./nav/NavBar";
import React from 'react';

interface CommonLayoutProps {
  bg?: BackgroundProps['bg'];
  children: React.ReactNode;
}

export default function CommonLaytour({
                                        children,
                                        bg,
                                      }: CommonLayoutProps): React.ReactElement {
  return (
    <div>
      <NavBar />
      <Box
        px={{base: 4}}
        pt={24}
        mx="auto"
        maxW="960px"
        minH="100vh"
        w="100%"
        bg={bg}
      >
        {children}
      </Box>
    </div>
  )
}