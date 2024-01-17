import React, { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Progress,
  Tag,
  Text,
  VStack,
  useDisclosure,
  useSteps,
} from "@chakra-ui/react";
import { HTMLConverter } from "@/utilities/commonFunctions";
import CommonStepper from "./commonStepper";
import QuizModal from "../quiz/quizModal";
import WrongResult from "../quiz/wrongResult";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
  { title: "Fourth", description: "Select Rooms" },
  { title: "Fifth", description: "Select Rooms" },
];

const Quiz = () => {
  const questionsData = [
    {
      questionId: {
        _id: "6556f2eb8b9f7e60e20771f6",
        business_category_id: "65044548fc904d4529989184",
        business_subcategory_id: "65044548fc904d4529989184",
        entity_type_id: "651fb3a354ee660e82f3460a",
        subject_id: "651fb6ae54ee660e82f34625",
        topic_id: [
          {
            _id: "652cc716c2359969ecba3e27",
            title: "Verbal Ability",
            description: "",
          },
        ],
        subtopic_id: [
          {
            _id: "6530bd9013ae1037b2dc9373",
            title: "Main Idea/Central Idea",
            description: "Math is something",
          },
        ],
        difficulty_level_manual: "medium",
        question:
          '<p><strong style="color: rgb(34, 34, 34);">From the following, choose the option having all the CORRECT sentences.</strong></p>',
        options: ["2, 3, 5", "1, 3, 4", "1, 2, 5", "4, 5, 6", "3, 4, 6"],
        correctAnswer: "2, 3, 5",
        question_type: 1,
        context:
          '<p><strong style="color: rgb(34, 34, 34);">Read the following sentences carefully.<span class="ql-cursor">﻿</span></strong></p><p><br></p><p><span style="color: rgb(34, 34, 34);">1. The exam will begin from 2:00 p.m. on January 8th.</span></p><p><span style="color: rgb(34, 34, 34);">2. While entering into the college building, he saw the statue of Mahatma Gandhi.</span></p><p><span style="color: rgb(34, 34, 34);">3. The government has entered into a discussion with the local bodies for keeping the streets clean.</span></p><p><span style="color: rgb(34, 34, 34);">4. I will start my world tour from Sri Lanka.</span></p><p><span style="color: rgb(34, 34, 34);">5. Amitabh Bacchan is married with Jaya Bacchan</span></p><p><span style="color: rgb(34, 34, 34);">6. I have been working on this project for three weeks.</span></p>',
        isPara: true,
        images: [],
      },

      studentAnswer: null,
      studentAnswerIndex: null,
      duration: null,
      stage: 0,
    },
    {
      questionId: {
        _id: "6556f2eb8b9f7e60e20771f6",
        business_category_id: "65044548fc904d4529989184",
        business_subcategory_id: "65044548fc904d4529989184",
        entity_type_id: "651fb3a354ee660e82f3460a",
        subject_id: "651fb6ae54ee660e82f34625",
        topic_id: [
          {
            _id: "652cc716c2359969ecba3e27",
            title: "Verbal Ability",
            description: "",
          },
        ],
        subtopic_id: [
          {
            _id: "6530bd9013ae1037b2dc9373",
            title: "Main Idea/Central Idea",
            description: "Math is something",
          },
        ],
        difficulty_level_manual: "medium",
        question:
          '<p><strong style="color: rgb(34, 34, 34);">From the following, choose the option having all the CORRECT sentences.</strong></p>',
        options: ["2, 3, 5", "1, 3, 4", "1, 2, 5", "4, 5, 6", "3, 4, 6"],
        correctAnswer: "2, 3, 5",
        question_type: 1,
        context:
          '<p><strong style="color: rgb(34, 34, 34);">Read the following sentences carefully.<span class="ql-cursor">﻿</span></strong></p><p><br></p><p><span style="color: rgb(34, 34, 34);">1. The exam will begin from 2:00 p.m. on January 8th.</span></p><p><span style="color: rgb(34, 34, 34);">2. While entering into the college building, he saw the statue of Mahatma Gandhi.</span></p><p><span style="color: rgb(34, 34, 34);">3. The government has entered into a discussion with the local bodies for keeping the streets clean.</span></p><p><span style="color: rgb(34, 34, 34);">4. I will start my world tour from Sri Lanka.</span></p><p><span style="color: rgb(34, 34, 34);">5. Amitabh Bacchan is married with Jaya Bacchan</span></p><p><span style="color: rgb(34, 34, 34);">6. I have been working on this project for three weeks.</span></p>',
        isPara: true,
        images: [],
      },
      studentAnswer: null,
      studentAnswerIndex: null,
      duration: null,
      stage: 0,
    },
    {
      questionId: {
        _id: "6556f2eb8b9f7e60e20771f6",
        business_category_id: "65044548fc904d4529989184",
        business_subcategory_id: "65044548fc904d4529989184",
        entity_type_id: "651fb3a354ee660e82f3460a",
        subject_id: "651fb6ae54ee660e82f34625",
        topic_id: [
          {
            _id: "652cc716c2359969ecba3e27",
            title: "Verbal Ability",
            description: "",
          },
        ],
        subtopic_id: [
          {
            _id: "6530bd9013ae1037b2dc9373",
            title: "Main Idea/Central Idea",
            description: "Math is something",
          },
        ],
        difficulty_level_manual: "medium",
        question:
          '<p><strong style="color: rgb(34, 34, 34);">From the following, choose the option having all the CORRECT sentences.</strong></p>',
        options: ["yes", "no", "common", "wrong"],
        correctAnswer: "common",
        question_type: 1,
        context:
          '<p><strong style="color: rgb(34, 34, 34);">Read the following sentences carefully.<span class="ql-cursor">﻿</span></strong></p><p><br></p><p><span style="color: rgb(34, 34, 34);">1. The exam will begin from 2:00 p.m. on January 8th.</span></p><p><span style="color: rgb(34, 34, 34);">2. While entering into the college building, he saw the statue of Mahatma Gandhi.</span></p><p><span style="color: rgb(34, 34, 34);">3. The government has entered into a discussion with the local bodies for keeping the streets clean.</span></p><p><span style="color: rgb(34, 34, 34);">4. I will start my world tour from Sri Lanka.</span></p><p><span style="color: rgb(34, 34, 34);">5. Amitabh Bacchan is married with Jaya Bacchan</span></p><p><span style="color: rgb(34, 34, 34);">6. I have been working on this project for three weeks.</span></p>',
        isPara: true,
        images: [],
      },
      studentAnswer: null,
      studentAnswerIndex: null,
      duration: null,
      stage: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);

  const { isOpen: isOpenWrongResult, onOpen: onOpenWrongResult, onClose: onCloseWrongResult } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOptionClick = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    const isCorrect = selectedOption === questionsData[currentQuestion].questionId.correctAnswer;

    if (isCorrect) {
      console.log("Correct answer!");
      setIncorrectAnswer(false);
    } else {
      setIncorrectAnswer(true);
    }
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      // onOpen();
      onOpenWrongResult();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    const userAnswer = userAnswers[currentQuestion];
    const correctAnswers = questionsData[currentQuestion].questionId.correctAnswer.split(",");
    if (userAnswer && correctAnswers.some((correct) => userAnswer.includes(correct.trim()))) {
      score += 1;
    }

    return score;
  };

  const { activeStep, setActiveStep } = useSteps({
    index: 3,
    count: steps.length,
  });

  return (
    <>
      {/* <Box bg="white.900" h="auto">
          <Box bg="#000" rounded="2xl" h="40vh">
            <VStack p="4" spacing="4" color="white.900">
              <Image boxSize="100px" rounded="xl" fit="cover" src="/static/images/profile.jpeg" />
              <Text fontSize="14px" fontWeight="bold">
                Samayra Sharma
              </Text>
              <Text fontSize="24px" fontWeight="600">
                Completed Level {calculateScore()} / {questionsData.length}
              </Text>
            </VStack>
            <Box px="24">
              <CommonStepper steps={steps} activeStep={activeStep} />
            </Box>
            <Box color="white.900" textAlign="center" fontSize="18px" py="24px">
              <Text>
                Wow, you are one step closer to leveling up in <br /> Vocabulary basic - Conceptual difficulty!
              </Text>
            </Box>
          </Box>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem w="100%" h="100%" bg="red.500">
              <Text>dfghjkl,</Text>
            </GridItem>
            <GridItem w="100%" h="100%" bg="red.500">
              <Text>dfghjkl,</Text>
            </GridItem>
            <GridItem w="100%" h="100%" bg="red.500">
              <Text>dfghjkl,</Text>
            </GridItem>
            <GridItem w="100%" h="100%" bg="red.500">
              <Text>dfghjkl,</Text>
            </GridItem>
          </Grid>
          <Box display="flex">
            <Box
              bg="#5146D6"
              position="relative"
              maxW="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className=""
            >
              <Text fontSize="14px" color="white.900">
                Total XP : 230
              </Text>
            </Box>
            <Box
              bg="#5146D6"
              maxW="100px"
              boxSize="40px"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              left="0"
            >
              <Text fontSize="14px" color="white.900">
                +30
              </Text>
            </Box>
          </Box>
        </Box> */}
      <QuizModal isOpen={isOpen} onClose={onClose} />
      <WrongResult isOpen={isOpenWrongResult} onClose={onCloseWrongResult} />
      <Box bg="#fff" rounded="2xl">
        <Flex align="center" px="6" py="3" justify="space-between">
          <HStack>
            <Text color="#FB9650" fontWeight="600" borderRight="1px" pr="4">
              29s
            </Text>
            <Text fontWeight="600" pr="4">
              {currentQuestion + 1} / {questionsData.length}
            </Text>
          </HStack>
          <Box display="flex" alignItems="center" gap="4">
            <Button
              size="md"
              width="100%"
              bg="white.900"
              border="1px"
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
        <Progress
          size="sm"
          colorScheme="blackAlpha"
          sx={{ bgColor: "#fff" }}
          value={((currentQuestion + 1) / questionsData.length) * 100}
          mt="2"
        />

        <VStack p="4" spacing="4" alignItems="start">
          <Tag bg="#5146D6" p="1" color="#fff" rounded="lg">
            QUID: 2455
          </Tag>

          <Box textAlign="start" h="30vh">
            <HTMLConverter>{questionsData[currentQuestion].questionId.question}</HTMLConverter>
          </Box>
          {userAnswers[currentQuestion] !== null && (
            <VStack fontSize="16px" fontWeight="500" width="100%" alignItems="start">
              {questionsData[currentQuestion].questionId.options.map((option, index) => (
                <Flex
                  key={index}
                  display="flex"
                  bg={
                    userAnswers[currentQuestion] === option
                      ? userAnswers[currentQuestion] === questionsData[currentQuestion].questionId.correctAnswer
                        ? "green.500" // Green for correct answer
                        : "red.500" // Red for incorrect answer
                      : "#F1F2F6"
                  }
                  width="100%"
                  color={userAnswers[currentQuestion] === option ? "white.900" : "black.900"}
                  p="4"
                  rounded="2xl"
                  gap="6"
                  onClick={() => handleOptionClick(option)}
                >
                  <Text>{String.fromCharCode(65 + index)}.</Text>
                  <Text fontWeight="600">{option}</Text>
                </Flex>
              ))}
              {incorrectAnswer ? (
                <VStack p="4" mb="4" rounded="lg" spacing="2" alignItems="start">
                  <HStack>
                    <Box
                      bg="#fa324c36"
                      boxSize="48px"
                      display="flex"
                      alignItems="center"
                      rounded="full"
                      justifyContent="center"
                    >
                      <Image src="/Shield Fail.svg" />
                    </Box>
                    <Text color="#FA324C" fontSize="lg" fontWeight="bold">
                      Oh no! Incorrect answer
                    </Text>
                  </HStack>
                  <Text fontSize="md" fontWeight="500">
                    Correct answer:
                    <span style={{ color: "green" }}> {questionsData[currentQuestion].questionId.correctAnswer}</span>
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Point: 10
                  </Text>
                </VStack>
              ) : (
                ""
              )}
            </VStack>
          )}
          <Button
            size="lg"
            width="100%"
            bg="black.900"
            color="white"
            sx={{
              margin: "0 auto",
              fontSize: "12px",
            }}
            onClick={handleNextQuestion}
          >
            {currentQuestion === questionsData.length - 1 ? "Finish" : "Next Question"}
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Quiz;
