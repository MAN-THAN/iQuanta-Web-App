import {
  Box,
  Stack,
  Heading,
  Text,
  HStack,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { BookOpen, ChevronRight, Clock } from "lucide-react";

const NewsListCard = () => {
  return (
    <Box pt="5">
      <Flex align="center" justify="space-between" pb="4">
        <HStack align="center">
          <Box>
            <BookOpen />
          </Box>
          <Heading fontSize="18px" fontWeight="500">
            News
          </Heading>
        </HStack>
        <Box>
          <ChevronRight />
        </Box>
      </Flex>
      <Stack gap="3">
        <HStack bg="#fff" py="3" px="3" rounded="2xl">
          <Box width="80px" height="80px">
            <Image alt="news img" objectFit="cover" src="/News.png" />
          </Box>
          <VStack maxW="200px" align="start">
            <Text fontSize="14px" fontWeight="500">
              Important instructions for candidates appearing in upcoming GMAT
              EXAMS
            </Text>
            <Text
              display="flex"
              alignItems="center"
              color="#8D96A5"
              fontSize="12px"
            >
              <Clock size="14px" /> 12th Mar, 2021
            </Text>
          </VStack>
        </HStack>
        <HStack bg="#fff" py="3" px="3" rounded="2xl">
          <Box width="80px" height="80px">
            <Image alt="news img" objectFit="cover" src="/News.png" />
          </Box>
          <VStack maxW="200px" align="start">
            <Text fontSize="14px" fontWeight="500">
              Important instructions for candidates appearing in upcoming GMAT
              EXAMS
            </Text>
            <Text
              display="flex"
              alignItems="center"
              color="#8D96A5"
              fontSize="12px"
            >
              <Clock size="14px" /> 12th Mar, 2021
            </Text>
          </VStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default NewsListCard;
