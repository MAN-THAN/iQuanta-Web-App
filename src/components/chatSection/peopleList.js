import React, { useState } from "react";
import ChatLayout from "@/components/layouts/chatLayout";
import { chats, messages } from "@/utilities/comanData";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Button, Dropdown, Space } from "antd";
import {
  ArrowLeft,
  Camera,
  EditIcon,
  Mic,
  MoreVertical,
  SearchIcon,
  Upload,
} from "lucide-react";
import ChatHeader from "@/components/chatSection/chatHeader";
import MsgChatSection from "@/components/chatSection/msgChatSection";
import SearchWithSuggestions from "./searchChat";

const PeopleList = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const handleChatItemClick = (index) => {
    setSelectedChatIndex(index);
  };
  const activeChatStyle = {
    backgroundColor: "#F4F3FE",
    borderLeft: "4px solid #5146D6",
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <Box bg="white.900" w="30%" h="85vh" rounded="lg">
      <Flex alignItems="center" justifyContent="space-between" padding="4">
        <HStack>
          <ArrowLeft />
          <Text fontSize="lg">Messages</Text>
        </HStack>
        <EditIcon />
      </Flex>
      <Box padding={4}>
        <SearchWithSuggestions/>
      </Box>
      <UnorderedList
        sx={{
          margin: "0px",
        }}
        listStyleType="none"
      >
        {chats.map((chat, index) => (
          <>
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={index}
              style={selectedChatIndex === index ? activeChatStyle : {}}
              onClick={() => handleChatItemClick(index)}
            >
              <Flex align="center" padding={4}>
                <Image
                  boxSize="2.5rem"
                  borderRadius="md"
                  src={chat.img}
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <Box>
                  <p style={{ fontSize: "16px", color: "#171717" }}>
                    {chat.name}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#636363",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {truncateText(chat.message, 30)}
                  </p>
                </Box>
              </Flex>
              <Box>
                <Dropdown
                  placement="bottom"
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <MoreVertical />
                    </Space>
                  </a>
                </Dropdown>
              </Box>
            </ListItem>
            <Divider />
          </>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default PeopleList;
