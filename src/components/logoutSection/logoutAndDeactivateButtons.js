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
import { useMutation } from "react-query";
import { userLogOut } from "@/api/profile/profileSettings";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogoutAndDeactivateButtons = () => {
  const router = useRouter();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const {_id : uid } = useSelector(state => state.userData);
  const mutation = useMutation({
    mutationFn: () => userLogOut(uid),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message || "Some error occurred"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Logut successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
      setLogoutModalOpen(false);
      // dispatch(addUserData(res.data.data.user));
      router.push({
        pathname: "/signup",
      });
    },
    onSettled: (data, error, variables, context) => {},
  });

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    mutation.mutate();
  };
  return (
    <>
      <ButtonGroup width="full" spacing="2">
        <Button
          onClick={() => router.push("/usersettings/deactivateAccount")}
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
      <ToastContainer />
    </>
  );
};

export default LogoutAndDeactivateButtons;
