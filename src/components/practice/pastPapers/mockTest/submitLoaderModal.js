import { Box, Button, Center, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";

const SubmitLoaderModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent bg="white.900" rounded="2xl" overflow="hidden">
        <ModalBody padding="0">
          <Center px="4">
            <Image fit="contain" src="/ModalImage.png" />
          </Center>
        </ModalBody>
        <Box textAlign="center">
          <Text fontWeight="600" fontSize="24px" pb="10">
            Wait for submition
          </Text>
          <Center gap="14" pb="14">
            <Button rounded="full" px="14" bg="brand.900" color="white.900" onClick={onClose}>
              Loading...
            </Button>
          </Center>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SubmitLoaderModal;
