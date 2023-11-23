import ChatMsgSection from "@/components/chatSection/chatMsgSection";
import ChatSection from "@/components/chatSection/chatSection";
import RootLayout from "@/components/layouts/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { ChevronDown, MessageCircle, SearchIcon } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Accordion
        width="20%"
        zIndex='99'
        sx={{ position: "fixed", bottom: "1", right: "9" }}
        defaultIndex={[0]}
        allowMultiple
      >
        <AccordionItem>
          <AccordionButton bg="#FFFFFF" borderTopRadius='xl'>
            <HStack align="center">
              <Text color="#171717" fontSize="18px">
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
          </AccordionButton>
          <AccordionPanel height='50vh' overflowY="scroll" overflowX="hidden" sx={{
                                        '::-webkit-scrollbar': {
                                            width: '5px',
                                        },
                                        '::-webkit-scrollbar-thumb': {
                                            background: '#8D96A5',
                                            borderRadius: '10px',

                                        },
                                    }}  pb={4} bg="#FFFFFF">
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
    </div>
  );
};
Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;
