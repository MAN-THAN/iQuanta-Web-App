import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LogoutAndDeactivateButtons = () => {
  const router = useRouter();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setLogoutModalOpen(false);
  };
  return (
    <>
      <ButtonGroup width="full" spacing="2">
        <Button
          onClick={() => router.push("/usersettings/detailseactivateAccount")}
          border="1px solid"
          width="300px"
          size="md"
          variant="solid"
          sx={{
            margin: "0 auto",
            backgroundColor: "#ffff !important",
          }}
        >
          Deactivate Account
        </Button>
        <Button
          width="300px"
          size="md"
          variant="solid"
          onClick={handleLogout}
          sx={{
            margin: "0 auto",
            backgroundColor: "black !important",
            color: "white",
          }}
        >
          Log out
        </Button>
      </ButtonGroup>

      <Modal isCentered isOpen={isLogoutModalOpen} onClose={handleCloseLogoutModal}>
        <ModalOverlay />
        <ModalContent bg="white.900">
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to log out?</ModalBody>
          <ModalFooter>
            <Button
              bg="black"
              color="white.900"
              _hover={{ bg: "white.900", color: "#000", border: "1px solid #000" }}
              mr={3}
              onClick={handleCloseLogoutModal}
            >
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleConfirmLogout}>
              Confirm Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogoutAndDeactivateButtons;
