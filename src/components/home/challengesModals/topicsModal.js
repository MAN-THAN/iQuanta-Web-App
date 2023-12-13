// SecondModal.jsx
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  UnorderedList,
  ListItem,
  Checkbox,
  Box,
  Text,
} from "@chakra-ui/react";
import { ChevronRight, SearchIcon } from "lucide-react";
import SubTopicsModal from "./subTopicsModal";
import topicsData from "@/utilities/topicsDummy";

const TopicsModal = ({ isOpen, onClose }) => {
  const [subTopicModal, setSubTopicModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const openSubTopicModal = (data) => {
    setSelectedTopic(data);
    setSubTopicModal(true);
  };

  const closeSubTopicModal = () => {
    setSubTopicModal(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white.900" color="#000" height="80vh">
          <ModalCloseButton />
          <ModalHeader fontSize="18px">Select topis (s)</ModalHeader>
          <ModalBody>
            <InputGroup size="md">
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input pl="3.0rem" placeholder="Search" />
            </InputGroup>
            <Box overflowY="scroll" height="40vh">
              <UnorderedList listStyleType="none">
                {topicsData.map((data, i) => (
                  <ListItem key={data.id} display="flex" py="3" alignItems="center" justifyContent="space-between">
                    <Checkbox gap="4" alignItems="center" onChange={() => openSubTopicModal(data)}>
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
      <SubTopicsModal isOpen={subTopicModal} onClose={closeSubTopicModal} selectedTopic={selectedTopic} />
    </>
  );
};

export default TopicsModal;
