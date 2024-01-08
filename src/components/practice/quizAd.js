import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Dot } from "lucide-react";
import React from "react";

const QuizAd = () => {
  return (
    <Box bg="#5146D6" p="6" rounded="2xl" height="185px" color="#fff" position="relative">
      <Box position="absolute" width="200px" height="200px" top="0" right="10">
        <Image width="100%" src="/Q.svg" />
      </Box>
      <Text fontSize="18px" fontWeight="600">
        Daily Quiz
      </Text>
      <Text fontSize="16" fontWeight="400" py="4">
        You daily practice curated based on your performance.
      </Text>
      <Box>
        <Button
          py="4"
          sx={{
            backgroundColor: "#000 !important",
            fontSize: "16px",
            color: "#fff",
          }}
          variant="solid"
          _hover={{ bg: "#fff !important ", color: "#000" }}
        >
          Take the quiz
        </Button>
      </Box>
    </Box>
  );
};

export default QuizAd;
