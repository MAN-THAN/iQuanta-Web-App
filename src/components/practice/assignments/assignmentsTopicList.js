import BackButton from "@/components/common/backButton";
import AllTopics from "@/components/exams/allTopics";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Dot } from "lucide-react";
import React from "react";

const AssignmentsTopicList = () => {
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
        {/* <AllTopics /> */}
        <Stack>
          <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
            <Box width="50px" height="50px" bg="#5146D6" p="2" rounded="xl">
              <Image alt="image" width="100%" objectFit="cover" src="/CirclesThree.png" />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                Quantitative Aptitude
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text>2 Modules</Text>
                <Dot />
                <Text>GMAT</Text> <Dot />
                <Text color="#5146D6" fontWeight="600">
                  Important
                </Text>{" "}
              </Flex>
            </Stack>
          </HStack>
          <HStack
            align="center"
            bg="#F1F2F6"
            p="3"
            mt="4"
            rounded="2xl"
            cursor="pointer"
            onClick={() => {
              router.push("/learn/exams/subTopics");
            }}
          >
            <Box width="50px" height="50px" bg="#51D3E5" p="2" rounded="xl">
              <Image alt="image" width="100%" objectFit="cover" src="/Translate.png" />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                English Language
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text>2 Modules</Text>
                <Dot />
                <Text>GMAT</Text> <Dot />
                <Text color="#5146D6" fontWeight="600">
                  Important
                </Text>
              </Flex>
            </Stack>
          </HStack>
          <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
            <Box width="50px" height="50px" bg="#E56C51" p="2" rounded="xl">
              <Image alt="image" width="100%" objectFit="cover" src="/PuzzlePiece.png" />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                Reasoning
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text>2 Modules</Text>
                <Dot />
                <Text>GMAT</Text> <Dot />
                <Text color="#5146D6" fontWeight="600">
                  Important
                </Text>{" "}
              </Flex>
            </Stack>
          </HStack>
          <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
            <Box width="50px" height="50px" bg="#E551B3" p="2" rounded="xl">
              <Image alt="image" width="100%" objectFit="cover" src="/PresentationChart.png" />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                Data Interpretation
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text>2 Modules</Text>
                <Dot />
                <Text>GMAT</Text> <Dot />
                <Text color="#5146D6" fontWeight="600">
                  Important
                </Text>{" "}
              </Flex>
            </Stack>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default AssignmentsTopicList;
