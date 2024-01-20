import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  Tag,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
  useSteps,
} from "@chakra-ui/react";
import CommonStepper from "../common/commonStepper";
import { Check, Clock, DollarSignIcon, Share2, Target, X } from "lucide-react";
import ScratchCard from "./scratchCard";
const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
  { title: "Fourth", description: "Select Rooms" },
  { title: "Fifth", description: "Select Rooms" },
];
const WrongResult = ({ isOpen, onClose }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 3,
    count: steps.length,
  });
  const { isOpen: isOpenScratch, onOpen: onOpenScratch, onClose: onCloseScratch } = useDisclosure();
  const containerStyle = {
    position: "reletive",
    background: "url(/partyEffect.svg) center/contain  no-repeat",
    animation: "background 1s infinite",
  };

  return (
    <>
      <ScratchCard isOpen={isOpenScratch} onClose={onCloseScratch} />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size="3xl">
        <ModalOverlay />
        <ModalContent rounded="2xl" bg="#000" h="90vh" position='relative'>
          <ModalHeader color="white.900" display="flex" justifyContent="space-between">
            <Box onClick={onClose} cursor="pointer">
              <X />
            </Box>
            <Box>
              <Share2 />
            </Box>
          </ModalHeader>
          <Box position="relative" h={{ base: "65vh", md: "65vh" }}>
            <VStack p="4" spacing="4" color="white.900" pt={{ base: "5%", md: "4%" }}>
              <style>
                {`
            @keyframes background {
              0%, 50% {
                transform: scale(1) ;
              }
              50% {
                transform: scale(0.8);
              }
            }
          `}
              </style>
              <Box objectFit="contain" position="absolute" top="-40" style={containerStyle}>
                <Image boxSize="500px" src="/partyEffect.svg" />
              </Box>
              <Box textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Image boxSize={{ base: "70px", md: "100px" }} rounded="xl" fit="cover" src="/Shield Fail.svg" />
                <Text fontSize="14px" fontWeight="bold">
                  Oh no
                </Text>
                <Text fontSize="18px" fontWeight="600">
                  Try harder next time!
                </Text>
              </Box>
            </VStack>
            <Box color="white.900" textAlign="center" fontSize={{ base: "14px", md: "18px" }} py="24px"></Box>
          </Box>

          <ModalBody bg="white.900">
            <Box p='4' position='absolute' bottom='0' left='16' width='100%' maxW='650px'>
              <Box bg="#5146D6" roundedTop="2xl" h="25vh" color="white.900">
                <Center pt="6">
                  <Tag>Question 1</Tag>
                </Center>
                <Text textAlign="center" fontSize="18px" fontWeight="600">
                  You chose option C
                </Text>
                <Box></Box>
              </Box>
              <Box bg="#F4F3FE" p="6" roundedBottom="2xl">
                <Text fontSize="16px" color="#000000" fontWeight="400">
                  Leaderboard
                </Text>
                <UnorderedList alignItems="center" py="4" listStyleType="none" spacing={10}>
                  {[...Array(3)].map((data, i) => (
                    <ListItem key={i} alignItems="end">
                      <HStack align="center" justifyContent="space-between">
                        <Flex alignItems="center" gap="6">
                          <Text fontSize="16px" color="#000000" fontWeight="400">
                            #{i + 1}
                          </Text>
                          <Box boxSize="35px">
                            <Image
                              objectFit="cover"
                              width="100%"
                              height="100%"
                              className="rounded-md"
                              src="/man3.jpg"
                              alt="Profile Image"
                            />
                          </Box>
                          <Box>
                            <Text fontSize="18px" color="#000000" fontWeight="400">
                              Aniket Shakhya
                            </Text>
                          </Box>
                        </Flex>
                        <Box display="flex" alignItems="center" gap="4">
                          <Text>3 answers</Text>
                        </Box>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WrongResult;
