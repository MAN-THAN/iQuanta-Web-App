import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
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
const QuizModal = ({ isOpen, onClose }) => {
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
        <ModalContent rounded="2xl" bg="#000" h="90vh">
          <ModalHeader color="white.900" display="flex" justifyContent="space-between">
            <Box onClick={onClose} cursor="pointer">
              <X />
            </Box>
            <Box>
              <Share2 />
            </Box>
          </ModalHeader>
          <Box position="relative" h={{ base: "60vh", md: "60vh" }}>
            <VStack p="4" spacing="4" color="white.900" pt={{ base: "5%", md: "10%" }}>
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
                <Image
                  boxSize={{ base: "70px", md: "100px" }}
                  rounded="xl"
                  fit="cover"
                  src="/static/images/profile.jpeg"
                />
                <Text fontSize="14px" fontWeight="bold">
                  Samayra Sharma
                </Text>
                <Text fontSize="18px" fontWeight="600">
                  Completed Level 4 / 5
                </Text>
              </Box>
            </VStack>
            <Box px={{ base: "10%", md: "20%" }}>{/* CommonStepper and other components */}</Box>
            <Box color="white.900" textAlign="center" fontSize={{ base: "14px", md: "18px" }} py="24px">
              <Text>
                Wow, you are one step closer to leveling up in <br /> Vocabulary basic - Conceptual difficulty!
              </Text>
            </Box>
            <Center>
              <Box display="flex" alignItems="center">
                <Box
                  bg="#5146D6"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  roundedLeft="lg"
                  roundedRight="sm"
                  px="6"
                  py="2"
                >
                  <Text fontSize="14px" color="white.900" fontWeight="500">
                    Total XP : 230
                  </Text>
                </Box>
                <Box
                  bg="#5146D6"
                  maxW="100px"
                  boxSize="45px"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  border="4px solid #000"
                  left="56%"
                >
                  <Text fontSize="14px" color="white.900" fontWeight="500">
                    +30
                  </Text>
                </Box>
              </Box>
            </Center>
          </Box>

          <ModalBody bg="white.900">
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              bg="#5146D6"
              color="white.900"
              px={{ base: "4", md: "28" }}
              py="5%"
              mx="auto"
              gap="8"
              rounded="2xl"
              width={{ base: "90%", md: "80%" }}
              bottom={{ base: "16%", md: "15%" }}
              left={{ base: "5%", md: "10%" }}
              position="absolute"
              justifyContent="space-evenly"
            >
              <GridItem w="100%" h="100%" minW="150px">
                <HStack alignItems="start">
                  <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                    <Check />
                  </Center>
                  <Box>
                    <Text fontSize="14px" color="#EEECEC" textAlign="start">
                      Correct answers
                    </Text>
                    <Text fontSize="18px" fontWeight="600">
                      10
                    </Text>
                  </Box>
                </HStack>
              </GridItem>
              <GridItem w="100%" h="100%" minW="150px">
                <HStack alignItems="start">
                  <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                    <Clock />
                  </Center>
                  <Box>
                    <Text fontSize="14px" color="#EEECEC">
                      Time per question
                    </Text>
                    <Text fontSize="18px" fontWeight="600">
                      60 sec
                    </Text>
                  </Box>
                </HStack>
              </GridItem>
              <GridItem w="100%" h="100%" minW="150px">
                <HStack alignItems="start">
                  <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                    <Target />
                  </Center>
                  <Box>
                    <Text fontSize="14px" color="#EEECEC" textAlign="start">
                      Accuracy
                    </Text>
                    <Text fontSize="18px" fontWeight="600">
                      30%
                    </Text>
                  </Box>
                </HStack>
              </GridItem>
              <GridItem w="100%" h="100%" minW="150px">
                <HStack alignItems="start">
                  <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                    <DollarSignIcon />
                  </Center>
                  <Box>
                    <Text fontSize="14px" color="#EEECEC">
                      Correct answers
                    </Text>
                    <Text fontSize="18px" fontWeight="600">
                      10
                    </Text>
                  </Box>
                </HStack>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter bg="white.900" roundedBottom="2xl">
            <Button
              width="100%"
              variant="solid"
              color="#fff"
              onClick={onOpenScratch}
              backgroundColor="#000"
              _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizModal;
