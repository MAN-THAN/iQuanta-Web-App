import GroupsLayout from "@/components/layouts/groupsLayout";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { useState } from "react";
import {useSelector} from "react-redux";
import { getGroupList } from "@/api/feed/groups";


const YourGroupsList = () => {
  const router = useRouter();
  const [state,setState]=useState({});
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getGroupList", uid],
    queryFn: () => getGroupList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data),
  });
console.log(state,"group list");
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              <ArrowLeft />
            </Box>
            <Text fontSize="16px" fontWeight="600">
              Your Groups
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <HStack px="4" pb="4">
            <Image alt="lock icon" src="/Lock.svg" />
            <Text fontWeight="500" fontSize="16px">
              Premium Groups
            </Text>
          </HStack>
          <UnorderedList listStyleType="none">
            {state?.premiumData?.map((e, i) => (
              <>
                <ListItem onClick={()=>router.push(`/groups/${e._id}`)} display="flex" alignItems="center" cursor="pointer" justifyContent="space-between" py="4">
                  <HStack>
                    <Image boxSize="40px" alt="exam" src="/exam.png" />
                    <Text fontWeight="500" fontSize="14px">
                     {e.title}
                    </Text>
                  </HStack>
                  <ChevronRight />
                </ListItem>
                <Divider />
              </>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
      <Card mt='2'>
        <CardBody>
          <HStack px="4" pb="4">
            <Image alt="lock icon" src="/GlobeHemisphereEast.svg" />
            <Text fontWeight="500" fontSize="16px">
              Public Groups
            </Text>
          </HStack>
          <UnorderedList listStyleType="none">
            {state?.publicData?.map((e, i) => (
              <>
                <ListItem onClick={()=>router.push(`/groups/${e._id}`)} display="flex" alignItems="center" cursor="pointer" justifyContent="space-between" py="4">
                  <HStack>
                    <Image boxSize="40px" alt="exam" src="/exam.png" />
                    <Text fontWeight="500" fontSize="14px">
                      {e.title}
                    </Text>
                  </HStack>
                  <ChevronRight />
                </ListItem>
                <Divider />
              </>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
    </Box>
  );
};

export default YourGroupsList;
