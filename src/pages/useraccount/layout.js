import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MainHeader from '@/components/mainHeader'
import UserRightSiderbar from '@/components/rightSidebars/userRightSiderbar'
import UserAccountSidebar from '@/components/leftSidebar/userAccountSidebar'

const UserAccountLayoutr = ({ children }) => {
    return (
        <Flex height="100vh" flexDirection="column" margin={{ md: "0 1%", lg: "0 8%", sm: "0" }}>
            <MainHeader />
            <Flex p="4">
                <UserAccountSidebar />
                <Box overflow='hidden' flex='1' pl='4%' pr='4%'>
                    {children}
                </Box>
                <UserRightSiderbar />
            </Flex>
        </Flex>
    )
}

export default UserAccountLayoutr