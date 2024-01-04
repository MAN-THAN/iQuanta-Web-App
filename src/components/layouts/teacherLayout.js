import React from "react";
import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import MainLeftNavigation from "@/components/leftNavigations/mainLeftNavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import TeacherRightSidebar from "../rightSidebars/teacherRightSidebar";

const TeacherLayout = ({ children }) => {
  
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
          <TeacherRightSidebar />
        </div>
      </div>
  );
};

export default TeacherLayout;
