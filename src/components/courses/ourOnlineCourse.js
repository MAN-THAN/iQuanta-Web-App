"use client"
import React from 'react'
import { Box, Flex, HStack, Text,  } from '@chakra-ui/react'
import { ListFilter } from 'lucide-react'
import FeaturesCard from './featuresCard'
import featursCard from '../../utilities/comanData'
import { useRouter } from 'next/navigation'



const OurOnlineCourse = () => {
    const router = useRouter();

    const handleCardButtonClick = (route) => {
        router.push(route);
    }

    return (
        <Box bg='#fff' roundedBottom='2xl' p='4' mt='3'>
            <HStack align='center' justify='space-between'>  <Text fontSize='22px'>Our Online Courses</Text>
                <ListFilter /></HStack>
            <Flex pt='4' gap='6' flexWrap='wrap'>
                {featursCard.map((data, index) => (
                    <FeaturesCard data={data} key={index} onButtonClick={() => handleCardButtonClick(`/courses/${index}`)} />
                ))}
            </Flex>
        </Box>
    )
}

export default OurOnlineCourse