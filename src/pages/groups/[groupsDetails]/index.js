import AvatarGroups from "@/components/common/avatarGroups";
import GroupTabList from "@/components/groups/groupTabList";
import GroupsLayout from "@/components/layouts/groupsLayout";
import { Box, Button, Card, CardBody, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Dot, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

const GroupsDetails = () => {
  const router = useRouter();

  return (
    <GroupsLayout>
      <Box>
        <Box height="fit-content" position="relative">
          <Image width="100%" src="/groupshead.png" />
          <div className="absolute bg-[#000000d7] w-[100%] bottom-0">
            <Text color="#fff" p="2" px="5" fontSize={{ base: "12px", md: "14px" }}>
              Group by iQuanta
            </Text>
          </div>
        </Box>
        <Card>
          <CardBody>
            <Flex direction={{ base: "row", md: "row" }} align="center" justifyContent="space-between">
              <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="600">
                CAT - 2021
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
                <Box onClick={() => router.push("/groups/1/groupInfo")} cursor="pointer">
                  <Image alt="info" src="/Info.svg" />
                </Box>
                <MoreVertical />
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
            <Box mt={{ base: "4", md: "6" }}>
              <AvatarGroups />
            </Box>
          </CardBody>
        </Card>
        <Box overflowX="auto" px="4" bg="white.900">
          <GroupTabList />
        </Box>
      </Box>
    </GroupsLayout>
  );
};

export default GroupsDetails;
