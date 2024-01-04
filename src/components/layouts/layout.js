import { Box } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";
// import MainLeftNavigation from "../leftNavigations/mainLeftNavigation";
const RootLayout = ({ children }) => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      <MainHeader />
      <div className="flex pt-8">
        <Box>
          {/* <MainLeftNavigation /> */}
        </Box>
        <Box overflow="hidden" flex="1" pl="6%" pr="4%">
          {children}
        </Box>
        <Box display='none'>
          <UserRightSiderbar />
        </Box>
      </div>
    </div>
  );
};

export default RootLayout;
