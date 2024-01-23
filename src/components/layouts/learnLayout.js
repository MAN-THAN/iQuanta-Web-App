import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
<<<<<<< HEAD
import MainLeftNavigation from "../leftNavigations/mainLeftNavigation";
=======
import MainLeftNavigation from "../leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
>>>>>>> 8eec1a9f3d66784676b4fec56f9fd7ca855ae736
import LearnRightSidebar from "../rightSidebars/learnRightSidebar";

const LearnLayout = ({ children }) => {
  return (
    <Box marginLeft={{ sm: "0", lg: "10%" }} marginRight={{ sm: "0", lg: "10%" }}>
      <MainHeader />
      <div className="flex pt-8">
        <Box>
          <MainLeftNavigation />
        </Box>
        <Box overflow="hidden" flex="1" pl="6%" pr="6%">
          {children}
        </Box>
        <Box display={{ md: "block", sm: "none" }}>
          <LearnRightSidebar />
        </Box>
      </div>
    </Box>
  );
};

export default LearnLayout;
