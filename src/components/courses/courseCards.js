import React from 'react'
import { Box, Card, CardBody, CardHeader, HStack, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { randomColors } from '@/utilities/commonFunctions'


const CourseCards = ({ data, key }) => {

    return (
        <Box width='250px' key={key} rounded='2xl' bg={randomColors(["#336792", "#E56C51", "#339287", "#643392"])} p='4' color='#fff' >
            <Box width='210px' height='150px' border='2px solid black' rounded='lg' >
                <Image width='100%' height='100%' objectFit='cover' src={data.img} />
            </Box>
            <Text fontSize='18px' fontWeight='500' pt='3'>{data.name}</Text>
        </Box>
    )
}

export default CourseCards