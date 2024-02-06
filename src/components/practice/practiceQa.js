import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import BackButton from "../common/backButton";
import PracticeAllTopic from "./practiceAllTopic";

const PracticeQa = () => {
  return (
    <Box roundedTop="2xl" bg="#fff">
      <HStack p="4">
        <BackButton />
        <Text fontWeight="600">Practice Q&As</Text>
      </HStack>
      <Tabs isFitted>
        <TabList>
          <Tab
            bg="#fff"
            _selected={{ color: "#000", borderBottom: "2px solid black" }}
            color="#8D96A5"
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight="600"
          >
            <HStack py={{ base: "3", md: "4" }}>
              <Text fontSize={{ base: "12px", md: "16px" }}>Foreign Studies</Text>
            </HStack>
          </Tab>
          <Tab
            bg="#fff"
            _selected={{ color: "#000", borderBottom: "2px solid black" }}
            color="#8D96A5"
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight="600"
          >
            <HStack py={{ base: "0", md: "4" }}>
              <Text fontSize={{ base: "12px", md: "16px" }}>CAT & MBA</Text>
            </HStack>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="4">
            <PracticeAllTopic />
            
          </TabPanel>
          <TabPanel padding="0"></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PracticeQa;
