import React, { useCallback, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Stack,
  HStack,
  Box,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  Flex,
  Image,
  Textarea,
  Divider,
  UnorderedList,
  VStack,
  CloseButton,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import RowButton from "../homePostComponents/rowButton";
import ColumnButtons from "../homePostComponents/columnButtons";
import ImagePreview from "../homePostComponents/ImagePreview";
import PollInputs from "../homePostComponents/pollInputs";
import DebateCard from "../homePostComponents/debateCard";
import ParticipantsModal from "../homePostComponents/participantsModal";
import FileUploadButton from "../homePostComponents/fileUploadButton";
import CreateMemeModal from "../homePostComponents/createMemeModal";
import PostTypeMenu from "@/components/common/postTypeMenu";
import { createPost } from "@/api/feed/userPost";
import { createGroupPost } from "@/api/feed/groups/post";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DiscussionModal = ({ isOpen, onClose, clickPhoto ,triggeredFrom,groupId}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState();
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("text");
  const [pollOption, setPollOption] = useState(false);
  const [participantsShow, setParticipantsShow] = useState(false);
  const [createMemeShow, setCreateMemeShow] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [tempFiles,setTempFiles]=useState([]);
  const queryClient = useQueryClient();
  const { name, _id: uid } = useSelector((state) => state.userData);
  
  const handleTypingStart = useCallback(() => {
    setIsTyping(true);
  }, []);
  
  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = async (event) => {
  const files = event.target.files;
  
  setTempFiles([...tempFiles,...files]);
  let fileList = Object.keys(files).map(item=>{
    
    return URL.createObjectURL(files[item]);
    })
  setSelectedFiles([...selectedFiles,...fileList]);
    
  };
console.log(options, "options")
  const handleCreatePost=async(event)=>{
    const formData = new FormData();

      // Append each file to the FormData object
      for (let i = 0; i < tempFiles.length; i++) {
        if(tempFiles[i].type.includes('video'))
        {
          setSelectedComponent('video');
        }
        formData.append('file', tempFiles[i]);
      }
      console.log("95$$$$$$",selectedComponent,text, "options-->",options);
      // let data = { 
      //    //postType: selectedComponent === "fileUpload" ? selectedType : selectedComponent,
      //    postType:selectedType,
      //    //options: options,
      //    title:text,
      //    post: tempFiles[0].name 
      //   };
      formData.append('postType',selectedComponent);
      formData.append('title', text);
      if(triggeredFrom=="group"){
        console.log("group106",groupId,triggeredFrom);
      formData.append('groupId', groupId);
      }
      formData.append("options", options)
      mutation.mutate(formData);
  }

  
  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
    setTempFiles((prevFiles)=>{
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    })
  };

  const handleOptionButtonClick = (componentName) => {
    setPollOption(true);
    setSelectedComponent(componentName);
    if (componentName === "meme") {
      setCreateMemeShow(true);
    }
  };

  const handleParticipants = () => {
    setParticipantsShow(true);
  };

  const closeParticipants = () => {
    setParticipantsShow(false);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "photo":
      return <ImagePreview selectedFilesBlob={selectedFiles} selectedFiles={tempFiles} removeImage={handleRemoveImage} />;
      case "video":
      return <ImagePreview selectedFilesBlob={selectedFiles} selectedFiles={tempFiles} removeImage={handleRemoveImage} />;
      case "debate":
        return <DebateCard handleParticipants={handleParticipants} />;
      case "poll":
        return <PollInputs inputFields={options} setInputFields={setOptions} />;
      case "fileUpload":
        return <FileUploadButton selectedFiles={selectedFiles} removeImage={handleRemoveImage} />;
      default:
        return null;
    }
  };
  const mutation = useMutation({
    mutationFn: (payload) => triggeredFrom=="user"?createPost(payload, uid):createGroupPost(payload,uid),
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
      console.log(res);
      queryClient.invalidateQueries("getAllPosts");
      setText();
      setSelectedFiles([]);
      setOptions([]);
      setSelectedComponent(null);
      onClose();
    },
    onSettled: (data, error, variables, context) => {},
  });
  

  return (
    <>
      <Modal
        isOpen={isOpen}
        size="auto"
        onClose={() => {
          setSelectedComponent(null);
          onClose();
        }}
      >
        <ModalOverlay />
        {selectedComponent == "meme" ? (
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
          />
        ) : !participantsShow ? (
          <ModalContent maxW="xl" position="absolute" bg="white.900" rounded="2xl" color="#000" height="60vh">
            <ModalBody
              overflowY="scroll"
              overflowX="hidden"
              height="30vh"
              css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
              sx={{
                "-webkit-overflow-scrolling": "touch",
                scrollBehavior: "smooth",
              }}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <ModalCloseButton position="absolute" left="2" top="2" />
                <Text fontSize="16px" pl="6" fontWeight="600">
                  New Discussion
                </Text>
                <Box>
                  <PostTypeMenu />
                </Box>
                {/* <Menu isLazy>
                  <MenuButton border="1px solid #8D96A5" rounded="lg" p="1">
                    <Box display="flex" alignItems="center">
                      <Text fontSize="14px">Public</Text>
                      <ChevronDown size="14px" />
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Public</MenuItem>
                    <MenuItem>Private</MenuItem>
                    <MenuItem>Friends Only</MenuItem>
                  </MenuList>
                </Menu> */}
              </Flex>
              <Stack direction="column" pt="4">
                <HStack align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "280px",
                    }}
                  >
                    <Image boxSize="2.5rem" borderRadius="md" src="/man1.jpg" alt="user profile image" mr="12px" />
                    <Box>
                      <p style={{ fontSize: "16px", color: "#171717" }}>{name}</p>
                      <p style={{ fontSize: "12px", color: "#636363" }}>Grand Master</p>
                    </Box>
                  </Box>
                </HStack>
                <Box pt="2">
                  <Textarea
                    width="full"
                    height="auto"
                    border="none"
                    placeholder="Write your post here..."
                    resize="none"
                    onInput={handleTypingStart}
                    onBlur={(e) => {
                      if (!e.target.value.trim()) {
                        setIsTyping(false);
                      }
                    }}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                </Box>
              </Stack>
            </ModalBody>
            <Box>{renderSelectedComponent()}</Box>
            <Box
              padding="4"
              display="flex"
              overflowY="hidden"
              overflowX="scroll"
              css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
              sx={{
                "-webkit-overflow-scrolling": "touch",
                scrollBehavior: "smooth",
              }}
            ></Box>
            <Divider />
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
          <ModalContent maxW="xl" bg="white.900" rounded="2xl" color="#000" height="60vh">
            <ModalBody
              overflowY="scroll"
              overflowX="hidden"
              css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
              sx={{
                "-webkit-overflow-scrolling": "touch",
                scrollBehavior: "smooth",
              }}
            >
              <ParticipantsModal
                closeParticipants={closeParticipants}
                participants={participants}
                setParticipants={setParticipants}
              />
            </ModalBody>
            <Divider />
            <ModalFooter flexDirection="column" alignItems="start">
              <Button
                w="full"
                sx={{
                  bg: "black !important",
                  color: "#fff",
                  fontSize: "12px",
                }}
                variant="solid"
                onClick={() => setParticipantsShow(false)}
              >
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default DiscussionModal;
