import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex } from "@chakra-ui/react";
import MainHeader from "../mainHeader";
import Leftsidebar from "../leftSidebar/sidebar";
import UserRightSiderbar from "../rightSidebars/userRightSiderbar";

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? "text-black font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

const ChatLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <MainHeader />
        <div className="flex pt-8">
          <Box overflow="hidden" flex="1" pl="6%" pr="4%">
            {children}
          </Box>
        </div>
      </div>
    </React.Fragment>
  );

};

export default ChatLayout;
