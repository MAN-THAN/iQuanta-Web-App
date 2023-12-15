import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Avatar,
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
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getLinkedAccounts } from "@/api/account/accountSetting";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserSettings = () => {
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getLinkedAccounts", uid],
    queryFn: () => getLinkedAccounts(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.linkedAccounts),
  });
  console.log(state);
  return (
    <UserSettingLayout>
      <Box>
        <Card>
          <CardHeader>
            <HStack px="4" pt="3" alignItems="center" justifyContent="space-between">
              <Text fontSize="18px" fontWeight="600">
                Account Activity
              </Text>
              <Plus />
            </HStack>
          </CardHeader>
          <CardBody>
            <Text px="4" pb="6" fontSize="14px" color="#455564" fontWeight="600">
              Linked Accounts
            </Text>
            <UnorderedList cursor="pointer" listStyleType="none" fontSize="14px" fontWeight="500" color="#455564" spacing={4}>
              {state?.length === 0 ? (
                <Text textAlign={"center"}>No Accounts linked!</Text>
              ) : (
                <>
                  {state?.map((item, ind) => (
                    <>
                      {" "}
                      <ListItem key={ind} onClick={() => router.push("/usersettings/myAccountAndLearning")}>
                        <Flex align="center" justify="space-between">
                          <Box display="flex" alignItems="center">
                            <Avatar size="lg" alt="user img" src={item?.icon} />
                            <Box ml="4">
                              <Text fontSize="16px" fontWeight="500">
                                {item?.name}
                              </Text>
                              <Text fontSize="14px" fontWeight="400">
                                {item?.email}{" "}
                              </Text>
                            </Box>
                          </Box>
                          <X />
                        </Flex>
                      </ListItem>
                    </>
                  ))}
                </>
              )}
            </UnorderedList>
            <Text px="4" py="6" fontSize="18px" fontWeight="600">
              My Learning
            </Text>
            <UnorderedList
              cursor="pointer"
              listStyleType="none"
              fontSize="14px"
              fontWeight="500"
              spacing="5"
              color="#455564"
            >
              {[...Array(2)].map(() => (
                <>
                  <ListItem key="1">
                    <Flex align="center" justify="space-between">
                      <Box display="flex" alignItems="center">
                        <Box boxSize="30px" textAlign="center" bg="red.300" rounded="lg" p="1">
                          G
                        </Box>
                        <Box ml="4">
                          <Text>Gmail</Text>
                        </Box>
                      </Box>
                      <ChevronRight />
                    </Flex>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <ButtonGroup width="full" spacing="2">
              <Button
                onClick={() => router.push("/usersettings/deactivate")}
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
                sx={{
                  margin: "0 auto",
                  backgroundColor: "black !important",
                  color: "white",
                }}
              >
                Log out
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </UserSettingLayout>
  );
};

export default UserSettings;
