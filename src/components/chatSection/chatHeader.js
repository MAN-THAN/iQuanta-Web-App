import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const ChatHeader = ({ chatsData }) => {
  return (
    <Flex w="100%" p="4">
      <Avatar size="md" name="Dan Abrahmov" src={chatsData.img}>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          {chatsData.name}
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
