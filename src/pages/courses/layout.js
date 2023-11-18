import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MainHeader from '../components/mainHeader'
import Leftsidebar from '../components/leftSidebar/sidebar'
import UserRightSiderbar from '../components/rightSidebar/userRightSiderbar'

const CoursesLayout = ({ children }) => {
    return (
        <Flex height="100vh" flexDirection="column" margin={{ md: "0 1%", lg: "0 8%", sm: "0" }}>
            <MainHeader />
            <Flex p="4">
                <Leftsidebar />
                <Box overflow='hidden' flex='1' pl='4%' pr='4%'>
                    {children}
                </Box>
                <UserRightSiderbar />
            </Flex>
        </Flex>
    )
}

export default CoursesLayout