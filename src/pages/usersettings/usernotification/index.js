import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
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
import UserSettingLayout from "@/components/layouts/userSettingLayout";
import { getNotifSettings } from "@/api/profile/profileSettings";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { updateNotifSettings } from "@/api/profile/profileSettings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserNotification = () => {
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUserNotifSettings", uid],
    queryFn: () => getNotifSettings(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.notification_settings),
  });
  console.log(state);
  const mutation = useMutation({
    mutationFn: (payload) => updateNotifSettings(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      // toast.success(" successful!", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      queryClient.invalidateQueries({ queryKey: ["getUserNotifSettings"] });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  console.log(state?.reaction);
  return (
    <>
      <UserSettingLayout>
        <Box>
          <Card>
            <CardHeader>
              <HStack>
                <Text fontSize="18px" fontWeight="600">
                  Push Notifications
                </Text>
              </HStack>
            </CardHeader>
            <CardBody>
              <UnorderedList spacing="4" listStyleType="none" fontSize="14px" fontWeight="500" color="#455564">
                <ListItem key="1">
                  <Flex align="center" justify="space-between">
                    <Text>Pause All Notifications</Text>
                    <Box>
                      <Switch
                        isChecked={state?.pause_all}
                        name="pause_all"
                        size="md"
                        colorScheme="green"
                        onChange={() => mutation.mutate({ type: "pause_all", status: !state.pause_all })}
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Reactions</Text>
                    <Box>
                      <Switch
                        isChecked={state?.reaction}
                        name="reaction"
                        size="md"
                        colorScheme="green"
                        onChange={() => mutation.mutate({ type: "reaction", status: !state.reaction })}
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Comments</Text>
                    <Box>
                      <Switch
                        isChecked={state?.comments}
                        name="comments"
                        size="md"
                        colorScheme="green"
                        onChange={() => mutation.mutate({ type: "comments", status: !state.comments })}
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Direct Messages</Text>
                    <Box>
                      <Switch
                        isChecked={state?.directMessages}
                        name="directMessages"
                        size="md"
                        colorScheme="green"
                        onChange={() => mutation.mutate({ type: "directMessages", status: !state.directMessages })}
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Group Notifications</Text>
                    <Box>
                      <Switch
                        isChecked={state?.group_notifiacation}
                        name="group_notifiacation"
                        size="md"
                        colorScheme="green"
                        onChange={() =>
                          mutation.mutate({ type: "group_notifiacation", status: !state.group_notifiacation })
                        }
                      />
                    </Box>
                  </Flex>
                  <Divider pt="4" />
                </ListItem>
                <ListItem>
                  <Flex align="center" justify="space-between">
                    <Text>Invites</Text>
                    <Box>
                      <Switch
                        isChecked={state?.invites}
                        name="invites"
                        size="md"
                        colorScheme="green"
                        onChange={() => mutation.mutate({ type: "invites", status: !state.invites })}
                      />
                    </Box>
                  </Flex>
                </ListItem>
              </UnorderedList>
            </CardBody>
          </Card>
        </Box>
        <ToastContainer />
      </UserSettingLayout>
    </>
  );
};

export default UserNotification;
