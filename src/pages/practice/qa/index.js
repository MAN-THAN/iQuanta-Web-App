import PreparationTips from "@/components/exams/preparationTips";
import PracticeLayout from "@/components/layouts/practiceLayout";
import PracticeQa from "@/components/practice/practiceQa";
import { Box } from "@chakra-ui/react";
import React from "react";

const Qa = () => {
  return (
    <PracticeLayout>
      <PracticeQa />
      <PreparationTips />
    </PracticeLayout>
  );
};

export default Qa;
