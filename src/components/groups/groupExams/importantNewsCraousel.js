import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { ChevronRight, Clock } from "lucide-react";
import React from "react";

const ImportantNewsCraousel = () => {
  return (
    <Box borderTop="4px solid #EAEAEC" mt="5" mb="8">
      <Flex alignItems="center" fontSize="16px" fontWeight="600" justifyContent="space-between" pt="6" pb="2">
        <Text>Important News</Text>
        <HStack alignItems="center">
          <Text>View All</Text>
          <ChevronRight />
        </HStack>
      </Flex>
      <Text fontSize="12px" pb="6" color="#636363">
        Last updated on 12th Mar, 2021
      </Text>
      <Box display="flex" gap="4" overflow="scroll">
        {[...Array(4)].map((e, i) => (
          <HStack key={i} bg="#F1F2F6" py="3" minW="311px" px="3" rounded="2xl">
            <Box width="80px" height="80px">
              <Image alt="news img" objectFit="cover" src="/News.png" />
            </Box>
            <VStack maxW="200px" align="start">
              <Text fontSize="14px" fontWeight="500">
                Important instructions for candidates appearing in upcoming GMAT EXAMS
              </Text>
              <Text display="flex" alignItems="center" color="#8D96A5" fontSize="12px">
                <Clock size="14px" /> 12th Mar, 2021
              </Text>
            </VStack>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default ImportantNewsCraousel;
