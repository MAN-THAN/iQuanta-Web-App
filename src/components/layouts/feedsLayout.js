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
    <Box marginLeft={{ sm: "0", lg: "10%" }} marginRight={{ sm: "0", lg: "10%" }}>
      <MainHeader />
      <div className="flex pt-8">
        <Box>
          <MainLeftnavigation />
        </Box>
        <Box overflow="hidden" flex="1" pl="6%" pr="6%">
          {children}
        </Box>
        <Box display={{ md: "block", sm: "none" }}>
          <HomeRightSidebar />
        </Box>
      </div>
    </Box>
  );
};

export default FeedsLayout;
