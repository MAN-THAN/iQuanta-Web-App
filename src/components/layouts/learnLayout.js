import { Box, Flex, } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";
import MainLeftNavigation from "../leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import LearnRightSidebar from "../rightSidebars/learnRightSidebar";

const LearnLayout = ({ children }) => {

  return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <Box>
            <MainLeftNavigation />
          </Box>
          <Box overflow="hidden" flex="1" pl="6%" pr="4%">
            {children}
          </Box>
          <LearnRightSidebar />
        </div>
      </div>
  );
};

export default LearnLayout;
