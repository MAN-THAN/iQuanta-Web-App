import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainHeader from "@/components/mainHeader";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import UserSettingSidebar from "@/components/leftSidebar/userSettingSidebar";

const UserSettingLayout = ({ children }) => {
  return (
    <>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <UserSettingSidebar />
          <Box overflow="hidden" flex="1" pl="6%" pr="4%">
            {children}
          </Box>
          <UserRightSiderbar />
        </div>
      </div>
    </>
  );
};

export default UserSettingLayout;
