import { Box, Divider, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import BackButton from "../common/backButton";
import PracticeAllTopic from "./practiceAllTopic";
import MyNotes from "../learn/myNotes";

const PracticeHome = () => {
  return (
    <Box roundedTop="2xl" bg="#fff">
      <HStack p="4">
        <BackButton />
        <VStack align="start">
          <Text fontWeight="600">Foreign Studies </Text>
          <Text fontSize="12px" color="#636363">
            Practice
          </Text>
        </VStack>
      </HStack>
      <Divider py="4" />
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" p="4" gap="4">
        <HStack width="350px" maxH="90px" bg="brand.800" alignItems="start" p="4" rounded="2xl" cursor="pointer">
          <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
            <Image alt="image" width="100%" objectFit="cover" src="/Hourglass.svg" />
          </Box>
          <Stack ml="3">
            <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
              Timed Quiz
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
              Solve questions with a real world time pressure of your entrance exam.
            </Text>
          </Stack>
        </HStack>
        <HStack width="350px" maxH="90px" bg="brand.800" alignItems="start" p="4" rounded="2xl" cursor="pointer">
          <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
            <Image alt="image" width="100%" objectFit="cover" src="/Hourglass.svg" />
          </Box>
          <Stack ml="3">
            <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
              Timed Quiz
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
              Solve questions with a real world time pressure of your entrance exam.
            </Text>
          </Stack>
        </HStack>
        <HStack width="100%" maxH="90px" bg="brand.800" alignItems="start" p="4" rounded="2xl" cursor="pointer">
          <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
            <Image alt="image" width="100%" objectFit="cover" src="/Hourglass.svg" />
          </Box>
          <Stack ml="3">
            <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
              Timed Quiz
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
              Solve questions with a real world time pressure of your entrance exam.
            </Text>
          </Stack>
        </HStack>
      </Box>
      <PracticeAllTopic />
      <MyNotes/>
    </Box>
  );
};

export default PracticeHome;

