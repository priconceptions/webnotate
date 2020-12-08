import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/react';
import { hot } from 'react-hot-loader';

const Popup = () => {
  return (
    <ChakraProvider>
      <Box w="350px" h="550px" overflow="hidden" p={2}>
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          m={0}
          py={15}
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderColor="gray.400"
        >
          Webnotate
        </Heading>
      </Box>
    </ChakraProvider>
  );
};

export default hot(module)(Popup);
