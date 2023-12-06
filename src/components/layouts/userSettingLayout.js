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
        <Box display="flex" padding="8">
          <Box className="basis-1/12">
            <UserSettingSidebar />
          </Box>
          <Box overflow="hidden" className="basis-10/12" pl="6%" pr="4%">
            {children}
          </Box>
          <Box className="basis-4/12">
            <UserRightSiderbar />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default UserSettingLayout;
