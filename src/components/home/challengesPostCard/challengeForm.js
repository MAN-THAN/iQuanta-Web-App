import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ChallengeForm = ({ openModal }) => {
  return (
    <Box bg="white.900" p="4">
     <Flex alignItems="center">
        <Box width="50px" height="50px">
          <Image
            boxSize="2.5rem"
            borderRadius="md"
            width="100%"
            src="/static/images/Profile.jpeg"
            alt="Fluffybuns the destroyer"
            fit="cover"
            mr="2"
          />
        </Box>
        <Box width="full" onClick={openModal}>
          <Text ml="4">Create a new challenge</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ChallengeForm;
