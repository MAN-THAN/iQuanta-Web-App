import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import SubTopicLeftBar from "../leftSidebar/subTopicLeftBar";

const SubTopicLayout = ({ children }) => {
  return (
    <>
      <Box marginLeft={{ sm: "0", lg: "10%" }} marginRight={{ sm: "0", lg: "10%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <Box>
            <SubTopicLeftBar />
          </Box>
          <Box overflow="hidden" flex="1" pl="6%" pr="6%">
            {children}
          </Box>
          <Box display={{ md: "block", sm: "none" }}>
            <UserRightSiderbar />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default SubTopicLayout;
