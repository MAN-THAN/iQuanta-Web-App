import { Box, HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import BackButton from "../common/backButton";
import DifficultyModal from "../common/difficultyModal";
import LockedModal from "../common/lockedModal";
import { Lock, LockKeyhole } from "lucide-react";

const PracticeSubTopic = () => {
  const { isOpen: isOpenLevels, onOpen: onOpenLevels, onClose: onCloseLevels } = useDisclosure();
  const { isOpen: isOpenLocked, onOpen: onOpenLocked, onClose: onCloseLocked } = useDisclosure();

  const suntopicDetails = [
    {
      tittle: "Vocabulary - Basic",
      des: "Build vocabulary to improve your ability to read, comprehend and respond",
      status: "unlocked",
    },
    {
      tittle: "Grammar - Basic",
      des: "Build vocabulary to improve your ability to read, comprehend and respond",
      status: "locked",
    },
  ];

  return (
    <>
      <DifficultyModal isOpen={isOpenLevels} onClose={onCloseLevels} />
      <LockedModal isOpen={isOpenLocked} onClose={onCloseLocked} />
      <Box bg="#fff" p="6" rounded="2xl">
        <HStack gap="6">
          <BackButton />
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
          {suntopicDetails.map((da, i) => (
            <HStack key={i} align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
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
              <Stack pl="3" onClick={da.status !== "unlocked" ? onOpenLocked : onOpenLevels} cursor="pointer">
                <Text fontSize="16px" fontWeight="500" p="0" display="flex" alignItems='center' gap='4'>
                  {da.tittle} {da.status === "locked" ? <LockKeyhole size='16px'/> : ""}
                </Text>
                <Text fontSize="12px" color="#666666">
                  {da.des}
                </Text>
              </Stack>
            </HStack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default PracticeSubTopic;

//    <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
//           <Box
//             width="50px"
//             height="50px"
//             bg="#51D3E5"
//             p="2"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             rounded="xl"
//           >
//             <Text color="#fff" fontSize="32px" fontWeight="500">
//               A
//             </Text>
//           </Box>
//           <Stack pl="3">
//             <Text fontSize="16px" fontWeight="500" p="0">
//               Vocabulary - Advance
//               <Text fontSize="12px" color="#666666">
//                 Build vocabulary to improve your ability to read, comprehend and respond
//               </Text>
//             </Text>
//           </Stack>
//         </HStack>
//         <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
//           <Box
//             width="50px"
//             height="50px"
//             bg="#E56C51"
//             p="2"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             rounded="xl"
//           >
//             <Text color="#fff" fontSize="32px" fontWeight="500">
//               G
//             </Text>
//           </Box>
//           <Stack pl="3">
//             <Text fontSize="16px" fontWeight="500" p="0">
//               Grammar
//               <Text fontSize="12px" color="#666666">
//                 Build vocabulary to improve your ability to read, comprehend and respond
//               </Text>
//             </Text>
//           </Stack>
//         </HStack>
//         <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
//           <Box
//             width="50px"
//             height="50px"
//             bg="#E551B3"
//             p="2"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             rounded="xl"
//           >
//             <Text color="#fff" fontSize="32px" fontWeight="500">
//               R
//             </Text>
//           </Box>
//           <Stack pl="3">
//             <Text fontSize="16px" fontWeight="500" p="0">
//               Reading
//               <Text fontSize="12px" color="#666666">
//                 Build vocabulary to improve your ability to read, comprehend and respond
//               </Text>
//             </Text>
//           </Stack>
//         </HStack>
