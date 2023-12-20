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
} from "@chakra-ui/react";
import { ChevronDown, ChevronRight, Minus, Plus, SearchIcon } from "lucide-react";
import topicsData from "@/utilities/topicsDummy";

const ChallengesModal = ({ isOpen, onClose }) => {
  const [showTopicList, setShowTopicList] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showSubTopicList, setShowSubTopicList] = useState(false);

  const openSecondModal = () => {
    setShowTopicList(true);
  };

  const showSubTopicLists = (topic) => {
    setSelectedTopic(topic);
    setShowTopicList(false);
  };

  const resetState = () => {
    setShowTopicList(false);
    setShowSubTopicList(false);
    setSelectedTopic(null);
  };

  return (
    <>
      <Modal
        size='lg'
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
            {showTopicList ? "Select (s) Topics" : selectedTopic ? "Select (s) Sub Topics" : "New Challenge"}
          </ModalHeader>
          <ModalBody>
            {showTopicList ? (
              <Box>
                <InputGroup size="md">
                  <InputLeftElement>
                    <SearchIcon />
                  </InputLeftElement>
                  <Input pl="3.0rem" placeholder="Search" />
                </InputGroup>
                <Box overflowY="scroll">
                  <UnorderedList listStyleType="none">
                    {topicsData.map((data, i) => (
                      <ListItem key={data.id} display="flex" py="3" alignItems="center" justifyContent="space-between">
                        <Checkbox gap="4" alignItems="center" onChange={() => showSubTopicLists(data)}>
                          <Box>
                            <Text>{data.name}</Text>
                            <Text fontSize="12px" color="#636363">
                              {data.subtopics.length} Sub Topic
                            </Text>
                          </Box>
                        </Checkbox>
                        <ChevronRight />
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
            ) : selectedTopic ? (
              <Box>
                <InputGroup size="md">
                  <InputLeftElement>
                    <SearchIcon />
                  </InputLeftElement>
                  <Input pl="3.0rem" placeholder="Search" />
                </InputGroup>
                <Box overflowY="scroll">
                  <UnorderedList listStyleType="none">
                    {selectedTopic.subtopics.map((subtopic, i) => (
                      <ListItem key={i} display="flex" py="3" alignItems="center" justifyContent="space-between">
                        <Checkbox gap="4" alignItems="center">
                          <Box>
                            <Text>{subtopic}</Text>
                          </Box>
                        </Checkbox>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
            ) : (
              <Box>
                <Stack>
                  <HStack align="center" justifyContent="space-between"></HStack>
                  <FormControl>
                    <FormLabel>You want to challenge in</FormLabel>
                    <Menu isLazy>
                      <MenuButton border="1px solid #8D96A5" rounded="lg" p="1" onClick={openSecondModal}>
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
                          <Minus size="18px" />
                          <Text>10</Text>
                          <Plus size="18px" />
                        </Box>
                      </Box>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Time per question</FormLabel>
                      <Box border="1px solid #8D96A5" rounded="lg" p="1">
                        <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                          <Minus size="18px" />
                          <Text>60 sec</Text>
                          <Plus size="18px" />
                        </Box>
                      </Box>
                    </FormControl>
                  </HStack>
                  <FormControl py="4">
                    <FormLabel>Difficulty</FormLabel>
                    <Menu isLazy>
                      <MenuButton border="1px solid #8D96A5" rounded="lg" p="1">
                        <Box display="flex">
                          <Text fontSize="14px">Select the topic(s)</Text>
                          <ChevronDown />
                        </Box>
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Beginner</MenuItem>
                        <MenuItem>Beginner</MenuItem>
                        <MenuItem>Beginner</MenuItem>
                      </MenuList>
                    </Menu>
                  </FormControl>
                </Stack>
                <Stack borderTop="2px solid" mt="4" py="4">
                  <Text fontWeight="600" color="#000">
                    Say something to your opponents
                  </Text>
                  <Text color="#636363">Say something to your opponents</Text>
                </Stack>
              </Box>
            )}
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
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChallengesModal;
