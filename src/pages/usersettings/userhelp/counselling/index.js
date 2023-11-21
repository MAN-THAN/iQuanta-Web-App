import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
import UserSettingLayout from "@/components/layouts/userSettingLayout";

const CounsellingHelp = () => {
  const router = useRouter();
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              {" "}
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              Free Counselling
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Flex
            px="6"
            gap="3"
            align="center"
            justify="space-between"
            flexWrap="wrap"
          >
            <Card
              align="center"
              size="md"
              width="150px"
              height="150px"
              textAlign="center"
              justify="center"
              bg="#AA3DC81A"
              rounded="lg"
            >
              <Box>
                <Image alt="meeting" src="/meeting.png" />
              </Box>
              <Text p="2" fontSize="14px" fontWeight="500">
                1 on 1 Problem Solving
              </Text>
            </Card>
            <Card
              align="center"
              size="sm"
              width="150px"
              height="150px"
              textAlign="center"
              justify="center"
              bg="#5146D61A"
              rounded="lg"
            >
              <Box>
                <Image alt="school image" src="/school.png" />
              </Box>
              <Text p="2" fontSize="14px" fontWeight="500">
                Get BSchool Info
              </Text>
            </Card>
            <Card
              align="center"
              size="sm"
              width="150px"
              height="150px"
              textAlign="center"
              justify="center"
              bg="#00ADE91A"
              rounded="lg"
            >
              <Box>
                <Image alt="course image" src="/course.png" />
              </Box>
              <Text p="2" fontSize="14px" fontWeight="500">
                Course Guidence
              </Text>
            </Card>
            <Card
              align="center"
              size="sm"
              width="150px"
              height="150px"
              textAlign="center"
              justify="center"
              bg="#FF32001A"
              rounded="lg"
            >
              <Box>
                <Image alt="exam image" src="/exam1.png" />
              </Box>
              <Text p="2" fontSize="14px" fontWeight="500">
                Get Exam Prep Tips
              </Text>
            </Card>
          </Flex>
          <Box
            width="100%"
            bg="#F1F2F3"
            p="3"
            rounded="lg"
            mt="8%"
            cursor="pointer"
            onClick={() =>
              router.push("/usersettings/userhelp/counselling/counsellingForm")
            }
          >
            <Flex align="center" justify="space-between">
              <HStack>
                <Box bg="#5146D6" rounded="lg">
                  <Phone />
                </Box>
                <Stack>
                  <Text fontSize="16px" fontWeight="600">
                    Setup a Call
                  </Text>
                  <Text fontSize="14px" fontWeight="400" color="#636363">
                    Share your contact details with us and we’ll get in touch
                    with you.
                  </Text>
                </Stack>
              </HStack>
              <Box>
                <ChevronRight />
              </Box>
            </Flex>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

CounsellingHelp.getLayout = (page) => <UserSettingLayout>{page}</UserSettingLayout>;

export default CounsellingHelp;
