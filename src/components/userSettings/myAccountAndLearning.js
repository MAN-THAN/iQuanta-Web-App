import UserSettingLayout from "@/components/layouts/userSettingLayout";
import LogoutAndDeactivateButtons from "@/components/logoutSection/logoutAndDeactivateButtons";
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
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getLinkedAccounts } from "@/api/account/accountSetting";

const MyAccountAndLearning = () => {
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    // queryKey: ["getLinkedAccounts", uid],
    // queryFn: () => getLinkedAccounts(uid),
    // onError: (error, variables, context) =>
    //   toast.error(`${error?.response?.data.error?.message}`, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   }),
    // onSuccess: (res) => setState(res.data.data.linkedAccounts),
  });
  console.log(state);
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <ArrowLeft cursor="pointer" onClick={() => router.back()} />
            <Text fontSize="18px" fontWeight="600">
              Account Activity
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <UnorderedList listStyleType="none" fontSize="14px" fontWeight="500" color="#455564">
            <ListItem key="1">
              <Flex align="center" justify="space-between">
                <Text>Posts you’ve liked</Text>
                <Box>
                  <ChevronRight />
                </Box>
              </Flex>
              <Divider p="4" />
            </ListItem>
            <ListItem>
              <Flex align="center" justify="space-between">
                <Text>Posts you marked helpful</Text>
                <Box>
                  <ChevronRight />
                </Box>
              </Flex>
              <Divider p="4" />
            </ListItem>
            <ListItem>
              <Flex align="center" justify="space-between">
                <Text>Challenges you’ve participated in</Text>
                <Box>
                  <ChevronRight />
                </Box>
              </Flex>
              <Divider p="4" />
            </ListItem>
            <ListItem>
              <Flex align="center" justify="space-between">
                <Text>Time Spent</Text>
                <Box>
                  <ChevronRight />
                </Box>
              </Flex>
              <Divider p="4" />
            </ListItem>
          </UnorderedList>
        </CardBody>
        <CardFooter>
          <LogoutAndDeactivateButtons />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default MyAccountAndLearning;
