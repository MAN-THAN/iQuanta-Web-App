import { randomColors } from "@/utilities/commonFunctions";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Dot } from "lucide-react";
import React from "react";
import FeaturedCoursesCraousel from "./groupExams/featuredCoursesCraousel";
import ImportantNewsCraousel from "./groupExams/importantNewsCraousel";
import { useRouter } from "next/navigation";

const PracticeQAs = () => {
  const router = useRouter();
  return (
    <>
      <Text pt="3" fontWeight="500" fontSize="18px">
        Continue Practice
      </Text>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          minW="300px"
        >
          <HStack align="center" bg="#F1F2F6" rounded="2xl">
            <Box width="48px" height="48px" bg="#5146D6" p="2" rounded="xl">
              <Image alt="image" width="100%" objectFit="cover" src="/ClockCounterClockwise.svg" />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                Vocabulary - Basics
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text>English Language</Text>
                <Dot transform="scale(1.5)" />
                <Text>GMAT</Text>
              </Flex>
            </Stack>
          </HStack>
        </Box>
      </Box>
      <Text fontSize="18px" fontWeight="500" pt="6">
        All Topic
      </Text>
      <Box>
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
                </Text>
              </Flex>
            </Stack>
          </HStack>
          <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
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
                </Text>
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
                </Text>
              </Flex>
            </Stack>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default PracticeQAs;
