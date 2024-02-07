import BackButton from "@/components/common/backButton";
import { randomColors } from "@/utilities/commonFunctions";
import { Box, Flex, HStack, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { CheckCircle2, Dot, LockKeyhole, PieChart } from "lucide-react";
import React from "react";

const RecentPerformanceList = () => {
  const data = [
    {
      _id: "6542191eff6cf1a33a34f7d5",
      title: "Assignment 1",
      topic: "650445c6fc904d452998918c",
      status: "paused",
      attemptId: "65840c31f65d8b75c5642091",
      charge: 0,
    },
    {
      _id: "6542191eff6cf1a33a34f7d5",
      title: "Assignment 2",
      topic: "650445c6fc904d452998918c",
      status: "completed",
      attemptId: "65840c31f65d8b75c5642091",
      charge: 0,
    },
    {
      _id: "6542191eff6cf1a33a34f7d5",
      title: "Assignment 3",
      topic: "650445c6fc904d452998918c",
      status: "progressig",
      attemptId: "65840c31f65d8b75c5642091",
      charge: 0,
    },
    {
      _id: "6542191eff6cf1a33a34f7d5",
      title: "Assignment 4",
      topic: "650445c6fc904d452998918c",
      status: "locked",
      attemptId: "65840c31f65d8b75c5642091",
      charge: 0,
    },
  ];

  return (
    <Box bg="#fff" p="6" rounded="2xl">
      <HStack>
        <BackButton />
        <Stack p="0" gap="0">
          <Text fontSize="16px" fontWeight="600">
            Recent Performance
          </Text>
          <Text fontSize="12px">Topics</Text>
        </Stack>
      </HStack>
      <Box py="4">
        <Text fontWeight="600">Full Report Test</Text>
        {data.map((da, i) => (
          <HStack key={i} align="center" bg={"#F1F2F6"} p="3" mt="4" rounded="2xl">
            <Box
              width="50px"
              height="50px"
              bg="orange"
              p="2"
              rounded="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <LockKeyhole size={26} color="#ffffff" strokeWidth={3} absoluteStrokeWidth />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                {da.title}
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text textTransform="capitalize">{da.status}</Text>
                <Dot />
                <Text color="#5146D6" fontWeight="600">
                  Important
                </Text>
              </Flex>
            </Stack>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default RecentPerformanceList;
