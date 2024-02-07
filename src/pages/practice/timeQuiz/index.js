import InstructionDetails from "@/components/common/instructionDetails";
import PracticeLayout from "@/components/layouts/practiceLayout";
import MainHeader from "@/components/mainHeader";
import PracticeQa from "@/components/practice/practiceQa";
import PracticeTimeQuiz from "@/components/practice/practiceTimeQuiz";
import { Box } from "@chakra-ui/react";
import React from "react";

const Qa = () => {
  return (
    <PracticeLayout>
      <PracticeTimeQuiz />
    </PracticeLayout>
    // <>
    //   <MainHeader/>
    //   <InstructionDetails/>
    // </>
  );
};

export default Qa;
