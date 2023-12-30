import AvatarGroups from "@/components/common/avatarGroups";
import GroupTabList from "@/components/groups/groupTabList";
import GroupsLayout from "@/components/layouts/groupsLayout";
import { Box, Button, Card, CardBody, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Dot, MoreVertical } from "lucide-react";
import React from "react";

const GroupsDetails = () => {
  return (
    <GroupsLayout>
      <Box>
      <Box height="fit-content" position="relative">
        <Image width="100%" src="/groupshead.png" />
        <div className="absolute bg-[#000000d7] w-[100%] bottom-0">
          <Text color="#fff" p="2" px="5" fontSize="14px">
            Group by iQuanta
          </Text>
        </div>
      </Box>
      <Card>
        <CardBody>
          <Flex align="center" justifyContent="space-between">
            <Text fontSize="24px" fontWeight="600">
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
              <Image alt="info" src="/Info.svg" />
              <MoreVertical />
            </HStack>
          </Flex>
          <HStack alignItems="center">
            <Image src="/Lock.svg" />
            <Text color="#FFA53B" fontSize="16px" fontWeight="500">
              Premium Group
            </Text>
            <Dot color="#636363" size="24px" />
            <Text color="#636363" fontSize="16px" fontWeight="500">
              23k Members
            </Text>
          </HStack>
          <Box pt="6">
            <AvatarGroups />
          </Box>
        </CardBody> 
      </Card>    
      <Box overflowX="auto" px='4' bg='white.900'>    
        <GroupTabList />
      </Box>
      </Box>
    </GroupsLayout>
  );
};

export default GroupsDetails;
