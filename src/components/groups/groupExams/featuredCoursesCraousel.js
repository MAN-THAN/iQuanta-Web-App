import { randomColors } from "@/utilities/commonFunctions";
import { Box, Card, CardBody, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { ChevronRight, Dot } from "lucide-react";
import React from "react";
const FeaturedCoursesCraousel = () => {
  return (
    <Box borderTop="4px solid #EAEAEC" mt="5">
      <Flex alignItems="center" fontSize="16px" fontWeight="600" justifyContent="space-between" py="6">
        <Text>Featured Courses</Text>
        <HStack alignItems="center">
          <Text>View All</Text>
          <ChevronRight />
        </HStack>
      </Flex>
      <Box display="flex" gap="4" overflow="scroll">
        {[...Array(4)].map((e, i) => (
          <Card key={i}
            rounded="2xl"
            width={{ base: "100%", md: "48%" }}
            minW="311px"
            bg={randomColors(["radial-gradient(50% 50% at 50% 50%, #8F8F8F 0%, #575757 100%)", "#5146D6"])}
          >
            <CardBody>
              <Stack color="#fff">
                <Heading fontSize="16px">GRE TOEFL 2021 crash course</Heading>
                <Text fontSize="14px" fontWeight="500">
                  A comprehensive course for all your foreign exams
                </Text>
                <ul className="text-base">
                  <li className="flex">
                    <span>
                      <Dot transform="scale(1.5)" />
                    </span>
                    <span style={{ fontSize: "14px" }}>100+ sessions of live classes, mock tests & quizzes</span>
                  </li>
                  <li className="flex">
                    <span>
                      <Dot transform="scale(1.5)" />
                    </span>
                    <span style={{ fontSize: "14px" }}> Doubt solving and more...</span>
                  </li>
                </ul>
              </Stack>
            </CardBody>
            <Flex align="center" justify="space-between" gap="4" bg="#000" rounded="xl" m="2" padding="3">
              <Stack>
                <Text fontSize="16px" color="#fff">
                  ₹2,700
                </Text>
                <HStack fontSize="10px" textAlign="start">
                  <strike className="text-gray-500 text-sm">₹3000</strike>
                  <span className="text-green-500 text-sm">10% Off</span>
                </HStack>
              </Stack>
              <Stack>
                <Text fontSize="16px" color="#fff">
                  4 Months
                </Text>
                <HStack fontSize="10px" textAlign="start">
                  <p className="text-gray-400 text-sm">
                    Next Batch <span className="text-white"> - 1st Mar</span>
                  </p>
                </HStack>
              </Stack>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedCoursesCraousel;
