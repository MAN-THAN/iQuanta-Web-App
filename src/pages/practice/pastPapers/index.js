import PracticeLayout from "@/components/layouts/practiceLayout";
import PracticePastPapers from "@/components/practice/parcticePastPapers";
import PracticeQa from "@/components/practice/practiceQa";
import { Box } from "@chakra-ui/react";
import React from "react";

const PastPapers = () => {
  return (
    <PracticeLayout>
      <PracticePastPapers/>
    </PracticeLayout>
  );
};

export default PastPapers;
