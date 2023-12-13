// SecondModal.jsx
import React from "react";
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
import { data } from "autoprefixer";

const SubTopicsModal = ({ isOpen, onClose, selectedTopic }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white.900" color="#000" height='80vh'>
          <ModalCloseButton />
          <ModalHeader>Select Subtopis (s)</ModalHeader>
          <ModalBody>
            <InputGroup size="md">
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input pl="3.0rem" placeholder="Search" />
            </InputGroup>
            <Box overflowY="scroll" height="40vh">
              <UnorderedList listStyleType="none">
                {selectedTopic &&
                  selectedTopic.subtopics.map((data) => (
                    <ListItem display="flex" py="3" alignItems="center" justifyContent="space-between">
                      <Checkbox defaultChecked>
                        <Box>
                          <Text>{data}</Text>
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
    </>
  );
};

export default SubTopicsModal;
