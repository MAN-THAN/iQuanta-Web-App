import { Box, Button, Center, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";

const SubmitConfirmationModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent bg="white.900" rounded="2xl" overflow="hidden">
        <ModalBody padding="0">
          <Center px="4" >
            <Image fit="contain" src="/ModalImage.png" />
          </Center>
        </ModalBody>
        <Box textAlign="center">
          <Text fontWeight="600" fontSize="24px" pb='10'>
            Are you sure to submit your test?
          </Text>
          <Center gap='14' pb='14'>
            <Button rounded="full" px='4'  bg="black.700" color="white.900" onClick={onClose}>
              Have a doubt? Back to test
            </Button>
            <Button rounded="full" px='14' bg="brand.900" color="white.900" onClick={onClose}>
              Submit
            </Button>
          </Center>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SubmitConfirmationModal;
