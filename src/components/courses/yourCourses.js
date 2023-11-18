"use client"
import React from 'react'
import { Box, Button, Card, CardBody, CardHeader, Flex, HStack, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import CourseCards from './courseCards'
import featursCard from '../../utilities/comanData'
import { useRouter } from 'next/navigation'



function YourCourses() {
    const router = useRouter();
   
    return (
        <Box mt='4' bg='#fff' roundedTop='2xl' p='4' >
            <Text fontSize='22px'>Your Courses</Text>
            <Box>
                <HStack pt='6' pb='3' gap='3' maxW='800px' overflowX='scroll'>
                    {featursCard.map((data, index) => (
                        <Box>
                            <CourseCards key={index} data={data} />
                        </Box>
                    ))}
                </HStack>
            </Box>
        </Box>
    )
}

export default YourCourses