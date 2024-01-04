import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";
import MainLeftNavigation from "@/components/leftNavigations/mainLeftNavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import LearnRightSidebar from "../rightSidebars/learnRightSidebar";
import HomeRightSidebar from "../rightSidebars/homeRightSidebar";

const GroupsLayout = ({ children }) => {
  return (
    <Box marginLeft={{ sm: "0", lg: "10%" }} marginRight={{ sm: "0", lg: "10%" }}>
      <MainHeader />
      <div className="flex pt-8">
        <Box>
          <MainLeftNavigation />
        </Box>
        <Box overflow="hidden" flex="1" px={{base:"2%" ,md:"6%"}}>
          {children}
        </Box>
        <Box display={{ md: "block", sm: "none" }}>
          <HomeRightSidebar />
        </Box>
      </div>
    </Box>
  );
};

export default GroupsLayout;
