import BackButton from "@/components/common/backButton";
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const AccelareaderPage = () => {
  return (
    <>
    <Box mt="4" bg="#fff" roundedTop="2xl" p="4">
      <HStack py='4'>
        <BackButton />
        <Box>
          <Text fontSize="16px" fontWeight="600">
            Accelareader
          </Text>
          <Text fontSize="12px" color="#636363">
            Practice
          </Text>
        </Box>
      </HStack>
      <Text p='4'  py='4'>
        Accelareader will help you read faster by flashing words at you using what is called a Rapid Serial Visual
        Presentation. Practice speed reading and save precious time during your final exam.
      </Text>
    </Box>
    <Box mt="4" bg="#fff"  p="4">
        <Text>Preview</Text>
        <Box h='20vh' bg='brand.800' rounded='xl'>

        </Box>
    </Box>
    </>
  );
};

export default AccelareaderPage;
