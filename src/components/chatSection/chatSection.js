"use client";
import {
  Button,
  HStack,
  Image,
  Input,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  UnorderedList,
} from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Camera, Maximize2, Mic, MoreVertical, Upload } from "lucide-react";
import { useRouter } from "next/navigation";

const ChatSection = () => {
  const router = useRouter();

  const chats = [
    {
      img: "https://placekitten.com/100/100",
      name: "Raunak Agarwal",
      message:
        "Hey, do you have any notes for Hey, do you have any notes for Hey, do you have any notes for ",
    },
    {
      img: "https://placekitten.com/100/100",
      name: "Rahul ",
      message:
        "Hey, do you have any notes for Hey, do you have any notes for Hey, do you have any notes for ",
    },
    {
      img: "https://placekitten.com/100/100",
      name: "Amit",
      message:
        "Hey, do you have any notes for Hey, do you have any notes for Hey, do you have any notes for ",
    },
    {
      img: "https://placekitten.com/100/100",
      name: "Sagar",
      message:
        "Hey, do you have any notes for Hey, do you have any notes for Hey, do you have any notes for ",
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Box>
      <UnorderedList listStyleType="none">
        {chats.map((chat, index) => (
          <>
            <ListItem key={index} py="2">
              <Popover placement="left-end">
                <PopoverTrigger>
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
                </PopoverTrigger>
                <PopoverContent
                  bg="white.900"
                  position="absolute"
                  right="10"
                  top="-60"
                >
                  <PopoverHeader>
                    <HStack align="center">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "280px",
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
                          <p style={{ fontSize: "12px", color: "#636363" }}>
                            Grand Master
                          </p>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Maximize2 onClick={() => router.push("/chat")} />
                        <MoreVertical />
                      </Box>
                    </HStack>
                  </PopoverHeader>
                  <PopoverBody
                    height="40vh"
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
                    <Flex align="end" pt="3" pr="2">
                      <Box width="auto" bg="brand.800" rounded="lg">
                        <Text fontSize="12px" p="2">
                          {chat.message}
                        </Text>
                      </Box>
                      <Image
                        boxSize="2rem"
                        borderRadius="md"
                        src={chat.img}
                        alt="Fluffybuns the destroyer"
                        ml="12px"
                      />
                    </Flex>
                    <Flex align="end" pt="3" pr="2">
                      <Image
                        boxSize="2rem"
                        borderRadius="md"
                        src={chat.img}
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <Box width="auto" bg="brand.900" rounded="lg">
                        <Text fontSize="12px" color="white.900" p="2">
                          {chat.message}
                        </Text>
                      </Box>
                    </Flex>
                  </PopoverBody>
                  <PopoverFooter>
                    <Input placeholder="Type here..." />
                    <HStack py="2" align="center" justify="space-between">
                      <Box
                        sx={{
                          display: "flex",
                          width: "280px",
                        }}
                      >
                        <Upload />
                        <Camera />
                        <Mic />
                      </Box>
                      <Button
                        size="sm"
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
                    </HStack>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </ListItem>
          </>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ChatSection;
