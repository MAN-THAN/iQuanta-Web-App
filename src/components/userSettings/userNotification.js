import { useState, useEffect } from "react";
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
  const { isLoading, data, isError, error, isPending, isSuccess, isStale } = useQuery({
    queryKey: ["getUserNotifSettings", uid],
    queryFn: () => getNotifSettings(uid),
    initialData: () => {
      // Use a todo from the 'todos' query as the initial data for this todo query
      console.log(queryClient.getQueryData(["getUserNotifSettings", uid]))
      return setState(queryClient.getQueryData(["getUserNotifSettings", uid]));
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => {
      console.log(res);
      setState(res?.data?.data?.notificationSettings);
    },
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
      console.log(res);
      queryClient.setQueryData(["getUserNotifSettings", uid], res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  console.log(state?.reaction);
  return (
    <>
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
                        isChecked={state?.pauseAll}
                        name="pauseAll"
                        size="md"
                        colorScheme="green"
                        onChange={() => mutation.mutate({ type: "pauseAll", status: !state.pauseAll })}
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
                        isChecked={state?.groupNotification}
                        name="groupNotification"
                        size="md"
                        colorScheme="green"
                        onChange={() =>
                          mutation.mutate({ type: "groupNotification", status: !state.groupNotification })
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
    </>
  );
};

export default UserNotification;
