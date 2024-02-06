import React, { useCallback, useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Divider } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import RowButton from "../../homePostComponents/rowButton";
import ParticipantsModal from "../../homePostComponents/participantsModal";
import CreateMemeModal from "../../homePostComponents/createMemeModal";
import { createGroupPost } from "@/api/feed/groups/post";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPost } from "@/api/feed/user/posts";
import { DataURIToBlob } from "@/utilities/utilityFunction";
import CreateBasicModal from "../../homePostComponents/createBasicModal";
import randomstring from 'randomstring';
const DiscussionModal = ({ isOpen, onClose, clickPhoto, triggeredFrom, finalRef }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState("");
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("text");
  const [pollOption, setPollOption] = useState(false);
  const [participantsShow, setParticipantsShow] = useState(false);
  const [createMemeShow, setCreateMemeShow] = useState(false);
  const [options, setOptions] = useState([{ id: 1, title: "" }]);
  const [selectedType, setSelectedType] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [privacyType, setPrivacyType] = useState("public");
  const [tempFiles, setTempFiles] = useState([]);
  const [hashTags, setHashTags] = useState([]);
  const [taggedPeople, setTaggedPeople] = useState([]);
  const [taggedTopic, setTaggedTopic] = useState([]);
  const queryClient = useQueryClient();
  const { name, _id: uid } = useSelector((state) => state.userData);
  const { _id: groupId } = useSelector((state) => state.groupData);
  const handleTypingStart = useCallback(() => {
    setIsTyping(true);
  }, []);

  const handleButtonClick = useCallback((type) => {
    setSelectedType(type);
  }, []);
  const handleClick = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const handleChange = async (event) => {
    const files = event.target.files;
    setTempFiles([...tempFiles, ...files]);
    let fileList = Object.keys(files).map((item) => {
      return URL.createObjectURL(files[item]);
    });
    setSelectedFiles([...selectedFiles, ...fileList]);
  };

  const handleCreatePost = async (data) => {
    if (selectedComponent == "poll") {
      let pollData = { title: text, privacyType: privacyType, options: options, postType: "poll" };
      if (triggeredFrom == "group") {
        pollData.groupId = groupId;
      }
      mutation.mutate(pollData, "json");
    }
    if (selectedComponent == "debate") {
      let debateData = { title: text, privacyType: privacyType, participants: participants, postType: "debate" };
      if (triggeredFrom == "group") {
        debateData.groupId = groupId;
      }
      mutation.mutate(debateData, "json");
    }
    if (selectedComponent == "photo") {
      const formData = new FormData();
      // Append each file to the FormData object
      for (let i = 0; i < tempFiles.length; i++) {
        if (tempFiles[i].type.includes("video")) {
          setSelectedComponent("video");
        }
        formData.append("file", tempFiles[i]);
      }
      formData.append("postType", selectedComponent);
      formData.append("title", text);
      formData.append("privacyType", privacyType);
      for (let i = 0; i < taggedPeople.length; i++) {
        formData.append("taggedPeople", taggedPeople[i]);
      }
      for (let i = 0; i < taggedTopic.length; i++) {
        formData.append("taggedTopic", taggedTopic[i]);
      }
      for (let i = 0; i < hashTags.length; i++) {
        formData.append("hashtags", hashTags[i]);
      }
      if (triggeredFrom == "group") {
        formData.append("groupId", groupId);
      }
      mutation.mutate(formData, "form");
    }
    if (selectedComponent == "video") {
    }
    if (selectedComponent == "fileUpload") {
    }
   if (selectedComponent == "memes") {
    
     let file = DataURIToBlob(data.dataUrl);
         const formData = new FormData();
         const filename = randomstring.generate(8)+'.jpg';
         formData.append('file', file,filename );
         formData.append("postType", 'memes');
         formData.append("title", data.text);
         formData.append("privacyType", privacyType);
        for (let i = 0; i < taggedPeople.length; i++) {
          formData.append("taggedPeople", taggedPeople[i]);
        }
        for (let i = 0; i < taggedTopic.length; i++) {
          formData.append("taggedTopic", taggedTopic[i]);
        }
        
        if (triggeredFrom == "group") {
          formData.append("groupId", groupId);
        }
        mutation.mutate(formData, "form");
      }
    
  };

  const handleOptionButtonClick = useCallback((componentName) => {
    setPollOption(true);
    setSelectedComponent(componentName);
    if (componentName === "memes") {
      setCreateMemeShow(true);
    }
  }, []);
  const closeParticipants = useCallback(() => {
    setParticipantsShow(false);
  }, []);
  const mutation = useMutation({
    mutationFn: (payload, contentType) =>
      triggeredFrom == "group" ?  createGroupPost(payload, contentType, uid):createPost(payload, contentType, uid) ,
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("post created successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      triggeredFrom == "group" ?queryClient.invalidateQueries("getGroupPosts") :queryClient.invalidateQueries("getAllPosts");
      setText();
      setSelectedFiles([]);
      setOptions([]);
      setSelectedComponent(null);
      onClose();
    },
    onSettled: (data, error, variables, context) => {},
  });
  console.log(JSON.stringify(taggedPeople), "taggedPeople");
  return (
    <>
      <Modal
        isOpen={isOpen}
        size="auto"
        onClose={() => {
          setSelectedComponent(null);
          onClose();
        }}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        {selectedComponent == "memes" ? (
          <CreateMemeModal
            handleTypingStart={handleTypingStart}
            selectedType={selectedType}
            fileInputRef={fileInputRef}
            handleClick={handleClick}
            handleOptionButtonClick={handleOptionButtonClick}
            handleChange={handleChange}
            selectedFiles={selectedFiles}
            handleButtonClick={handleButtonClick}
            onClose={onClose}
            createPost={handleCreatePost}
          />
        ) : !participantsShow ? (
          <ModalContent maxW="xl" position="absolute" bg="white.900" rounded="2xl" color="#000" height="60vh">
            <CreateBasicModal
              privacyType={privacyType}
              setPrivacyType={setPrivacyType}
              text={text}
              setText={setText}
              handleTypingStart={handleTypingStart}
              setIsTyping={setIsTyping}
              setTaggedPeople={setTaggedPeople}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              tempFiles={tempFiles}
              setTempFiles={setTempFiles}
              selectedComponent={selectedComponent}
              options={options}
              setOptions={setOptions}
              setParticipantsShow={setParticipantsShow}
              setTaggedTopic={setTaggedTopic}
              setHashTags={setHashTags}
            />
            <ModalFooter flexDirection="column" alignItems="start">
              <RowButton
                fileInputRef={fileInputRef}
                handleClick={handleClick}
                handleChange={handleChange}
                selectedFiles={selectedFiles}
                handleOptionButtonClick={handleOptionButtonClick}
                clickPhoto={clickPhoto}
              />
              <Button
                w="full"
                sx={{
                  bg: "black !important",
                  color: "#fff",
                  fontSize: "12px",
                }}
                variant="solid"
                onClick={handleCreatePost}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ParticipantsModal
            closeParticipants={closeParticipants}
            participants={participants}
            setParticipants={setParticipants}
            triggeredFrom={triggeredFrom}
            setParticipantsShow={setParticipantsShow}
          />
        )}
      </Modal>
    </>
  );
};
export default DiscussionModal;
