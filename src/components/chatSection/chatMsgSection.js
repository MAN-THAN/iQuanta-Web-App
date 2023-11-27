import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Box,
  Text,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { BsChat } from "react-icons/bs";
import ChatSection from "./chatSection";
import { ChevronDown, MessageCircle, SearchIcon } from "lucide-react";

const ChatMsgSection = () => {
  return (
    <>
      <Box>
        <Popover>
          <PopoverTrigger>
            <BsChat size="24px" />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <HStack align="center">
                <Text width="280px" color="#171717" fontSize="18px">
                  Messages
                </Text>
                <Box
                  sx={{
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <MessageCircle />
                  <ChevronDown />
                </Box>
              </HStack>
              <InputGroup size="md">
                <InputLeftElement>
                  <SearchIcon />
                </InputLeftElement>
                <Input pl="3.0rem" placeholder="Search" />
              </InputGroup>
            </PopoverHeader>
            <PopoverBody
              height="50vh"
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
              <ChatSection />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default ChatMsgSection;
