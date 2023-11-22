import { Box, Divider, Flex, HStack, Image, Progress, Tag, Text, VStack } from '@chakra-ui/react'
import { Dot, MessageCircle, MoreVertical, ThumbsUp } from 'lucide-react'
import LikeEmojiGroup from '../common/likeEmojiGroup'

const QuizPostCard2 = () => {
    return (
        <Box bg='#fff' mt='4'>
            <Flex align='center' px='6' py='3' justify='space-between'>
                <Text color='#FB9650' fontWeight='600'>29s</Text>
                <Box display='flex' alignItems='center' gap='4'>
                    <Tag bg='#5146D6' p='2' bgColor='#FB9650' color='#fff' rounded='full'>Question 4</Tag>
                    <MoreVertical size='24px' />
                </Box>
            </Flex>
            <Progress size='sm' colorScheme='blackAlpha' sx={{ bgColor: "#fff" }} value={80} mt='2' />
            <Box p='4'>
                <Box display='flex' alignItems='center' gap='4' p='6'>
                    <Tag bg='#5146D6' p='1' color='#fff' rounded='lg'>QUID: 2455</Tag>
                </Box>
                <Box px='6'>
                    <Text>The figure above shows the graph of the function f, defined by f of x= the absolute value of 2x, end absolute value ?</Text>
                </Box>
                <VStack p='6' fontSize='16px' fontWeight='500' >
                    <Flex display='flex' bg='#F1F2F6' width='100%' p='4' rounded='2xl'  gap='6'>
                        <Text >A.</Text>
                        <Text fontWeight='600' >0</Text>
                    </Flex>
                    <Flex display='flex' bg='#F1F2F6' width='100%' p='4' rounded='2xl' mt='3' gap='6'>
                        <Text >B.</Text>
                        <Text fontWeight='600' >0</Text>
                    </Flex>
                    <Flex display='flex' bg='#F1F2F6' width='100%' p='4' rounded='2xl' mt='3' gap='6'>
                        <Text >C.</Text>
                        <Text fontWeight='600' >0</Text>
                    </Flex>
                    <Flex display='flex' bg='#F1F2F6' width='100%' p='4' rounded='2xl' mt='3' gap='6'>
                        <Text >D.</Text>
                        <Text fontWeight='600' >0</Text>
                    </Flex>
                </VStack>
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

export default QuizPostCard2