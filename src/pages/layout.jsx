import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MainHeader from '../components/mainHeader'

import MainLeftnavigation from '@/components/leftNavigations/mainLeftnavigation'
import UserRightSiderbar from '@/components/rightSidebars/userRightSiderbar'

const HomeLayout = ({ children }) => {
    return (
        <Flex height="100vh" flexDirection="column" margin={{ md: "0 1%", lg: "0 8%", sm: "0" }}>
            <MainHeader />
            <Flex p="4">
                <MainLeftnavigation/>
                <Box overflow='hidden' flex='1' pl={{ md: '4%', lg: '4%', sm: "1%" }} pr='4%'>
                    {children}
                </Box>
                <UserRightSiderbar />
            </Flex>
        </Flex>
    )
}

export default HomeLayout