import AvatarGroups from "@/components/common/avatarGroups";
import GroupTabList from "@/components/groups/groupTabList";
import GroupsLayout from "@/components/layouts/groupsLayout";
import { Box, Button, Card, CardBody, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Dot, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import {useQuery} from 'react-query';
import { useParams } from 'next/navigation';
import { getGroupDetail } from "@/api/feed/groups";
import {useState} from 'react';
import {useSelector} from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroupsDetails = () => {
  const router = useRouter();
  const params = useParams();
  const groupId = params?.groupsDetail;
  
  const [state,setState] = useState({});
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess }   =  useQuery({
    queryKey: ["getGroupDetail", uid,"657fff13a30ce12a5e68f3b0"],
    queryFn: () => getGroupDetail(uid,"657fff13a30ce12a5e68f3b0"),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data?.data.groupDetail),
               })
       
  return (
    <Box>
      <Box height="fit-content" position="relative">
        <Image width="100%" src={""} />
        <div className="absolute bg-[#000000d7] w-[100%] bottom-0">
          <Text color="#fff" p="2" px="5" fontSize={{ base: "12px", md: "14px" }}>
            Group by {state?.hostId?.title}
          </Text>
        </div>
      </Box>
      <Card>
        <CardBody>
          <Flex direction={{ base: "row", md: "row" }} align="center" justifyContent="space-between">
            <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="600">
             {state?.title}
            </Text>
            <HStack align="center" gap="4">
              <Button
                variant="solid"
                color="#fff"
                backgroundColor="#000"
                _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
              >
                Invite Now
              </Button>
              <Box onClick={() => router.push(`/groups/${groupId}/info`)} cursor="pointer">
                <Image alt="info" src="/Info.svg" />
              </Box>
              <MoreVertical />
            </HStack>
          </Flex>
          <HStack alignItems="center" mt={{ base: "4", md: "6" }}>
            <Image src="/Lock.svg" />
            <Text color="#FFA53B" fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              {state.groupType} Group
            </Text>
            <Dot color="#636363" transform={{ base: "scale(1.5)", md: "scale(2)" }} />
            <Text color="#636363" fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              {state?.members?.length} Members
            </Text>
          </HStack>
          <Box mt={{ base: "4", md: "6" }}>
            <AvatarGroups />
          </Box>
        </CardBody>
      </Card>
      <Box overflowX="auto" px="4" bg="white.900">
        <GroupTabList />
      </Box>
    </Box>
  );
};

export default GroupsDetails;