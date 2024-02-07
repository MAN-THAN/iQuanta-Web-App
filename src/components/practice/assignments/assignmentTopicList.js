import BackButton from "@/components/common/backButton";
import AllTopics from "@/components/exams/allTopics";
import PreparationTips from "@/components/exams/preparationTips";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const AssignmentsTopicList = () => {
  const router = useRouter();
  return (
    <>
      <Box bg="#fff" p="6" rounded="2xl">
        <HStack>
          <BackButton />
          <Stack p="0" gap="0">
            <Text fontSize="16px" fontWeight="600">
              Assignments
            </Text>
            <Text fontSize="12px">Topics</Text>
          </Stack>
        </HStack>
        <AllTopics path={"/practice/assignment/1"} />
        <PreparationTips />
      </Box>
    </>
  );
};

export default AssignmentsTopicList;
