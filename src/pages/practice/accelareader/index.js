import PracticeLayout from "@/components/layouts/practiceLayout";
import AccelareaderPage from "@/components/practice/accelareader/accelareaderPage";
import AccelareaderShortcuts from "@/components/practice/accelareader/accelareaderShortcuts";
import AccelareaderTextField from "@/components/practice/accelareader/accelareaderTextField";
import { Box } from "@chakra-ui/react";
import React from "react";

const Accelareader = () => {
  return (
    <PracticeLayout>
      {/* <AccelareaderPage /> */}
      <AccelareaderShortcuts />
      {/* <AccelareaderTextField /> */}
    </PracticeLayout>
  );
};

export default Accelareader;
