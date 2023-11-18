import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import featursCard from '../../utilities/comanData'
import NoteCard from '../learnAndClass/noteCard'

const PreparationTips = () => {
    return (
        <Box>
            <Flex align='center' justify='space-between' fontSize='18px' fontWeight='500' p='4'>
                <Text>Tips for preparation</Text>
                <HStack>
                    <Box><ChevronLeft /></Box>
                    <Box><ChevronRight /></Box>
                </HStack>
            </Flex>
            <Box>
                <HStack pt='6' pb='3' gap='3' maxW='800px' overflowX='scroll'>
                    {featursCard.map((data, index) => (
                        <Box >
                            <NoteCard key={index} data={data} />
                        </Box>
                    ))}
                </HStack>
            </Box>
        </Box>
    )
}

export default PreparationTips