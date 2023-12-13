import React from "react";
import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import MainLeftnavigation from "@/components/leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";


const RootLayout = ({ children }) => {
  
  return (
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
  );
};

export default RootLayout;
