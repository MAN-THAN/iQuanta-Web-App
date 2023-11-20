import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainHeader from "../mainHeader";

import MainLeftnavigation from "@/components/leftNavigations/mainLeftnavigation";
import UserRightSiderbar from "@/components/rightSidebars/userRightSiderbar";

const RootLayout = ({ children }) => {
    return (
        <>
            <div style={{marginLeft:'4%',marginRight:'4%'}}>
                <MainHeader />
                <div className="flex ">
                    <MainLeftnavigation />
                    <Box
                        overflow="hidden"
                        flex="1"
                        pl={{ md: "4%", lg: "4%", sm: "1%" }}
                        pr="4%"
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
