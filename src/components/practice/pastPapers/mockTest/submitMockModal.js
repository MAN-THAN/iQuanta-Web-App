import {
  Box,
  Button,
  Center,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const SubmitMockModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent bg="white.900" rounded="2xl" overflow="hidden">
        <ModalBody padding="0">
          <Center bg="brand.900" py="6">
            <Image width="280px" height="180px" fit="contain" src="/Group103.png" />
          </Center>
        </ModalBody>
        <Box textAlign="center" py="6">
          <Text fontWeight="600" fontSize="24px">
            Thank You!
          </Text>
          <Text py="6">Congrats! You have completed the Mock test</Text>
          <Center>
            <Button rounded="full" px="16" bg="brand.900" color="white.900" onClick={onClose}>
              Done
            </Button>
          </Center>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SubmitMockModal;
