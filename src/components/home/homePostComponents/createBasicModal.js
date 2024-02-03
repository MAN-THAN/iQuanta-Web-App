import React, { useCallback, useState } from "react";
import {
  Button,
  ModalBody,
  Stack,
  HStack,
  Box,
  Text,
  MenuList,
  Flex,
  Image,
  Textarea,
  Divider,
  ModalCloseButton,
} from "@chakra-ui/react";
import PostTypeMenu from "@/components/common/postTypeMenu";
import { Mention, MentionsInput } from "react-mentions";
import mentionStyles from "@/styles/mentionStyles";
import mentionsInputStyles from "@/styles/mentionsInputStyles";
import ColumnButtons from "./columnButtons";
import ImagePreview from "./ImagePreview";
import PollInputs from "./pollInputs";
import DebateCard from "./debateCard";
import FileUploadButton from "./fileUploadButton";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getFriendList } from "@/api/feed/user/friendList";
import { getTopicsForFeed } from "@/api/feed/user/posts";

const CreateBasicModal = ({
  privacyType,
  setPrivacyType,
  text,
  setText,
  handleTypingStart,
  setIsTyping,
  setTaggedPeople,
  selectedFiles,
  setSelectedFiles,
  tempFiles,
  setTempFiles,
  options,
  setOptions,
  selectedComponent,
  setParticipantsShow,
  setTaggedTopic,
}) => {
  const { _id: uid, name } = useSelector((state) => state.userData);
  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
    setTempFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleParticipants = useCallback(() => {
    setParticipantsShow(true);
  }, []);
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "photo":
        return (
          <ImagePreview selectedFilesBlob={selectedFiles} selectedFiles={tempFiles} removeImage={handleRemoveImage} />
        );
      case "video":
        return (
          <ImagePreview selectedFilesBlob={selectedFiles} selectedFiles={tempFiles} removeImage={handleRemoveImage} />
        );
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
  const { data: friendList } = useQuery({
    queryKey: ["getFriendList", uid],
    queryFn: () => getFriendList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => console.log(res),
  });
  const { data: topicsList } = useQuery({
    queryKey: ["getTopicsForFeed"],
    queryFn: () => getTopicsForFeed(),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => console.log(res),
  });

  return (
    <>
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
            <PostTypeMenu setPrivacyType={(value) => setPrivacyType(value)} currentValue={privacyType} />
          </Box>
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
            <MentionsInput
              width="full"
              placeholder="Write your post here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onInput={handleTypingStart}
              onBlur={(e) => {
                if (!e.target.value.trim()) {
                  setIsTyping(false);
                }
              }}
              style={mentionsInputStyles}
            >
              <Mention
                trigger={"@"}
                data={friendList?.data.data.friendList.map((i) => {
                  return { display: i.name, id: i._id };
                })}
                onAdd={(e) => {
                  setTaggedPeople((prev) => [...prev, e]);
                }}
                style={mentionStyles}
                appendSpaceOnAdd={true}
              />
              <Mention
                trigger={"$"}
                data={topicsList?.data.data.topics.map((i) => {
                  return { display: i.title, id: i._id };
                })}
                onAdd={(e) => {
                  setTaggedTopic((prev) => [...prev, e]);
                }}
                style={mentionStyles}
                appendSpaceOnAdd={true}
              />
              <Mention trigger={"#"} data={[]} style={mentionStyles} />
            </MentionsInput>
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
    </>
  );
};
export default React.memo(CreateBasicModal);
