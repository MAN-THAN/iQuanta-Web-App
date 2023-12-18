import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import RowButton from "../homePostComponents/rowButton";
import ColumnButtons from "../homePostComponents/columnButtons";
import ImagePreview from "../homePostComponents/ImagePreview";
import PollInputs from "../homePostComponents/pollInputs";
import MemeCard from "../homePostComponents/memeCard";
import DebateCard from "../homePostComponents/debateCard";
import ParticipantsModal from "../homePostComponents/participantsModal";

const DiscussionModal = ({ isOpen, onClose }) => {
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [pollOption, setPollOption] = useState(false);
  const [participantsShow, setParticipantsShow] = useState(false);

  const handleTypingStart = () => {
    setIsTyping(true);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const selectedImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setSelectedFiles((prevFiles) => [...prevFiles, ...selectedImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleOptionButtonClick = (componentName) => {
    setPollOption(true);
    setSelectedComponent(componentName);
  };

  const handleParticipants = () => {
    setParticipantsShow(true);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "meme":
        return <MemeCard />;
      case "debate":
        return <DebateCard handleParticipants={handleParticipants} />;
      case "poll":
        return <PollInputs />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
      >
        <ModalOverlay />
        {!participantsShow ? (
          <ModalContent bg="white.900" color="#000" height="80vh" overflow="hidden">
            <ModalBody>
              <Flex alignItems="center" justifyContent="space-between">
                <Text>New Discussion</Text>
                <Menu isLazy>
                  <MenuButton border="1px solid #8D96A5" rounded="lg" p="1">
                    <Box display="flex" alignItems="center">
                      <Text fontSize="14px">Public</Text>
                      <ChevronDown size="14px" />
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Beginner</MenuItem>
                    <MenuItem>Beginner</MenuItem>
                    <MenuItem>Beginner</MenuItem>
                  </MenuList>
                </Menu>
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
                      <p style={{ fontSize: "16px", color: "#171717" }}>Himanshu Rohila</p>
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
            >
              <ImagePreview selectedFiles={selectedFiles} removeImage={handleRemoveImage} />
            </Box>
            <Divider />
            <ModalFooter flexDirection="column" alignItems="start">
              {isTyping ? (
                <RowButton
                  fileInputRef={fileInputRef}
                  handleClick={handleClick}
                  handleChange={handleChange}
                  selectedFiles={selectedFiles}
                  handleOptionButtonClick={handleOptionButtonClick}
                />
              ) : selectedFiles.length > 0 ? (
                <>
                  <RowButton
                    fileInputRef={fileInputRef}
                    handleClick={handleClick}
                    handleChange={handleChange}
                    selectedFiles={selectedFiles}
                    handleOptionButtonClick={handleOptionButtonClick}
                  />
                </>
              ) : pollOption ? (
                <RowButton
                  fileInputRef={fileInputRef}
                  handleClick={handleClick}
                  handleChange={handleChange}
                  selectedFiles={selectedFiles}
                  handleOptionButtonClick={handleOptionButtonClick}
                />
              ) : (
                <ColumnButtons
                  fileInputRef={fileInputRef}
                  handleClick={handleClick}
                  handleChange={handleChange}
                  selectedFiles={selectedFiles}
                  handleOptionButtonClick={handleOptionButtonClick}
                />
              )}
              <Button
                w="full"
                sx={{
                  bg: "black !important",
                  color: "#fff",
                  fontSize: "12px",
                }}
                variant="solid"
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent bg="white.900" color="#000" height="80vh" overflow="hidden">
            <ModalBody>
              <ParticipantsModal/>
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
