import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box m={10} p={8} bg="gray.50" borderRadius="lg" boxShadow="md">
      <VStack gap={4}>
        <Heading as="h1" size="xl" color="teal.600">
          About
        </Heading>
        <Text fontSize="lg" color="gray.700">
          これはサンプルのAboutページです。ChakraUIのコンポーネントを使って、簡単にスタイリングしています。
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
