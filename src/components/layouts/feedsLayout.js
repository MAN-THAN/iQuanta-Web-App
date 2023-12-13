import React from "react";
import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import MainLeftnavigation from "@/components/leftNavigations/mainLeftnavigation";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import HomeRightSidebar from "../rightSidebars/homeRightSidebar";
import UserRightSiderbar from "../rightSidebars/userRightSiderbar";

const FeedsLayout = ({ children }) => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      <MainHeader />
      <div className="flex pt-8">
        <Box>
          <MainLeftnavigation />
        </Box>
        <Box overflow="hidden" flex="1" pl="6%" pr="6%">
          {children}
        </Box>
        <Box>
          <HomeRightSidebar />
        </Box>
      </div>
    </div>
  );
};

export default FeedsLayout;
