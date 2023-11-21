import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import MainLeftnavigation from "@/components/leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";

const RootLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <Box>
            <MainLeftnavigation />
          </Box>
          <Box overflow="hidden" flex="1" pl="6%" pr="4%">
            {children}
          </Box>
          <UserRightSiderbar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default RootLayout;
