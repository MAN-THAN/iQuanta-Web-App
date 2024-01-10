import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Image,
  ListItem,
  Switch,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import ControlPost from "@/components/userPrivacyModals/controlPost";
import BlockedAccount from "@/components/userPrivacyModals/blockedAccount";
import { validateConfig } from "next/dist/server/config-shared";
import UserSettingLayout from "@/components/layouts/userSettingLayout";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getPrivacySettings, updatePrivacySettings } from "@/api/profile/profileSettings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserPrivacy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState();

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenBlocked = () => {
    setIsOpen(true);
  };
  const handleCloseBlocked = () => {
    setIsOpen(false);
  };

  const handleChangeValue = (value) => {
    mutation.mutate({ type: modalType, status: value });
    console.log({ type: modalType, status: value });
  };
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUserPrivacySettings", uid],
    queryFn: () => getPrivacySettings(uid),
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.privacySettings),
  });
  console.log(state);
  const mutation = useMutation({
    mutationFn: (payload) => updatePrivacySettings(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      // toast.success(" successful!", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      // queryClient.invalidateQueries({ queryKey: ["getUserPrivacySettings"] });
      queryClient.setQueryData(["getUserPrivacySettings", uid], res);
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  console.log(state);
  const makeFirstLetterCaps = (word) => {
    if (typeof word === "string") {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  return (
    <>
      <UserSettingLayout>
        <Box>
          <Card>
            <CardBody>
              <UnorderedList spacing="4" listStyleType="none" fontSize="14px" fontWeight="500" color="#455564">
                <ListItem key="1">
                  <Flex align="center" justify="space-between">
                    <Text>Private Account</Text>
                    <Box>
                      <Switch
                        isChecked={state?.privateAccount}
                        onChange={() => mutation.mutate({ type: "privateAccount", status: !state.privateAccount })}
                        name="privateAccount"
                        size="md"
                        colorScheme="green"
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Comments</Text>
                    <Box>
                      <Button
                        onClick={() => handleOpenModal("comments")}
                        size="sm"
                        fontSize="12px"
                        rightIcon={<ChevronDown fontSize="10px" />}
                        variant="outline"
                      >
                        {makeFirstLetterCaps(state?.comments)}
                      </Button>
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Mentions</Text>
                    <Box>
                      <Button
                        onClick={() => handleOpenModal("mentions")}
                        size="sm"
                        fontSize="12px"
                        rightIcon={<ChevronDown fontSize="10px" />}
                        variant="outline"
                      >
                        {makeFirstLetterCaps(state?.mentions)}
                      </Button>
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Invites</Text>
                    <Box>
                      <Button
                        onClick={() => handleOpenModal("invites")}
                        size="sm"
                        fontSize="12px"
                        rightIcon={<ChevronDown fontSize="10px" />}
                        variant="outline"
                      >
                        {makeFirstLetterCaps(state?.invites)}
                      </Button>
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Activity Status</Text>
                    <Box>
                      <Switch
                        isChecked={state?.activityStatus}
                        onChange={() => mutation.mutate({ type: "activityStatus", status: !state.activityStatus })}
                        name="activityStatus"
                        size="md"
                        colorScheme="green"
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem onClick={handleOpenBlocked}>
                  <Flex align="center" justify="space-between">
                    <Text cursor={"pointer"} fontWeight={700}>
                      Blocked Accounts
                    </Text>
                  </Flex>
                </ListItem>
              </UnorderedList>
            </CardBody>
          </Card>
          <ControlPost
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            setValue={handleChangeValue}
            modalType={modalType}
            state={state}
          />
          <BlockedAccount isOpen={isOpen} onClose={handleCloseBlocked} />
        </Box>
        <ToastContainer />
      </UserSettingLayout>
    </>
  );
};

export default UserPrivacy;
