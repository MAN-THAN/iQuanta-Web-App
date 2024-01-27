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
  Box,
  Text,
} from "@chakra-ui/react";
import {  ChevronLeft } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import { TopicList } from "../topicList";
import { SubtopicList } from "../subtopicList";
import { ConfirmationModal } from "../confirmationModal";
import { createChallenge } from "@/api/feed/user/challenge";
import { useSelector } from "react-redux";
import { BasicModal } from "../basicModal";

const ChallengesModal = ({ isOpen, onClose, triggeredFrom, finalRef }) => {
  const [showTopicList, setShowTopicList] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState([]);
  const [showSubTopicList, setShowSubTopicList] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(60);
  const [difficulty, setDifficulty] = useState("easy");
  const [description, setDescription] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [subtopicList, setSubtopicList] = useState([]);
  const [showConfirmationModal, setConfirmationModal] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [challenegeType, setChallengeType] = useState("Public");
  const [isLoading, setLoading] = useState(false);
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();
  console.log(topicList);
  console.log(selectedTopic, "selectedTopic");
  console.log(selectedSubtopic, "selectedSubtopic");
  console.log(subtopicList, "subtopicList");
  console.log(selectedFriends, "selectedFriends");
  console.log(difficulty, "difficulty");
  console.log(showTopicList, showSubTopicList, showConfirmationModal, selectedTopic);

  const resetState = () => {
    setShowTopicList(false);
    setShowSubTopicList(false);
    setSelectedTopic([]);
    setSelectedSubtopic([]);
    setConfirmationModal(false);
  };

  const handleSubmit = () => {
    if (showSubTopicList) {
      setShowTopicList(true);
      setShowSubTopicList(false);
    } else if (showTopicList) {
      setShowTopicList(false);
      setShowSubTopicList(false);
    } else if (!showTopicList && !showSubTopicList && selectedTopic.length > 0) {
      if (showConfirmationModal) {
        const payload = {
          title: "new challenge",
          description: description,
          topicId: selectedTopic.map((item) => item._id),
          subTopicId: selectedSubtopic.map((item) => item._id),
          participants: selectedFriends.map((item) => item._id),
          challengeType: challenegeType,
          postType: "challenge",
          difficultyLevel: difficulty,
          timePerQuestion: timePerQuestion,
          totalQuestions: totalQuestions,
        };
        mutation.mutate(payload);
      } else {
        setConfirmationModal(true);
      }
    }
  };
  const mutation = useMutation({
    mutationFn: (payload) => createChallenge(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Challenge Created !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      queryClient.invalidateQueries("challengeList");
      onClose();
      resetState();
    },
  });
  return (
    <>
      <Modal
        size="lg"
        isOpen={isOpen}
        onClose={() => {
          onClose();
          resetState();
        }}
        finalFocusRef={finalRef}
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
                    setLoading={setLoading}
                  />
                );
              } else if (showSubTopicList) {
                return (
                  <SubtopicList
                    subtopicList={subtopicList}
                    setSubtopicList={setSubtopicList}
                    selectedSubtopic={selectedSubtopic}
                    setSelectedSubtopic={setSelectedSubtopic}
                    isLoading={isLoading}
                  />
                );
              } else if (showConfirmationModal) {
                return (
                  <ConfirmationModal
                    selectedTopic={selectedTopic}
                    friendList={friendList}
                    setFriendList={setFriendList}
                    selectedFriends={selectedFriends}
                    setSelectedFriends={setSelectedFriends}
                    setChallengeType={setChallengeType}
                    challengeType={challenegeType}
                  />
                );
              } else {
                return (
                  <BasicModal
                    setShowTopicList={setShowTopicList}
                    selectedTopic={selectedTopic}
                    setTotalQuestions={setTotalQuestions}
                    setTimePerQuestion={setTimePerQuestion}
                    setDescription={setDescription}
                    setDifficulty={setDifficulty}
                    totalQuestions={totalQuestions}
                    timePerQuestion={timePerQuestion}
                    difficulty={difficulty}
                    description={description}
                  />
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
      <ToastContainer />
    </>
  );
};

export default ChallengesModal;
