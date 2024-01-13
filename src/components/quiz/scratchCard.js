import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,

} from "@chakra-ui/react";
import {Share2,  X } from "lucide-react";
import Scratch from "./scratch";
const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
  { title: "Fourth", description: "Select Rooms" },
  { title: "Fifth", description: "Select Rooms" },
];
const ScratchCard = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size="3xl">
      <ModalOverlay />
      <ModalContent rounded="2xl" bg="#000" h="90vh">
        <ModalHeader color="white.900" display="flex" justifyContent="space-between">
          <Box onClick={onClose} cursor="pointer">
            <X />
          </Box>
          <Box>
            <Share2 />
          </Box>
        </ModalHeader>
        <Box position="relative" h={{ base: "40vh", md: "40vh" }}></Box>
        <ModalBody bg="white.900">
        <Scratch/>
        </ModalBody>
        <ModalFooter bg="white.900" roundedBottom="2xl">
          <Button
            width="100%"
            variant="solid"
            color="#fff"
            backgroundColor="#000"
            _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
          >
            Invite Now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScratchCard;
