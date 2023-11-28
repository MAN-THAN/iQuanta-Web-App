import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Flex, HStack, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import NoteCard from './noteCard'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ColorSelector from '../common/colorSelector'
import { featursCard } from '@/utilities/comanData'



function MyNotes() {
    const router = useRouter();
    return (
        <Box mt='4' bg='#fff' roundedTop='2xl' p='4' >
            <Flex align='center' justifyContent='space-between'><Text fontSize='22px'>My notes</Text>
                <HStack align='center'>
                    <Box>
                        <ColorSelector />
                    </Box>
                    <ButtonGroup>
                        <Box
                            colorScheme="blue"
                            variant="solid"
                        >
                            <ChevronLeft />
                        </Box>
                        <Box
                            colorScheme="blue"
                            variant="solid"
                        >
                            <ChevronRight />
                        </Box>
                    </ButtonGroup>
                </HStack>
            </Flex>
            <Box>
                <HStack pt='6' pb='3' gap='3' maxW='800px' overflowX='scroll'>
                    {featursCard.map((data, index) => (
                        <Box key={index}>
                            <NoteCard  data={data} />
                        </Box>
                    ))}
                </HStack>
            </Box>
        </Box>
    )
}
export default MyNotes