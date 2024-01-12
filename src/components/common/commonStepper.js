import React from "react";
import { Box, Progress, Step, StepIndicator, StepStatus, Stepper } from "@chakra-ui/react";
import { Check } from "lucide-react";

const CommonStepper = ({ steps, activeStep }) => {
  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box position="relative">
      <Progress colorScheme="green" value={progressPercent} position="absolute" height="5px" width="full" top="10px" />
      <Stepper size="sm" index={activeStep} gap="1" colorScheme="green">
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <StepIndicator bg="white" p="1">
              <StepStatus complete={<Check />} />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const StepIcon = () => {
  // Customize your step icon here
  return <Box h="6px" w="6px" bg="black" borderRadius="full" />;
};

export default CommonStepper;
