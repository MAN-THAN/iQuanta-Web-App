import BackButton from "@/components/common/backButton";
import { Box, HStack, Text } from "@chakra-ui/react";
import PracticeAllTopic from "../practiceAllTopic";
import PreparationTips from "@/components/exams/preparationTips";

const TopoicListTimeQuiz = () => {
  return (
    <Box roundedTop="2xl" py="6" px="4" bg="#fff">
      <HStack p="4">
        <BackButton />
        <Text fontWeight="600">Time Quiz</Text>
      </HStack>
      <PracticeAllTopic />
      <PreparationTips />
    </Box>
  );
};

export default TopoicListTimeQuiz;
