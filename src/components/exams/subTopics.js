import React from "react";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import MyNotes from "@/components/learn/myNotes";
import { useRouter } from "next/navigation";
import LearnLayout from "@/components/layouts/learnLayout";

const SubTopics = () => {
  const router = useRouter();
  return (
    <> 
        <Box bg="#fff" p="6" rounded="2xl">
          <HStack>
            <ArrowLeft />
            <Stack p="0" gap="0">
              <Text fontSize="16px" fontWeight="600">
                English Language
              </Text>
              <Text fontSize="12px">Learn</Text>
            </Stack>
          </HStack>
          <Text fontSize="18px" fontWeight="500" pt="4">
            Sub-topics
          </Text>
          <Stack>
            <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
              <Box
                width="50px"
                height="50px"
                bg="#5146D6"
                p="2"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="xl"
              >
                <Text color="#fff" fontSize="32px" fontWeight="500">
                  B
                </Text>
              </Box>
              <Stack pl="3" onClick={() => router.push(`/learn/exams/subTopics/0`)} cursor="pointer">
                <Text fontSize="16px" fontWeight="500" p="0">
                  Vocabulary - Basic
                  <Text fontSize="12px" color="#666666">
                    Build vocabulary to improve your ability to read, comprehend and respond
                  </Text>
                </Text>
              </Stack>
            </HStack>
            <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
              <Box
                width="50px"
                height="50px"
                bg="#51D3E5"
                p="2"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="xl"
              >
                <Text color="#fff" fontSize="32px" fontWeight="500">
                  A
                </Text>
              </Box>
              <Stack pl="3">
                <Text fontSize="16px" fontWeight="500" p="0">
                  Vocabulary - Advance
                  <Text fontSize="12px" color="#666666">
                    Build vocabulary to improve your ability to read, comprehend and respond
                  </Text>
                </Text>
              </Stack>
            </HStack>
            <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
              <Box
                width="50px"
                height="50px"
                bg="#E56C51"
                p="2"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="xl"
              >
                <Text color="#fff" fontSize="32px" fontWeight="500">
                  G
                </Text>
              </Box>
              <Stack pl="3">
                <Text fontSize="16px" fontWeight="500" p="0">
                  Grammar
                  <Text fontSize="12px" color="#666666">
                    Build vocabulary to improve your ability to read, comprehend and respond
                  </Text>
                </Text>
              </Stack>
            </HStack>
            <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
              <Box
                width="50px"
                height="50px"
                bg="#E551B3"
                p="2"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="xl"
              >
                <Text color="#fff" fontSize="32px" fontWeight="500">
                  R
                </Text>
              </Box>
              <Stack pl="3">
                <Text fontSize="16px" fontWeight="500" p="0">
                  Reading
                  <Text fontSize="12px" color="#666666">
                    Build vocabulary to improve your ability to read, comprehend and respond
                  </Text>
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </Box>
        <MyNotes />
    
    </>
  );
};

export default SubTopics;
