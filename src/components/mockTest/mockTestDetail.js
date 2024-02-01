import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import BackButton from "../common/backButton";
import MockTestFeatured from "./mockTestFeatured";
import YourExam from "../exams/yourExam";

const MockTestDetail = () => {
  return (
    <Box mt="4" bg="#fff" roundedTop="2xl" p="6">
      <HStack py="4">
        <BackButton />
        <Box>
          <Text fontSize="16px" fontWeight="600">
            Mock Test
          </Text>
          <Text fontSize="12px" color="#636363">
            Practice
          </Text>
        </Box>
      </HStack>
      <MockTestFeatured />
    </Box>
  );
};

export default MockTestDetail;
