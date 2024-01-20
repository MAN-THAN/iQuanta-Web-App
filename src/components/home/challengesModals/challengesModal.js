import React, { useState, useMemo } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Stack,
  HStack,
  Box,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  UnorderedList,
  ListItem,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Image,
  Select,
  Portal,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { ChevronDown, ChevronRight, Minus, Plus, SearchIcon, ChevronLeft } from "lucide-react";
import topicsData from "@/utilities/topicsDummy";
import { useQuery, useMutation } from "react-query";
import { getAllTopics } from "@/api/feed/user/challenge";
import { getSubtopics } from "@/api/feed/user/challenge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbRuler } from "react-icons/tb";
import { useSelector } from "react-redux";
import { getFriendList } from "@/api/feed/user/friendList";
import { TopicList } from "../challenge/topicList";
import { SubtopicList } from "../challenge/subtopicList";

const ChallengesModal = ({ isOpen, onClose, triggeredFrom }) => {
  const [showTopicList, setShowTopicList] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState([]);
  const [showSubTopicList, setShowSubTopicList] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(60);
  const [difficulty, setDifficulty] = useState();
  const [description, setDescription] = useState();
  const [topicList, setTopicList] = useState([]);
  const [subtopicList, setSubtopicList] = useState([]);
  const [showConfirmationModal, setConfirmationModal] = useState(false);
  const { profilePic, _id: uid } = useSelector((state) => state.userData);
  const [friendList, setFriendList] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [searchFriend, setSearchFriend] = useState();
  console.log(topicList);
  console.log(selectedTopic, "selectedTopic");
  console.log(selectedSubtopic, "selectedSubtopic");
  console.log(subtopicList, "subtopicList");
  console.log(showSubTopicList, showTopicList);

  const resetState = () => {
    setShowTopicList(false);
    setShowSubTopicList(false);
    setSelectedTopic([]);
    setSelectedSubtopic([]);
    setConfirmationModal(false);
  };
  const friendListQuery = useQuery({
    queryKey: ["getFriendList", uid],
    queryFn: () => getFriendList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setFriendList(res?.data.data?.friendList),
  });
  console.log(friendList, "friendalIST");

  const handleSubmit = () => {
    if (showSubTopicList) {
      setShowTopicList(true);
      setShowSubTopicList(false);
    } else if (showTopicList) {
      setShowTopicList(false);
      setShowSubTopicList(false);
    } else if (!showTopicList && !showSubTopicList && selectedTopic.length > 0) {
      setConfirmationModal(true);
    }
  };
  // Search Func
  const filteredFriends = useMemo(() => {
    if (!searchFriend) {
      return friendList;
    }
    return friendList.filter((item) => item?.name.toLowerCase().startsWith(searchFriend.toLowerCase()));
  }, [friendList, searchFriend]);

  return (
    <>
      <Modal
        size="lg"
        isOpen={isOpen}
        onClose={() => {
          onClose();
          resetState();
        }}
      >
        <ModalOverlay />
        <ModalContent bg="white.900" color="#000" height="80vh">
          <ModalCloseButton />
          <ModalHeader>
            {(() => {
              if (showTopicList) {
                return (
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Box marginTop={"2px"}>
                      <ChevronLeft
                        onClick={() => {
                          setShowTopicList(false);
                        }}
                        cursor={"pointer"}
                      />
                    </Box>
                    <Text marginLeft={"0.5em"}>Select (s) Topics</Text>
                  </Box>
                );
              } else if (showSubTopicList) {
                return (
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Box marginTop={"2px"}>
                      <ChevronLeft
                        cursor={"pointer"}
                        onClick={() => {
                          setShowSubTopicList(false);
                          setShowTopicList(true);
                        }}
                      />
                    </Box>
                    <Text marginLeft={"0.5em"}>Select (s) Sub Topics</Text>
                  </Box>
                );
              } else {
                return (
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Text marginLeft={"0.5em"}>New Challenge</Text>
                  </Box>
                );
              }
            })()}
          </ModalHeader>
          <ModalBody overflow={"scroll"}>
            {(() => {
              if (showTopicList) {
                return (
                  <TopicList
                    topicList={topicList}
                    setTopicList={setTopicList}
                    selectedTopic={selectedTopic}
                    setSelectedTopic={setSelectedTopic}
                    setShowTopicList={setShowTopicList}
                    setShowSubTopicList={setShowSubTopicList}
                    setSubtopicList={setSubtopicList}
                  />
                );
              } else if (showSubTopicList) {
                return (
                  <SubtopicList
                    subtopicList={subtopicList}
                    setSubtopicList={setSubtopicList}
                    selectedSubtopic={selectedSubtopic}
                    setSelectedSubtopic={setSelectedSubtopic}
                  />
                );
              } else if (showConfirmationModal) {
                return (
                  <Box w="100%" display={"flex"} justifyContent={"center"} flexDirection={"column"} gap={"1em"}>
                    <Box height={"5.5em"} width={"100%"} bgColor={"#5146D6"} p={"1.2em"} borderRadius={"10px"}>
                      <Flex gap={"1em"}>
                        <Image
                          src={profilePic}
                          alt="profile pic"
                          width={"3em"}
                          height={"3em"}
                          borderRadius={"8px"}
                        ></Image>
                        <Box>
                          <Text>You want to challenge in</Text>
                          <Text fontWeight={"700"}>{selectedTopic?.map((i) => i.title + " ")}</Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Text sx={{ fontSize: "16px", fontWeight: "700" }}>Challenge type</Text>
                    <RadioGroup defaultValue="privateChallenge">
                      <Stack>
                        <Flex justifyContent={"space-between"}>
                          <label htmlFor="openChallenge">
                            <Box cursor={"pointer"}>
                              {" "}
                              <Text sx={{ fontSize: "14px" }}>Open Challenge</Text>
                              <Text sx={{ fontSize: "12px", color: "grey" }}>Anyone from your followers can join</Text>
                            </Box>
                          </label>
                          <Radio id="openChallenge" value="openChallenge" />
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                          <label htmlFor="privateChallenge">
                            <Box cursor={"pointer"}>
                              {" "}
                              <Text sx={{ fontSize: "14px" }}>Private Challenge</Text>
                              <Text sx={{ fontSize: "12px", color: "grey" }}>Only invited people can join</Text>
                            </Box>
                          </label>
                          <Radio id="privateChallenge" value="privateChallenge" />
                        </Flex>
                      </Stack>
                    </RadioGroup>
                    <Text sx={{ fontSize: "16px", fontWeight: "700" }}>Who can join your challenge</Text>
                    <InputGroup size="sm">
                      <InputLeftElement>
                        <SearchIcon />
                      </InputLeftElement>
                      <Input
                        value={searchFriend}
                        onChange={(e) => setSearchFriend(e.target.value)}
                        pl="3.0rem"
                        placeholder="Search for people"
                      />
                    </InputGroup>
                    <UnorderedList listStyleType="none" overflowY="scroll">
                      {filteredFriends?.map((item, ind) => (
                        <ListItem
                          key={ind}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          pr="4"
                          pt="5"
                        >
                          <Box display="flex" alignItems="center">
                            <Image
                              boxSize="2.5rem"
                              fit="cover"
                              borderRadius="md"
                              src={item?.profilePic}
                              alt="Fluffybuns the destroyer"
                              mr="12px"
                            />
                            <Box>
                              <p style={{ fontSize: "16px", color: "#171717" }}>{item?.name}</p>
                              <p
                                style={{
                                  fontSize: "12px",
                                  color: "#636363",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                Master Level
                              </p>
                            </Box>
                          </Box>
                          <Checkbox
                            size="lg"
                            colorScheme="green"
                            isChecked={selectedFriends?.includes(item)}
                            onChange={() =>
                              setSelectedFriends((prev) => {
                                const isIncludes = prev.includes(item);
                                if (isIncludes) {
                                  return prev.filter((i, ind) => i?._id !== item?._id);
                                } else {
                                  return [...prev, item];
                                }
                              })
                            }
                          />
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                );
              } else {
                return (
                  <Box>
                    <Stack>
                      <HStack align="center" justifyContent="space-between"></HStack>
                      <FormControl>
                        <FormLabel>You want to challenge in</FormLabel>
                        <Menu isLazy>
                          <MenuButton
                            border="1px solid #8D96A5"
                            rounded="lg"
                            p="1"
                            onClick={() => setShowTopicList(true)}
                          >
                            <Box display="flex" alignItems="center" px="2" justifyContent="space-between">
                              {/* <Text fontSize="14px">Select the topic(s)</Text>
                              <ChevronDown size="14px" /> */}
                              <Menu>
                                <MenuButton>
                                  {selectedTopic?.length > 0 ? selectedTopic[0].title + "..." : "Select the topic(s)"}
                                </MenuButton>
                                <Portal>
                                  <MenuList></MenuList>
                                </Portal>
                              </Menu>
                            </Box>
                          </MenuButton>
                        </Menu>
                      </FormControl>
                      <HStack gap="30" py="4">
                        <FormControl>
                          <FormLabel>Questions</FormLabel>
                          <Box border="1px solid #8D96A5" rounded="lg" p="1">
                            <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                              <Minus
                                onClick={() => {
                                  if (totalQuestions > 1) {
                                    setTotalQuestions((totalQuestions) => totalQuestions - 1);
                                  }
                                }}
                                size="18px"
                              />
                              <Text>{totalQuestions}</Text>
                              <Plus
                                onClick={() => setTotalQuestions((totalQuestions) => totalQuestions + 1)}
                                size="18px"
                              />
                            </Box>
                          </Box>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Time per question</FormLabel>
                          <Box border="1px solid #8D96A5" rounded="lg" p="1">
                            <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                              <Minus
                                onClick={() => {
                                  if (timePerQuestion > 10) {
                                    setTimePerQuestion((timePerQuestion) => timePerQuestion - 10);
                                  }
                                }}
                                size="18px"
                              />
                              <Text>{timePerQuestion} sec</Text>
                              <Plus
                                onClick={() => {
                                  if (timePerQuestion < 1000) {
                                    setTimePerQuestion((timePerQuestion) => timePerQuestion + 10);
                                  }
                                }}
                                size="18px"
                              />
                            </Box>
                          </Box>
                        </FormControl>
                      </HStack>
                      <FormControl py="4">
                        <FormLabel>Difficulty</FormLabel>
                        <Select
                          value={difficulty}
                          onChange={(e) => setDifficulty(e.target.value)}
                          placeholder="Select difficulty"
                          maxWidth={"40%"}
                        >
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </Select>
                      </FormControl>
                    </Stack>
                    <Stack borderTop="2px solid" mt="4" py="4">
                      <Text fontWeight="600" color="#000">
                        Say something to your opponents
                      </Text>
                      <Textarea
                        name="textToOpponent"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        border="1px solid lightgrey"
                        // onFocus={}
                      ></Textarea>
                    </Stack>
                  </Box>
                );
              }
            })()}
          </ModalBody>
          <ModalFooter>
            <Button
              w="full"
              sx={{
                bg: "black !important",
                color: "#fff",
                margin: "0 auto",
                fontSize: "12px",
              }}
              variant="solid"
              isDisabled={
                showConfirmationModal && selectedFriends?.length > 0
                  ? false
                  : (selectedTopic?.length > 0 || selectedSubtopic?.length > 0) && !showConfirmationModal
                  ? false
                  : true
              }
              onClick={handleSubmit}
            >
              {showTopicList || showSubTopicList ? <>Done</> : showConfirmationModal ? <>Post</> : <>Next</>}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChallengesModal;
