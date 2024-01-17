import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ChevronDown, ChevronRight, Minus, Plus, SearchIcon, ChevronLeft } from "lucide-react";
import topicsData from "@/utilities/topicsDummy";
import { useQuery ,useMutation} from "react-query";
import { getAllTopics } from "@/api/feed/user/challenge";
import { getSubtopics } from "@/api/feed/user/challenge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbRuler } from "react-icons/tb";

const ChallengesModal = ({ isOpen, onClose, triggeredFrom }) => {
  const [showTopicList, setShowTopicList] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState([]);
  const [showSubTopicList, setShowSubTopicList] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(60);
  const [difficulty, setDifficulty] = useState();
  const [description, setDescription] = useState();
  const [topicList, setTopicList] = useState();
  const [subtopicList, setSubtopicList] = useState();

  console.log(topicList);
  console.log(selectedTopic, "selectedTopic");
  console.log(selectedSubtopic, "selectedSubtopic");
  console.log(subtopicList, "subtopicList")

  const showSubTopicLists = (topicId) => {
    // setSelectedTopic(topic);
    mutation.mutate(topicId);
    setShowSubTopicList(true);
    setShowTopicList(false);
  };

  const resetState = () => {
    setShowTopicList(false);
    setShowSubTopicList(false);
    setSelectedTopic([]);
    setSelectedSubtopic([]);
  };
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getTopicsForChallenge", "650445c6fc904d452998918c"],
    queryFn: () => getAllTopics("650445c6fc904d452998918c"),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setTopicList(res.data.data.topics),
  });
  const mutation = useMutation({
    mutationFn: (topicId) => getSubtopics(topicId),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      console.log(res);
      setSubtopicList(res?.data?.data?.subTopic);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const handleSubmit = () => {

  }

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
            {/* {showTopicList ? (
              <Box display={"flex"} justifyContent={"flex-start"}>
                <Box marginTop={"2px"}>
                  <ChevronLeft cursor={"pointer"} />
                </Box>
                <Text marginLeft={"0.5em"}>Select (s) Topics</Text>
              </Box>
            ) : selectedTopic ? (
              "Select (s) Sub Topics"
            ) : (
              "New Challenge"
            )} */}
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
                  <Box>
                    <InputGroup size="md">
                      <InputLeftElement>
                        <SearchIcon />
                      </InputLeftElement>
                      <Input pl="3.0rem" placeholder="Search" />
                    </InputGroup>
                    <Box overflowY="scroll">
                      <UnorderedList listStyleType="none">
                        {topicList?.map((item, ind) => (
                          <ListItem
                            cursor={"pointer"}
                            key={ind}
                            display="flex"
                            py="3"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Checkbox
                              onChange={() => {
                                setSelectedTopic((prev) => {
                                  const isTopicSelected = prev.includes(item?._id);
                                  if (isTopicSelected) {
                                    // const filteredSubtopic = selectedSubtopic.filter((i) => !subtopicList.includes(i));
                                    // setSelectedSubtopic(filteredSubtopic);
                                    return prev.filter((i) => i !== item?._id);
                                  } else {
                                    showSubTopicLists(item?._id);
                                    return [...prev, item?._id];
                                  }
                                });

                              }}
                              isChecked={selectedTopic.includes(item?._id)}
                              gap="4"
                              alignItems="center"
                            >
                              <Box>
                                <Text>{item?.title}</Text>
                                <Text fontSize="12px" color="#636363">
                                  {item?.subtopicCount} Sub Topic
                                </Text>
                              </Box>
                            </Checkbox>
                            <ChevronRight />
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  </Box>
                );
              } else if (showSubTopicList) {
                return (
                  <Box>
                    <InputGroup size="md">
                      <InputLeftElement>
                        <SearchIcon />
                      </InputLeftElement>
                      <Input pl="3.0rem" placeholder="Search" />
                    </InputGroup>
                    <Box overflowY="scroll">
                      {mutation.isLoading ? (
                        <div>Loading</div>
                      ) : (
                        <UnorderedList listStyleType="none">
                          {subtopicList?.map((subtopic, i) => (
                            <ListItem key={i} display="flex" py="3" alignItems="center" justifyContent="space-between">
                              <Checkbox gap="4" alignItems="center" onChange={() => setSelectedSubtopic((prev) => {
                                const isIncluded = selectedSubtopic.includes(subtopic._id);
                                if(isIncluded){
                                  return selectedSubtopic.filter((i) => i !== subtopic._id)
                                }
                                else{
                                  return [...prev, subtopic._id]
                                }
                              })}>
                                <Box>
                                  <Text>{subtopic?.title}</Text>
                                </Box>
                              </Checkbox>
                            </ListItem>
                          ))}
                        </UnorderedList>
                      )}
                    </Box>
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
                              <Text fontSize="14px">Select the topic(s)</Text>
                              <ChevronDown size="14px" />
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
              isDisabled={selectedTopic?.length > 0 || selectedSubtopic?.length > 0 ? false : true}
              onClick={handleSubmit}
            >
              {showTopicList || showSubTopicList ? (<>Done</>) : (<>Next</>)}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChallengesModal;
