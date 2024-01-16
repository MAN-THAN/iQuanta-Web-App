import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import MainLeftNavigation from "../leftNavigations/mainLeftNavigation";
import PracticeRightSidebar from "../rightSidebars/practiceRightSidebar";
const MockTestQuizLayout = ({ children }) => {
  return (
    <Box>
      <Box marginLeft={{ sm: "0", lg: "10%" }} marginRight={{ sm: "0", lg: "10%" }}>
        <MainHeader />
      </Box>
      <Box overflow="hidden">
        {children}
      </Box>
    </Box>
  );
};

export default MockTestQuizLayout;
