import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

const GroupTabList = () => {
  const tabs = [
    {
      tabName: "Discussions",
    },
    {
      tabName: "Challenges",
    },
    {
      tabName: "Exam Details",
    },
    {
      tabName: "Courses",
    },
    {
      tabName: "Practice QAs",
    },
    {
      tabName: "Mock Tests",
    },
    {
      tabName: "Upcoming",
    },
    {
      tabName: "Files",
    },
    {
      tabName: "Media",
    },
    {
      tabName: "Topics",
    },
  ];

  return (
    <Tabs variant="soft-rounded">
      <TabList gap="4" pt="5">
        {tabs.map((da, i) => (
          <Tab
            key={i}
            fontSize="14px"
            width="fit-content"
            whiteSpace="nowrap"
            bg="black.700"
            color="#fff"
            _selected={{
              color: "#333",
              bg: "#fff",
            }}
            border="1px solid"
            px="3"
          >
            {da.tabName}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default GroupTabList;
