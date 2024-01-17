import { HTMLConverter } from "@/utilities/commonFunctions";
import { Box, Radio, RadioGroup, Text } from "@chakra-ui/react";

const QustionSection = ({ questionsData, currentQuestionIndex }) => {
  const currentQuestion = questionsData[currentQuestionIndex];
  console.log("qus======>>>>", currentQuestion);
  return (
    <>
      <Box flexBasis="60%" bg="white.900" p="6" height="60vh" overflowY="scroll" rounded="3xl">
        <Text fontSize="14px" fontWeight="600">
          DiREctions tor the question
        </Text>
        <HTMLConverter>{currentQuestion.questionId.context}</HTMLConverter>
      </Box>
      <Box flexBasis="40%" bg="white.900" p="6" height="60vh" overflowY="scroll" rounded="3xl">
        <Text fontSize="14px" fontWeight="600">
          Question :
        </Text>
        <HTMLConverter>{currentQuestion.questionId.question}</HTMLConverter>

        <RadioGroup display="flex" flexDirection="column" gap="6" mt="4%">
          {currentQuestion.questionId.options.map((option, index) => (
            <Radio key={index}>{option}</Radio>
          ))}
        </RadioGroup>
      </Box>
    </>
  );
};

export default QustionSection;
