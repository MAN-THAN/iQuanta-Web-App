import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import CourseCards from "../courses/courseCards";
import { featursCard } from "@/utilities/comanData";

const YourExam = () => {
  const router = useRouter();

  return (
    <Box mt="4" bg="#fff" roundedTop="2xl" p="4">
      <Text fontSize="22px">Your Exam</Text>
      <Box>
        <HStack pt="6" pb="3" gap="3" maxW="800px" overflowX="scroll">
          {featursCard.map((data, index) => (
            <Box key={index} onClick={() => router.push("/learn/examDetails")}>
              <CourseCards data={data} />
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default YourExam;
