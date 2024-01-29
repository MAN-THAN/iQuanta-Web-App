import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
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
import { Check, Clock, DollarSignIcon, Share2, Target, X } from "lucide-react";
import { GrAdd } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ChallengeDetailJoin = ({ isOpen, onClose, challengeData }) => {
  const {
    title,
    timePerQuestion,
    totalQuestions,
    createdAt,
    difficultyLevel,
    createdBy,
    topicId,
    subTopicId,
    challengeType,
    participants,
  } = challengeData?.postTypeId || {};
  const { _id: uid } = useSelector((state) => state?.userData);
  useEffect(()=>{},[challengeData])
  console.log("%%%%%",challengeData);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size="3xl">
        <ModalOverlay />
        <ModalContent rounded="2xl" bg="#000" h="85vh">
          <ModalHeader color="white.900" display="flex" justifyContent="space-between">
            <HStack onClick={onClose} cursor="pointer">
              <X onClick={onClose} cursor="pointer" />
              <Text>Your {title} Challenge</Text>
            </HStack>
          </ModalHeader>
          <Box position="relative" h={{ base: "40vh", md: "40vh" }}>
            <VStack p="4" spacing="4" color="white.900" pt={{ base: "5%", md: "5%" }}>
              <Box textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Image
                  boxSize={{ base: "70px", md: "80px" }}
                  rounded="xl"
                  fit="cover"
                  src="/profile.jpeg"
                />
                <Text fontSize="14px" pt="6" color="#8D96A5" fontWeight="600">
                  You’ve posted a {challengeData?.postType} challenge successfully!
                </Text>
              </Box>
            </VStack>
            <Divider w="100px" scale="1" mx="auto" />
            <Box color="white.900" textAlign="center" fontSize={{ base: "14px", md: "18px" }} py="14px">
              <Text width="300px" mx="auto">
                Let’s see who comes out on top this time!
              </Text>
            </Box>
          </Box>
          <ModalBody bg="white.900">
            <Box
              bg="#5146D6"
              color="white.900"
              rounded="2xl"
              width={{ base: "90%", md: "90%" }}
              bottom={{ base: "6%", md: "35%" }}
              left={{ base: "5%", md: "5%" }}
              position="absolute"
              py="4px"
            >
              <Box py="5">
                <Heading textAlign="center" fontSize="24px">
                  {topicId?.title}
                </Heading>
              </Box>
              <Divider />
              <HStack py="6">
                <Box w="100%" h="100%" minW="150px">
                  <Box
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                      <Clock />
                    </Center>
                    <Box>
                      <Text fontSize="14px" color="#EEECEC">
                        Question
                      </Text>
                      <Text fontSize="18px" fontWeight="600">
                        {totalQuestions}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box w="100%" h="100%" minW="150px">
                  <Box
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                      <Clock />
                    </Center>
                    <Box>
                      <Text fontSize="14px" color="#EEECEC">
                        Difficulty Level
                      </Text>
                      <Text fontSize="18px" fontWeight="600">
                        {difficultyLevel}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box w="100%" h="100%" minW="150px">
                  <Box
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Center boxSize="30px" bg="#FFFFFF33" rounded="full" p="1">
                      <Clock />
                    </Center>
                    <Box>
                      <Text fontSize="14px" color="#EEECEC">
                        Time per question
                      </Text>
                      <Text fontSize="18px" fontWeight="600">
                        {timePerQuestion}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </HStack>
            </Box>

            <Center mt="18%" flexDirection="column">
              <Box>
                <Text color="#636363" fontSize="14px">
                  Opponents will be joining soon...
                </Text>
              </Box>
              <AvatarGroup size="md" borderRadius="10px" gap={6} max={5} mt="4">
                {participants?.map((da, i) => (
                  <Avatar borderRadius="10px" border="none" src={da.profilePic} />
                ))}
              </AvatarGroup>
              {createdBy?._id == uid && (
                <Button variant="ghost" alignItems="center" size="sm" border="1px solid" mt="4">
                  <GrAdd fontSize="14px" fontWeight="900" />
                  <Text fontSize="14px" px="1">
                    Add Opponents
                  </Text>
                </Button>
              )}
            </Center>
          </ModalBody>
          <ModalFooter bg="white.900" roundedBottom="2xl">
            {createdBy?._id == uid && (
              <Button
                width="100%"
                variant="solid"
                color="#fff"
                backgroundColor="#000"
                _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
                onClick={() => {
                  alert("define view challenge func");
                }}
              >
                View Challenge
              </Button>
            )}
            {createdBy?._id !== uid && (
              <Button
                width="100%"
                variant="solid"
                color="#fff"
                backgroundColor="#000"
                _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
                onClick={() => {
                  alert("define start challenge func");
                }}
              >
                Start
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChallengeDetailJoin;
