// Template1.jsx

import { Box, Flex } from "@chakra-ui/react";
import MockHeader from "../mockTest/mockHeader";
import MockFooter from "../mockTest/mockFooter";
import QustionPalette from "../mockTest/qustionPalette";
import QustionSection from "../mockTest/qustionSection";
import { quesData } from "@/utilities/qusData";
import { useState } from "react";

const Template1 = () => {
  const [selectedSection, setSelectedSection] = useState("All");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
  };

  const filteredQuestions = quesData.sections[0].questions.filter(
    (question) => selectedSection === "All" || question.section === selectedSection
  );

  return (
    <Box bg="white.900" p="6" h="90vh">
      <Flex>
        <Box flexBasis="75%" px="4">
          <MockHeader onSelectSection={handleSelectSection} />
          <Box bg="brand.800" rounded="3xl" p="6" mt="4">
            <Flex gap="4">
              <QustionSection questionsData={filteredQuestions} currentQuestionIndex={currentQuestionIndex} />
            </Flex>
            <MockFooter />
          </Box>
        </Box>
        <Box flexBasis="25%" bg="brand.800" rounded="3xl">
          <QustionPalette questionsData={filteredQuestions} onQuestionChange={handleQuestionChange} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Template1;
