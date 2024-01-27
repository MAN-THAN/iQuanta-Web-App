import { Box, HStack, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import PastPapersExamList from "./pastPapers/pastPapersExamList";
import LockedModal from "../common/lockedModal";

const PracticeFeature = () => {
  const router = useRouter();
  const { isOpen: isOpenExamList, onClose: onCloseExamList, onOpen: onOpenExamList } = useDisclosure();
  const { isOpen: isOpenLocked, onClose: onCloseLocked, onOpen: onOpenLocked } = useDisclosure();

  return (
    <>
      <PastPapersExamList isOpen={isOpenExamList} onClose={onCloseExamList} />
      <LockedModal isOpen={isOpenLocked} onClose={onCloseLocked} />
      <Box bg="white.900" p="4" mt="4" roundedTop="2xl">
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" gap="3">
          <HStack
            maxWidth={350}
            minWidth="250px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={() => router.push("/practice/qa")}
          >
            <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src="/Filled.svg" />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                Practice QAs
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                Questions specially designed to help you solve complex problems easily.
              </Text>
            </Stack>
          </HStack>
          <HStack
            maxWidth={350}
            minWidth="250px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={() => router.push("/practice/timeQuiz")}
          >
            <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src="/Filled (1).svg" />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                Timed Quiz
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                Solve questions with a real world time pressure of your enterence exam.
              </Text>
            </Stack>
          </HStack>
          <HStack
            maxWidth={350}
            minWidth="250px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={onOpenExamList}
          >
            <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src="/Filled (2).svg" />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                Past Papers
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                A vast repository of past papers that will prepare you for your exams.
              </Text>
            </Stack>
          </HStack>
          <HStack
            maxWidth={350}
            minWidth="250px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={() => router.push("/practice/accelareader")}
          >
            <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src="/Hourglass.svg" />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                Accelareader
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                Practise speed reading and save precious time during your exam.
              </Text>
            </Stack>
          </HStack>
          <HStack
            maxWidth={350}
            minWidth="250px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={onOpenLocked}
          >
            <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src="/LockedWhite.svg" />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                Assignments
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                Practise speed reading and save precious time during your exam.
              </Text>
            </Stack>
          </HStack>
          <HStack
            maxWidth={350}
            minWidth="250px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={()=>router.push("/practice/doubtSolving")}
          >
            <Box minW="40px" minH="40px" bg="#5146D6" rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src="/Filled (4).svg" />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                Doubt Solving
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                Practise speed reading and save precious time during your exam.
              </Text>
            </Stack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default PracticeFeature;
