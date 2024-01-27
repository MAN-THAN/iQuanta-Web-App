import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

const DoubtSolvingTab = () => {
  return (
    <>
      <Box mt={{ base: "6", md: "12" }}>
        <Tabs isFitted>
          <TabList>
            <Tab
              roundedTopLeft="2xl"
              bg="#fff"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="600"
            >
              <HStack py={{ base: "3", md: "4" }}>
                <Text fontSize={{ base: "12px", md: "16px" }}>Discussion</Text>
              </HStack>
            </Tab>
            <Tab
              roundedTopRight="2xl"
              bg="#fff"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="600"
            >
              <HStack py={{ base: "0", md: "4" }}>
                <Text fontSize={{ base: "12px", md: "16px" }}>Challenges</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
          
            </TabPanel>
            <TabPanel padding="0">
          
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default DoubtSolvingTab;
