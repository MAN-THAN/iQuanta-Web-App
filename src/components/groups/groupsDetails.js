import AvatarGroups from "@/components/common/avatarGroups";
import GroupTabList from "@/components/groups/groupTabList";
import GroupsLayout from "@/components/layouts/groupsLayout";
import GroupInvite from "./groupInvite";
import { Dropdown, Space } from "antd";
import GroupsMembers from "./groupsMembers";
import { Box, Button, Card, CardBody, Flex, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { Dot, MoreVertical } from "lucide-react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getGroupDetail } from "@/api/feed/groups";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroupsDetails = () => {
  const items = [
    {
      key: "1",
      label: (
        <Text fontSize="14px" fontWeight="400" width="160px">
          Mute
        </Text>
      ),
    },
    {
      key: "2",
      label: <Text width="160px">Share</Text>,
    },
    {
      key: "3",
      label: <Text width="160px">Report</Text>,
    },
    {
      key: "4",
      label: <Text width="160px">Leave Group</Text>,
    },
  ];
  const router = useRouter();
  const { groupsDetails } = router.query;
  const groupId = groupsDetails;
  console.log("46", groupId);
  const { isOpen: isOpenInvite, onOpen: onOpenInvite, onClose: onCloseInvite } = useDisclosure();
  const { isOpen: isOpenMember, onOpen: onOpenMember, onClose: onCloseMember } = useDisclosure();
  const [state, setState] = useState({});
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getGroupDetail", uid, groupId],
    queryFn: () => getGroupDetail(uid, groupId),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data?.data.groupDetail),
  });

  return (
    <>
      <GroupInvite isOpen={isOpenInvite} onClose={onCloseInvite} />
      <GroupsMembers isOpen={isOpenMember} onClose={onCloseMember} />
      <Box>
        <Box height="fit-content" position="relative">
          <Image width="100%" src="/groupshead.png" />
          <div className="absolute bg-[#000000d7] w-[100%] bottom-0">
            <Text color="#fff" p="2" px="5" fontSize={{ base: "12px", md: "14px" }}>
              Group by {state?.hostId?.title}
            </Text>
          </div>
        </Box>

        <Box p="4" bg="white.900">
          <Flex direction={{ base: "row", md: "row" }} align="center" justifyContent="space-between">
            <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="600">
              {state?.title}
            </Text>
            <HStack align="center" gap="4">
              <Button
                variant="solid"
                color="#fff"
                onClick={onOpenInvite}
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
          <Box mt={{ base: "4", md: "6" }} onClick={onOpenMember}>
            <AvatarGroups />
          </Box>
        </Box>

        <Box>
          <GroupTabList groupId={groupId} />
        </Box>
      </Box>
    </>
  );
};

export default GroupsDetails;
