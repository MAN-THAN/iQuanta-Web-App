import PracticeLayout from "@/components/layouts/practiceLayout";
import PracticeQa from "@/components/practice/practiceQa";
import PracticeTimeQuiz from "@/components/practice/practiceTimeQuiz";
import { Box } from "@chakra-ui/react";
import React from "react";

const Qa = () => {
  return (
    <PracticeLayout>
      <PracticeTimeQuiz/>
    </PracticeLayout>
  );
};

export default Qa;
