import LearnLayout from "@/components/layouts/learnLayout";
import { Box, Button, HStack, Image, ListItem, OrderedList, Stack, Text, VStack } from "@chakra-ui/react";
import { ArrowLeft, Dot } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ExamDetailsId = () => {
  const router = useRouter();
  return (
    <>
      <LearnLayout>
          <Box bg="#000" color="#fff" p="6" roundedTop="2xl">
            <ArrowLeft size="24px" onClick={() => router.back()} cursor="pointer" />
            <HStack align="center" pt="4" gap="5">
              <Box border="1px solid #fff" rounded="2xl">
                <Image alt="exam image" src="/exam.png" rounded="2xl" />
              </Box>
              <VStack align="start" justify="start" p="0" gap="0">
                <Text fontSize="18px" fontWeight="600">
                  GMAT Exam
                </Text>
                <Text fontSize="14px" fontWeight="500">
                  Computer-adaptive
                </Text>
                <Text display="flex" alignItems="center" fontSize="14px" fontWeight="400" color="#FFFFFF99">
                  Multiple exam dates <Dot /> Next date - 28 Feb
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box bg="#fff" p="6">
            <VStack color="#16222C" align="start">
              <Text fontSize="22px" fontWeight="500" lineHeight="31.8px">
                The Essentials for GMAT
              </Text>
              <Text fontSize="16px" fontWeight="400" lineHeight="21.8px">
                Get admission into a graduate management program, such as MBA and Masters in Finance related courses in
                top business schools across the world.
              </Text>

              <Text fontSize="22px" py="4" fontWeight="500" lineHeight="31.8px">
                Eligibility & Fees
              </Text>
              <Text fontSize="16px" fontWeight="400" lineHeight="21.8px">
                The candidate must have completed 18 years of age; however, there is no upper age limit of the candidate
                applying to take the test. If you are a student falling between the age group of 13 to 17 years, you
                should have permission in writing from your parents or from your legal guardian.
              </Text>

              <Text fontSize="22px" py="4" fontWeight="500" lineHeight="31.8px">
                Eligibility & Fees
              </Text>
              <OrderedList>
                <ListItem>Nationality</ListItem>
                <ListItem>Academic Qualification</ListItem>

                <ListItem>Age criteria</ListItem>

                <ListItem>Academic scores or grades</ListItem>

                <ListItem>Work experience</ListItem>

                <ListItem>Type of undergraduate program</ListItem>

                <ListItem>Medium of instruction</ListItem>

                <ListItem>Number of attempts</ListItem>
              </OrderedList>

              <Text fontSize="22px" py="4" fontWeight="500" lineHeight="31.8px">
                Nationality
              </Text>
              <Text fontSize="16px" fontWeight="400" lineHeight="21.8px">
                People of all nationalities can take the GMAT. All the rules and guidelines prescribed by the GMAC are
                equally applicable to everyone, regardless of which country they come from. An interesting thing to note
                here is that there might be some specific rules about the identity
              </Text>
            </VStack>
          </Box>
          <VStack alignItems="center" justifyContent="center" p="6" bg="#0000000A">
            <Text py="6" fontSize="18px" fontWeight="400">
              Are you preparing for this exam?
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Button
                width="100px"
                sx={{
                  bg: "#fff !important",
                  transition: "background-color 0.3s",
                }}
                color="#000"
                border="1px solid #000"
                _hover={{ color: "#fff", bg: "black !important" }}
              >
                No
              </Button>
              <Button
                width="100px"
                sx={{
                  bg: "#252525 !important",
                  transition: "background-color 0.3s",
                }}
                color="white"
                _hover={{
                  color: "#000000",
                  bg: "white !important",
                  border: "1px solid #000",
                }}
              >
                Yes
              </Button>
            </Stack>
          </VStack>
      </LearnLayout>
    </>
  );
};

export default ExamDetailsId;
