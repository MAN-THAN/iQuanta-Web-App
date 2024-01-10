import { Box, Button, Divider, Flex, HStack, Image, Progress, Stack, Tag, Text, VStack } from "@chakra-ui/react";
import { Dot, MessageCircle, MoreVertical, ThumbsUp } from "lucide-react";
import LikeEmojiGroup from "../common/likeEmojiGroup";
import { useState } from "react";

const Quiz = () => {
  const questionsData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    questionsData.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };
  return (
    <Box bg="#fff" rounded="2xl">
      <Flex align="center" px="6" py="3" justify="space-between">
        <HStack>
          <Text color="#FB9650" fontWeight="600" borderRight="1px" pr="4">
            29s
          </Text>
          <Text fontWeight="600" pr="4">
            01 / 10
          </Text>
        </HStack>
        <Box display="flex" alignItems="center" gap="4">
          <Button
            size="md"
            width="100%"
            bg="white.900"
            border="1px "
            sx={{
              margin: "0 auto",
              fontSize: "12px",
            }}
            variant="solid"
          >
            Quit
          </Button>
        </Box>
      </Flex>
      <Progress size="sm" colorScheme="blackAlpha" sx={{ bgColor: "#fff" }} value={80} mt="2" />
      {showResult ? (
        <div>
          <h2>Quiz Result</h2>
          <p>
            Your score: {calculateScore()} out of {questionsData.length}
          </p>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <Box p="4">
          <Box display="flex" alignItems="center" gap="4" p="6">
            <Tag bg="#5146D6" p="1" color="#fff" rounded="lg">
              QUID: 2455
            </Tag>
          </Box>
          <Box px="6" h="30vh">
            <Text>{questionsData[currentQuestion].question}</Text>
          </Box>
          <VStack py="6" fontSize="16px" fontWeight="500">
            {questionsData[currentQuestion].options.map((option, index) => (
              <Flex
                display="flex"
                bg={
                  userAnswers[currentQuestion] === option
                    ? userAnswers[currentQuestion] === questionsData[currentQuestion].correctAnswer
                      ? "green.500"
                      : "red.500"
                    : "#F1F2F6"
                }
                width="100%"
                color={userAnswers[currentQuestion] === option ? "white.900" : "black.900"}
                p="4"
                rounded="2xl"
                gap="6"
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                <Text>{String.fromCharCode(65 + index)}.</Text>
                <Text fontWeight="600">{option}</Text>
              </Flex>
            ))}
          </VStack>
          {userAnswers[currentQuestion] !== null &&
            userAnswers[currentQuestion] !== questionsData[currentQuestion].correctAnswer && (
              <Box p="4" mb="4" rounded="lg">
                {/* Your answer is incorrect. The correct answer is {questionsData[currentQuestion].correctAnswer}. */}
                <HStack>
                  <Box boxSize="60px" rounded="full" bg="#ea343436" alignItems="center" p="3" justifyContent="center">
                    <Image width="100%" src="/Shield Fail.svg" />
                  </Box>
                  <Stack gap="0 !important">
                    <Text color="#FA324C" fontSize="18px" fontWeight="600">
                      Oh no! incorrect answer
                    </Text>
                    <Text fontSize="14px" fontWeight="600">
                      Correct answer : B
                    </Text>
                  </Stack>
                </HStack>

                <Text pt="4" fontSize="18px" fontWeight="600">
                  Point:10
                </Text>
              </Box>
            )}
          <Button
            size="lg"
            width="100%"
            bg="black.900"
            sx={{
              color: "#fff",
              margin: "0 auto",
              fontSize: "12px",
            }}
            variant="solid"
            onClick={handleNextQuestion}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
