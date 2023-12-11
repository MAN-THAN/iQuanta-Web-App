import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, extendTheme } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import UserRightSiderbar from "../rightSidebars/userRightSiderbar";
import { ChakraProvider } from "@chakra-ui/provider";
import MainLeftnavigation from "../leftNavigations/mainLeftnavigation";

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;
  const theme = extendTheme({});
  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${active ? "text-black font-semibold" : "text-gray-500"}`}
    >
      {children}
    </Link>
  );
};

const CourseLayout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
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
  </ChakraProvider>
  );
};

export default CourseLayout;
