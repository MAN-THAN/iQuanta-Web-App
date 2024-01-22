import React from "react";
import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import HomeRightSidebar from "../rightSidebars/homeRightSidebar";
import MainLeftNavigation from "../leftNavigations/mainLeftNavigation";
import UserAccountSidebar from "../leftSidebar/userAccountSidebar";
import UserRightSiderbar from "../rightSidebars/userRightSiderbar";

const ChatLayout = ({ children }) => {
  return (
    <Box marginLeft={{ sm: "0", lg: "10%" }} marginRight={{ sm: "0", lg: "10%" }}>
      <MainHeader />
      <div className="flex pt-8">
        <Box overflow="hidden" flex="1" pl="6%" pr="6%">
          {children}
        </Box>
      </div>
    </Box>
  );
};
export default ChatLayout;
