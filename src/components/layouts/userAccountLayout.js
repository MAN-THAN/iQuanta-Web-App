import { Box, Flex, extendTheme } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import UserAccountSidebar from "../leftSidebar/userAccountSidebar";
import MainLeftNavigation from "../leftNavigations/mainLeftnavigation";
import { ChakraProvider } from "@chakra-ui/provider";

const UserAccountLayout = ({ children }) => {
 
  return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <Box>
            <UserAccountSidebar />
          </Box>
          <Box overflow="hidden" flex="1" pl="6%" pr="4%">
            {children}
          </Box>
          <UserRightSiderbar />
        </div>
      </div>
  );
};


export default UserAccountLayout