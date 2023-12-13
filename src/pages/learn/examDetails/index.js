import { Box, Divider, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import AllTopics from "@/components/exams/allTopics";
import PreparationTips from "@/components/exams/preparationTips";
import { useRouter } from "next/navigation";
import LearnLayout from "@/components/layouts/learnLayout";

const ExamDetails = () => {
  const router = useRouter();

  return (
    <>
      <LearnLayout>
        <Box bg="#fff" p="6" rounded="2xl">
          <HStack>
            <ArrowLeft />
            <Stack p="0" gap="0">
              <Text fontSize="16px" fontWeight="600">
                Foreign Studies
              </Text>
              <Text fontSize="12px">Learn</Text>
            </Stack>
          </HStack>
          <Flex mt="4" align="center" p="4" justify="space-between">
            {[...Array(6)].map((e, index) => (
              <Box key={index} onClick={() => router.push(`/learn/examDetails/${index}`)} cursor="pointer">
                <Image src="/exam.png" rounded="2xl" alt="exam image" />
                <Text textAlign="center" fontSize="14px" pt="4">
                  GMAT
                </Text>
              </Box>
            ))}
          </Flex>
          <Divider stroke="5px" mt="5" />
          <AllTopics />
          <PreparationTips />
        </Box>
      </LearnLayout>
    </>
  );
};

export default ExamDetails;
