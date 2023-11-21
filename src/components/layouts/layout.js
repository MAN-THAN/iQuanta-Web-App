import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";
import MainLeftnavigation from "@/components/leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <div style={{ marginLeft: "8%", marginRight: "8%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <MainLeftnavigation />
          <Box
            bg="#ffffff"
            overflow="hidden"
            flex="1"
            pl={{ md: "4%", lg: "4%", sm: "5%" }}
           pr='4%'
          >
            {children}
          </Box>
          <UserRightSiderbar />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
