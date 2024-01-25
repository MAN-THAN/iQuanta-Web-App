import PracticeLayout from "@/components/layouts/practiceLayout";
import AccelareaderPage from "@/components/practice/accelareader/accelareaderPage";
import AccelareaderSetting from "@/components/practice/accelareader/accelareaderSetting";
import AccelareaderShortcuts from "@/components/practice/accelareader/accelareaderShortcuts";
import AccelareaderTextField from "@/components/practice/accelareader/accelareaderTextField";
import AccelareaderTopicList from "@/components/practice/accelareader/accelareaderTopicList";
import { Box } from "@chakra-ui/react";
import React from "react";

const Accelareader = () => {
  return (
    <PracticeLayout>
      <AccelareaderPage />
      {/* <AccelareaderShortcuts /> */}
      {/* <AccelareaderTextField /> */}
      {/* <AccelareaderSetting /> */}
      {/* <AccelareaderTopicList /> */}
    </PracticeLayout>
  );
};

export default Accelareader;
