import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StartNewQuiz = () => {
  return (
    <Box>
      <Text fontSize="18px" fontWeight="600">
        Start New Quiz
      </Text>
      <Box display="flex" gap="4">
        <HStack width="350px" maxH="90px" bg="brand.800" alignItems="start" p="4" rounded="2xl" cursor="pointer">
          <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
            <Image alt="image" width="100%" objectFit="cover" src="/Hourglass.svg" />
          </Box>
          <Stack ml="3">
            <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
              Topic Based
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
              Quiz only for specific topic(s) of your choice
            </Text>
          </Stack>
        </HStack>
        <HStack width="350px" maxH="90px" bg="brand.800" alignItems="start" p="4" rounded="2xl" cursor="pointer">
          <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
            <Image alt="image" width="100%" objectFit="cover" src="/Hourglass.svg" />
          </Box>
          <Stack ml="3">
            <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
              Exam Based
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
              Quiz only for specific topic(s) of your choice
            </Text>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default StartNewQuiz;
