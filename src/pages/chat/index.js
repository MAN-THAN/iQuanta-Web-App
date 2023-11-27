import React, { useState } from "react";
import ChatMsgSection from "@/components/chatSection/chatMsgSection";
import ChatSection from "@/components/chatSection/chatSection";
import ChatLayout from "@/components/layouts/chatLayout";
import { chats } from "@/utilities/comanData";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  Camera,
  EditIcon,
  Mic,
  SearchIcon,
  Upload,
} from "lucide-react";
import ChatHeader from "@/components/chatSection/chatHeader";
import MsgChatSection from "@/components/chatSection/msgChatSection";

const ChatPage = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  const [messages, setMessages] = useState([
	{ from: "computer", text: "Hi, My Name is HoneyChat" },
	{ from: "me", text: "Hey there" },
	{ from: "me", text: "Myself Ferin Patel" },
	{
  	from: "computer",
  	text: "Nice to meet you. You can send me message and i'll reply you with same message.",
	},
  ]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const handleChatItemClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <>
      <Box>
        <HStack alignItems="start" justifyContent="space-between">
          <Box bg="white.900" w="30%" h="80vh" rounded="lg">
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
            <Box>
              <UnorderedList>
                <UnorderedList listStyleType="none">
                  {chats.map((chat, index) => (
                    <ListItem
                      key={index}
                      py="2"
                      borderLeft="1px"
                      onClick={() => handleChatItemClick(index)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
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
                      </Box>
                    </ListItem>
                  ))}
                </UnorderedList>
              </UnorderedList>
            </Box>
          </Box>
          <Box bg="white.900" w="70%" h="80vh" rounded="lg">
            {selectedChatIndex !== null && (
              <>
                <ChatHeader chatsData={chats[selectedChatIndex]}/>
                <Divider />

                <Box
                  h="65vh"
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
                    <MsgChatSection messages={messages}/>
                </Box>
                
                <Box
                  display="flex"
                  flexDirection="row"
                  gap="6"
                  alignItems="center"
                  pr={4}
                >
                  <InputGroup pl="4">
                    <Input type="tel" pr="6.3rem" placeholder="Phone number" />
                    <InputRightElement
                      width="100px"
                      alignItems="center"
                      justifyContent="space-around"
                    >
                      <Camera />
                      <Upload />
                      <Mic />
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    size="md"
                    sx={{
                      bg: "black !important",
                      color: "#fff",
                      margin: "0 auto",
                      fontSize: "12px",
                    }}
                    variant="solid"
                  >
                    Send
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

ChatPage.getLayout = (page) => {
  return <ChatLayout>{page}</ChatLayout>;
};

export default ChatPage;
