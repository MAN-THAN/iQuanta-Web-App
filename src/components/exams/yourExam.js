import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { examCard } from "@/utilities/comanData";
import ExamCard from "./examCard";

const YourExam = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <Box mt="4" bg="#fff" p="4">
      {path === "/mockTest" ? (
        <Text fontSize="18px" fontWeight="600">
          Practice For
        </Text>
      ) : (
        <Text fontSize="18px" fontWeight="600">
          {" "}
          Your Exam
        </Text>
      )}
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
