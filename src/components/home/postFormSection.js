import { Box, Grid, GridItem, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import UpComeingCard from "@/components/feature/upComeingCard";

const PostFormSection = () => {
  return (
    <Box bg="#ffffff" roundedTop="2xl" mt='6'>
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab
            _selected={{ color: "#000", borderBottom: "2px solid black" }}
            color="#8D96A5"
            fontSize="16px"
            fontWeight="600"
          >
            Upcoming
          </Tab>
          <Tab
            _selected={{ color: "#000", borderBottom: "2px solid black" }}
            color="#8D96A5"
            fontSize="16px"
            fontWeight="600"
          >
            Past Classes
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PostFormSection;
