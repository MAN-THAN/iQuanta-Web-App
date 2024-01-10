import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { examCard } from "@/utilities/comanData";
import ExamCard from "./examCard";

const YourExam = () => {
  const router = useRouter();

  return (
    <Box mt="4" bg="#fff" roundedBottom="2xl" p="4">
      <Text fontSize="22px">Your Exam</Text>
      <Box>
        <HStack pt="6" pb="3" gap="3" maxW="800px" overflowX="scroll">
          {examCard.map((data, index) => (
            <Box key={index} onClick={() => router.push("/learn/exams")}>
              <ExamCard data={data} />
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default YourExam;
