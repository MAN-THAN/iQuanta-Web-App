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
  ModalContent,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import React from "react";
import CreateMeme from "./createMeme";
import RowButton from "./rowButton";

const CreateMemeModal = ({
  handleTypingStart,
  selectedType,
  selectedFiles,
  fileInputRef,
  handleClick,
  handleChange,
  handleButtonClick,
  handleOptionButtonClick,
}) => {
  return (
    <ModalContent maxW="4xl" bg="white.900" minH="823px" rounded="2xl" color="#000">
      <ModalBody
        css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
        sx={{
          "-webkit-overflow-scrolling": "touch",
          scrollBehavior: "smooth",
        }}
      >
        <Flex justifyContent="space-between">
          <Stack flex="1">
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
                />
              </Box>

              {selectedType && <CreateMeme type={selectedType} />}
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
          <Box maxW="300px" maxH="823px" bg="#F1F2F3" overflow="scroll">
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

export default CreateMemeModal;
