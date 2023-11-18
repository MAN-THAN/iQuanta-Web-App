import { Box, Divider, Flex, HStack, Image, Progress, Tag, Text } from '@chakra-ui/react'
import TextArea from 'antd/es/input/TextArea'
import { Dot, MessageCircle, MoreVertical, ThumbsUp } from 'lucide-react'
import React from 'react'
import LikeEmojiGroup from '../common/likeEmojiGroup'

const QuizPostCard1 = () => {
    return (
        <Box bg='#fff' mt='4'>
            <Flex align='center' px='6' py='3' justify='space-between'>
                <Text>29s</Text>
                <Box display='flex' alignItems='center' gap='4'>
                    <Tag bg='#5146D6' p='2' color='#fff' rounded='full'>Concept 2</Tag>
                    <MoreVertical size='24px' />
                </Box>
            </Flex>
            <Progress colorScheme='blackAlpha' sx={{ bgColor: "#fff" }} value={80} mt='2' />
            <Box p='4'>
                <Box display='flex' alignItems='center' gap='4' p='6'>
                    <Tag bg='#5146D6' p='1' color='#fff' rounded='lg'>QUID: 2455</Tag>
                </Box>
                <Box px='6'>
                    <Text>The figure above shows the graph of the function f, defined by f of x= the absolute value of 2x, end absolute value, +4 for all numbers x. For which of the following functions g, defined for all numbers x, does the graph of g intersect graph of f ?</Text>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' py='6' >
                    <Image src='/qus.png' />
                </Box>
                <Box p='6'>
                    <TextArea rows={4} placeholder="Write your answer here..." maxLength={6} />
                </Box>
                <HStack align='center' fontWeight='400' fontSize='14px' padding='6'>
                    <Box display='flex' alignItems='center'>
                        <LikeEmojiGroup />
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564", paddingLeft: "5px" }} >423</span>
                    </Box>
                    <Box pl='5'>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>13</span>
                        <span style={{ fontSize: "14px", fontWeight: "500", color: "#8D96A5", paddingLeft: "5px" }}>comments</span>
                    </Box>
                    <Dot color="#8D96A5" />
                    <Box>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>53</span>
                        <span style={{ fontSize: "14px", fontWeight: "500", color: "#8D96A5", paddingLeft: "5px" }}>following</span>
                    </Box>
                </HStack>
                <Divider />
                <Flex align='center' justify='space-between' p='3'>
                    <HStack><ThumbsUp /> <span>Like</span></HStack>
                    <HStack><MessageCircle /> <span>Comment</span></HStack>
                </Flex>
                <Divider />
            </Box>
        </Box>
    )
}

export default QuizPostCard1