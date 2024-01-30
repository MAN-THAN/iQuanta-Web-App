import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import FilterTopicCard from "../common/filterCard";

const TopicDetailsTab = () => {
  return (
    <Box bg="white.900" p="6">
      <Flex justifyContent='space-between'>
        <Text>All Topics</Text>
        <FilterTopicCard />
      </Flex>
    </Box>
  );
};

export default TopicDetailsTab;
