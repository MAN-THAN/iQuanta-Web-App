import React, { useState } from "react";
import ChatLayout from "@/components/layouts/chatLayout";
import { chats, messages } from "@/utilities/comanData";
import { Box, Divider, HStack, Input, InputGroup, InputRightElement, Button, Stack, Flex } from "@chakra-ui/react";
import { Camera, Mic, Upload } from "lucide-react";
import ChatHeader from "@/components/chatSection/chatHeader";
import MsgChatSection from "@/components/chatSection/msgChatSection";
import PeopleList from "./peopleList";

const ChatDetailsView = () => {
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
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
  };

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <>
      <Box>
        <Flex alignItems="start" gap="6" justifyContent="space-between">
          {/* <Box bg="white.900" w="30%" h="80vh" rounded="lg">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              padding="4"
            >
              <HStack>
                <ArrowLeft />
                <Text fontSize="lg">Messages</Text>
              </HStack>
              <EditIcon />
            </Flex>
            <Box padding={4}>
              <InputGroup>
                <InputLeftElement>
                  <SearchIcon />
                </InputLeftElement>
                <Input pl="3.0rem" placeholder="Search" />
              </InputGroup>
            </Box>
            <UnorderedList
              sx={{
                margin: "0px",
              }}
              listStyleType="none"
            >
              {chats.map((chat, index) => (
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
              ))}
            </UnorderedList>
          </Box> */}
          <Box flexBasis="30%" display={{ base: "none", md: "block" }}>
            <PeopleList />
          </Box>
          <Box bg="white.900" h="85vh" rounded="lg" flexBasis={{ base: "100%", md: "70%" }}>
            {selectedChatIndex !== null && (
              <Stack>
                <ChatHeader chatsData={chats[selectedChatIndex]} />
                <Divider />
                <Box
                  h="68vh"
                  overflowY="scroll"
                  overflowX="hidden"
                  sx={{
                    "::-webkit-scrollbar": {
                      width: "5px",
                    },
                    "::-webkit-scrollbar-thumb": {
                      background: "#8D96A5",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <MsgChatSection messages={messages} />
                </Box>
                <Box display="flex" flexDirection="row" gap="6" pr={4}>
                  <InputGroup pl="4">
                    <Input type="tel" pr="6.3rem" placeholder="Type here..." />
                    <InputRightElement width="100px" alignItems="center" justifyContent="space-around">
                      <Camera />
                      <Upload />
                      <Mic />
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    size="md"
                    bg="black.900"
                    sx={{
                      color: "#fff",
                      margin: "0 auto",
                      fontSize: "12px",
                    }}
                    variant="solid"
                  >
                    Send
                  </Button>
                </Box>
              </Stack>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ChatDetailsView;
