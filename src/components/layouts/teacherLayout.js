import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";
import MainLeftnavigation from "@/components/leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
import LearnRightSidebar from "../rightSidebars/learnRightSidebar";
import TeacherRightSidebar from "../rightSidebars/teacherRightSidebar";

const TeacherLayout = ({ children }) => {
  return (
    <>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <MainHeader />
        <Box display="flex" padding="8">
          <Box className="basis-1/12">
          <MainLeftnavigation />
          </Box>
          <Box overflow="hidden" className="basis-10/12" pl="6%" pr="4%">
            {children}
          </Box>
          <Box className="basis-4/12">
          <TeacherRightSidebar />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default TeacherLayout;
