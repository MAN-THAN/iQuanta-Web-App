import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import MockHeader from "../mockTest/mockHeader";
import MockFooter from "../mockTest/mockFooter";
import QustionPalette from "../mockTest/qustionPalette";
import QustionSection from "../mockTest/qustionSection";
import { quesData } from "@/utilities/qusData";

const Template1 = () => {
 

  const questionsData = [
    {
      questionId: {
        _id: "1",
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
        _id: "2",
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
        _id: "3",
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
    console.log(currentQuestionIndex, "=====>>>>");
  };
  return (
    <Box bg="white.900" p="6" h="90vh">
      <Flex>
        <Box flexBasis="75%" px="4">
          <MockHeader/>
          <Box bg="brand.800" rounded="3xl" p="6" mt="4">
            <Flex gap="4">
              <QustionSection questionsData={questionsData} currentQuestionIndex={currentQuestionIndex} />
            </Flex>
            <MockFooter />
          </Box>
        </Box>
        <Box flexBasis="25%" bg="brand.800" rounded="3xl">
          <QustionPalette questionsData={questionsData} onQuestionChange={handleQuestionChange} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Template1;
