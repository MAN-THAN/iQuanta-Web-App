import React from 'react'
import { Box, Text, } from '@chakra-ui/react'
import { randomColors } from '../../utilities/commonFunctions'


const NoteCard = ({ data, key }) => {

    return (
        <Box display='flex' flexDirection='column' justifyContent='space-between' width='550px' height='150px' key={key} rounded='2xl' bg={randomColors(["#5146D64D", "#EEB5EF", "#EFE2B5", "#B5D7EF", "#E56C5166"])} p='4' color='#fff' >
           <Box> <Text fontSize='18px' fontWeight='500'>Important marked courses have higher weightage and should be well prepared</Text></Box>
           <Box> <Text fontSize='14px'>Topic - Grammar</Text></Box>
        </Box>
    )
}

export default NoteCard