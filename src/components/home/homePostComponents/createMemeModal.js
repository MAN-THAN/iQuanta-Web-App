import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import CreateMeme from "./createMeme";
import RowButton from "./rowButton";
import PostTypeMenu from "@/components/common/postTypeMenu";
import { toPng, toBlob } from "html-to-image";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "@/api/feed/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const CreateMemeModal = ({
  handleTypingStart,
  createPost,
  selectedType,
  selectedFiles,
  fileInputRef,
  handleClick,
  handleChange,
  handleButtonClick,
  handleOptionButtonClick,
  onClose,
}) => {
  const ref = useRef(null);
  const [text, setText] = useState();
  const { name, _id: uid } = useSelector((state) => state.userData);
  const mutation = useMutation({
    mutationFn: (payload) => createPost(payload, uid),
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
      onClose();
      // setSelectedFiles([]);
      // setOptions([]);
      // setSelectedComponent(null);
      // onClose();
    },
    onSettled: (data, error, variables, context) => {},
  });
  console.log(text);
  const queryClient = useQueryClient();
  const handlePostMemes = async() => {
    if (ref.current === null) {
      return;
    }
    console.log(ref.current);
     // Get the data URL of the meme
     const dataUrl = await toPng(ref.current, { cacheBust: true });
     console.log("DATAURL:",dataUrl);
     // Convert data URL to Blob
     //const blob = await toBlob(ref.current, dataUrl);
    // toPng(ref.current, { cacheBust: true })
    //   .then((dataUrl) => {
        //console.log("85",blob);
        createPost(dataUrl);
        // const blob = await toBlob(dataUrl);
        // const formData = new FormData();
        // formData.append("file", blob);
        // formData.append("postType", "memes");
        // formData.append("title", text);
        // mutation.mutate(formData);

        // const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
        // mutation.mutate({
        //   title: text,
        //   postType: "memes",
        //   file: dataUrl
        // });
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
  };

  return (
    <ModalContent
      maxW="4xl"
      bg="white.900"
      minH="823px"
      rounded="2xl"
      color="#000"
      position="relative"
      sx={{
        padding: "0 !important",
      }}
    >
      <ModalBody
        pr="2"
        css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
        sx={{
          "-webkit-overflow-scrolling": "touch",
          scrollBehavior: "smooth",
        }}
      >
        <ModalCloseButton position="absolute" left="2" top="2" />
        <Flex justifyContent="space-between">
          <Stack flex="1" p="4">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="16px" fontWeight="600">
                New Discussion
              </Text>
              <Box>
                <PostTypeMenu />
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
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  width="full"
                  height="auto"
                  border="none"
                  placeholder="Write your post here..."
                  resize="none"
                  onInput={handleTypingStart}
                />
              </Box>

              {selectedType && (
                <div ref={ref}>
                  <CreateMeme type={selectedType} />
                </div>
              )}
            </Stack>
            <Flex flexDirection="column" alignItems="flex-end" mt="auto">
              <RowButton
                fileInputRef={fileInputRef}
                handleClick={handleClick}
                handleChange={handleChange}
                selectedFiles={selectedFiles}
                handleOptionButtonClick={handleOptionButtonClick}
              />
              <Button
                onClick={() => handlePostMemes()}
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
            </Flex>
          </Stack>
          <Box maxW="290px" maxH="823px" p="3" bg="#F1F2F3" overflow="scroll">
            <VStack p="4" gap="5" alignItems="start">
              <Text fontSize="14px" fontWeight="600">
                Templates you can choose from
              </Text>
              {/* tyype-1 */}
              <Box
                bg="#5146D626"
                width="239px"
                height="173px"
                onClick={() => handleButtonClick("Type 1")}
                rounded="xl"
                border="1px solid"
              >
                <Text bg="#fff" px="4" textAlign="center" roundedTop="xl">
                  Text
                </Text>
              </Box>
              {/* tyype-2 */}

              <Box
                bg="white.900"
                width="239px"
                height="173px"
                display="flex"
                onClick={() => handleButtonClick("Type 2")}
                rounded="xl"
                border="1px solid"
              >
                <Box bg="#E5F8FB" width="130px" roundedLeft="xl"></Box>
                <Text bg="#fff" px="4" alignSelf="center" width="110px" roundedRight="xl">
                  Text
                </Text>
              </Box>
              {/* tyype-3 */}

              <Box
                bg="white.900"
                width="239px"
                height="173px"
                display="flex"
                onClick={() => handleButtonClick("Type 3")}
                rounded="xl"
                border="1px solid"
              >
                <Stack gap="0">
                  <Box bg="#51D3E526" width="130px" h="90px" roundedTopLeft="xl"></Box>
                  <Box bg="#E5A15126" width="130px" h="90px" roundedBottomLeft="xl"></Box>
                </Stack>
                <Text bg="#fff" px="4" alignSelf="center" width="110px" roundedRight="xl">
                  Text
                </Text>
              </Box>
              {/* tyype-4 */}

              <Box
                bg="white.900"
                width="239px"
                height="173px"
                display="flex"
                onClick={() => handleButtonClick("Type 4")}
                rounded="xl"
                border="1px solid"
              >
                <Stack gap="0">
                  <Box bg="#5146D626" width="130px" h="90px" roundedTopLeft="xl"></Box>
                  <Box bg="#E5A15126" width="130px" h="90px" roundedBottomLeft="xl"></Box>
                </Stack>
                <Stack gap="0">
                  <Center bg="#fff" px="4" alignSelf="center" width="100px" h="90px" roundedRight="xl">
                    Text
                  </Center>
                  <Center bg="#fff" px="4" alignSelf="center" width="100px" h="90px" roundedRight="xl">
                    Text
                  </Center>
                </Stack>
              </Box>
              {/* tyype-5 */}

              <Box
                bg="#E551B326"
                width="239px"
                onClick={() => handleButtonClick("Type 5")}
                height="173px"
                rounded="xl"
                border="1px solid"
              >
                <Center px="4" width="239px" height="173px" roundedTop="xl">
                  Text
                </Center>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

export default React.memo(CreateMemeModal);
