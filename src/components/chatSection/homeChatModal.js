import ChatMsgSection from "./chatMsgSection";
import ChatSection from "./chatSection";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { ChevronDown, MessageCircle, SearchIcon } from "lucide-react";

const HomeChatModal = () => {
  return (
    <Accordion
      width="20%"
      zIndex="99"
      sx={{ position: "fixed", bottom: "1", right: "9" }}
      defaultIndex={[0]}
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton
          bg="white.900"
          borderTopRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          _hover={{ background: "white.900" }}
        >
          <Text color="#171717" fontSize="18px">
            Messages
          </Text>
          <HStack>
            <MessageCircle />
            <ChevronDown />
          </HStack>
        </AccordionButton>
        <AccordionPanel
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
          pb={4}
          bg="#FFFFFF"
        >
          <InputGroup size="md">
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input pl="3.0rem" placeholder="Search" />
          </InputGroup>
          <ChatSection />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default HomeChatModal;
