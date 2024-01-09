import AvatarGroups from "@/components/common/avatarGroups";
import GroupTabList from "@/components/groups/groupTabList";
import GroupsLayout from "@/components/layouts/groupsLayout";
import { Box, Button, Card, CardBody, Flex, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { Dot, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import GroupInvite from "./groupInvite";
import { Dropdown, Space } from "antd";
import GroupsMembers from "./groupsMembers";

const GroupsDetails = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen: isOpenInvite, onOpen: onOpenInvite, onClose: onCloseInvite } = useDisclosure();
  const { isOpen: isOpenMember, onOpen: onOpenMember, onClose: onCloseMember } = useDisclosure();

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

  return (
    <>
      <GroupInvite isOpen={isOpenInvite} onClose={onCloseInvite} />
      <GroupsMembers isOpen={isOpenMember} onClose={onCloseMember} />
      <Box>
        <Box height="fit-content" position="relative">
          <Image width="100%" src="/groupshead.png" />
          <div className="absolute bg-[#000000d7] w-[100%] bottom-0">
            <Text color="#fff" p="2" px="5" fontSize={{ base: "12px", md: "14px" }}>
              Group by iQuanta
            </Text>
          </div>
        </Box>

        <Box p='4' bg='white.900'>
          <Flex direction={{ base: "row", md: "row" }} align="center" justifyContent="space-between">
            <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="600">
              CAT - 2021
            </Text>
            <HStack alignItems="center" gap="4">
              <Button
                variant="solid"
                color="#fff"
                backgroundColor="#000"
                _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
                onClick={onOpenInvite}
              >
                Invite Now
              </Button>

              <Box onClick={() => router.push("/groups/1/info")} cursor="pointer">
                <Image alt="info" src="/Info.svg" />
              </Box>

              <Dropdown
                placement="up"
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Box>
                  <Space>
                    <MoreVertical />
                  </Space>
                </Box>
              </Dropdown>
            </HStack>
          </Flex>
          <HStack alignItems="center" mt={{ base: "4", md: "6" }}>
            <Image src="/Lock.svg" />
            <Text color="#FFA53B" fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              Premium Group
            </Text>
            <Dot color="#636363" transform={{ base: "scale(1.5)", md: "scale(2)" }} />
            <Text color="#636363" fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              23k Members
            </Text>
          </HStack>
          <Box mt={{ base: "4", md: "6" }} onClick={onOpenMember}>
            <AvatarGroups />
          </Box>
        </Box>

        <Box>
          <GroupTabList />
        </Box>
      </Box>
    </>
  );
};

export default GroupsDetails;
