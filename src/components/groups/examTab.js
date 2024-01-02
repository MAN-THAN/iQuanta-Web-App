import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Dot } from "lucide-react";
import React from "react";

const ExamTab = () => {
  return (
    <>
      <Text py="2">
        Get admission into a graduate management program, such as MBA and Masters in Finance related courses in top
        business schools across the world.
      </Text>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          minW="300px"
        >
          <HStack align="center">
            <Box width="32px" height="32px" bg="#5146D6" p="2" rounded="lg">
              <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
            </Box>
            <Text fontSize="14px" fontWeight="500" p="0">
              Eligibility & Fees
            </Text>
          </HStack>
          <Box>
            <ArrowRight fontSize="14px" />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          minW="300px"
        >
          <HStack align="center">
            <Box width="32px" height="32px" bg="#5146D6" p="2" rounded="lg">
              <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
            </Box>
            <Text fontSize="14px" fontWeight="500" p="0">
              Exam dates & Registration
            </Text>
          </HStack>
          <Box>
            <ArrowRight fontSize="14px" />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          minW="300px"
        >
          <HStack align="center">
            <Box width="32px" height="32px" bg="#5146D6" p="2" rounded="lg">
              <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
            </Box>
            <Text fontSize="14px" fontWeight="500" p="0">
              Preparation tips
            </Text>
          </HStack>
          <Box>
            <ArrowRight fontSize="14px" />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          minW="300px"
        >
          <HStack align="center">
            <Box width="32px" height="32px" bg="#5146D6" p="2" rounded="lg">
              <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
            </Box>
            <Text fontSize="14px" fontWeight="500" p="0">
              Scoring & Syllabus
            </Text>
          </HStack>
          <Box>
            <ArrowRight fontSize="14px" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExamTab;
