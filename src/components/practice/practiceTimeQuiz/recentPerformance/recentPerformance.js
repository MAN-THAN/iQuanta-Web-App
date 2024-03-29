import { Box, Card, CardFooter, CardHeader, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const RecentPerformance = () => {
  const router = useRouter();
  return (
    <Box p="4" bg="white.900" mt="4">
      <HStack justifyContent="space-between">
        <Text fontSize="18px" fontWeight="600">
          Recent Performance
        </Text>
        <Text
          fontSize="16px"
          fontWeight="600"
          display="flex"
          alignItems="center"
          onClick={() => router.push("/recentPerformance")}
        >
          View all <ChevronRight />
        </Text>
      </HStack>
      <Box display="flex" overflow="scroll" gap="4" alignItems="center">
        {[...Array(4)].map(() => (
          <Card bg="#5146D6" color="white.900" minW="350px" rounded="2xl" overflow="hidden" mt="4">
            <CardHeader fontWeight="600">Reasoning - Logical, Verbal</CardHeader>
            <Stack px="4" gap="8">
              <Flex justifyContent="space-between" alignItems="center">
                <HStack>
                  <Image />
                  <Stack>
                    <Text fontSize="12px">Difficulty</Text>
                    <Text fontSize="14px">Beginner</Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Image />
                  <Stack>
                    <Text fontSize="12px">Correct Answer</Text>
                    <Text fontSize="14px">3/10</Text>
                  </Stack>
                </HStack>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" pb="6">
                <HStack>
                  <Image />
                  <Stack>
                    <Text fontSize="12px">Difficulty</Text>
                    <Text fontSize="14px">Beginner</Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Image />
                  <Stack>
                    <Text fontSize="12px">Correct Answer</Text>
                    <Text fontSize="14px">3/10</Text>
                  </Stack>
                </HStack>
              </Flex>
            </Stack>
            <CardFooter bg="#DCDAF7" px="4" py="2">
              <Text fontSize="12px" color="#636363">
                Yesterday
              </Text>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RecentPerformance;
