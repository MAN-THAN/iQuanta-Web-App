// ChallengesModal.jsx
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
  Image,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import TopicsModal from "./topicsModal";

const ChallengesModal = ({ isOpen, onClose }) => {
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  const handleSave = () => {
    // Handle save logic for the first modal
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white.900" color="#000" height="80vh">
          <ModalCloseButton />
          <ModalHeader>New Challenge</ModalHeader>
          <ModalBody>
            <Stack>
              <HStack align="center" justifyContent="space-between"></HStack>
              <FormControl>
                <FormLabel>You want to challenge in</FormLabel>
                <Menu isLazy>
                  <MenuButton border="1px solid #8D96A5" rounded="lg" p="1" onClick={openSecondModal}>
                    <Box display="flex" alignItems='center' px='2' justifyContent='space-between'>
                      <Text fontSize="14px">Select the topic(s)</Text>
                      <ChevronDown size='14px' />
                    </Box>
                  </MenuButton>
                </Menu>
              </FormControl>
              <HStack gap="30" py='4'>
                <FormControl>
                  <FormLabel >Questions</FormLabel>
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
              <FormControl py='4'>
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
      <TopicsModal isOpen={secondModalOpen} onClose={closeSecondModal} />
    </>
  );
};

export default ChallengesModal;
