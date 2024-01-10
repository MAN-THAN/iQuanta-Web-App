import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";

const DifficultyModal = ({ onSelectDifficulty }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  const handleDifficultyChange = (value) => {
    setSelectedDifficulty(value);
  };

  const handleConfirm = () => {
    onSelectDifficulty(selectedDifficulty);
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open Difficulty Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Difficulty</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup value={selectedDifficulty} onChange={handleDifficultyChange}>
              <Stack spacing={2}>
                <Radio value="easy">Easy</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="hard">Hard</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleConfirm}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DifficultyModal;
