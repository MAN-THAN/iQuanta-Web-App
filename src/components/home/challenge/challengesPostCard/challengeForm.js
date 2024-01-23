import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ChallengeForm = ({ openModal , triggeredFrom }) => {
  const {profilePic} = useSelector(state => state.userData);
  return (
    <Box bg="white.900" p="4">
     <Flex alignItems="center">
        <Box width="50px" height="50px">
          <Image
            boxSize="2.5rem"
            borderRadius="md"
            width="100%"
            src={profilePic ? profilePic : "noImage.svg"}
            alt="Fluffybuns the destroyer"
            fit="cover"
            mr="2"
          />
        </Box>
        <Box width="full" onClick={openModal}>
          <Text color={'#8D96A5'} cursor={'pointer'} ml="4" mb='3'>Start a new challenge</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ChallengeForm;
