import { Box, Card, Divider, Flex, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { Dot, MessageCircle, MoreVertical, ThumbsUp } from 'lucide-react'
import React from 'react'
import LikeEmojiGroup from '../common/likeEmojiGroup'
import CommentSlider from './commentSlider/commentSlider'

const TextCardPostCard = () => {
    return (
        <Box bg='#fff' mt='4'>
            <HStack align="center" justifyContent='space-between' padding={['3', null, '4']}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: ['auto', null, '280px'],
                    }}
                >
                    <Box boxSize="45px">
                        <Image
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            className="rounded-md"
                            src="/profile.jpeg"
                            alt="Profile Image"
                        />
                    </Box>
                    <Box ml="2">
                        <p style={{ fontSize: '18px', color: '#171717', fontWeight: '600' }}>Hardik Beniwal</p>
                        <p style={{ fontSize: '14px', color: '#636363' }}>2h ago</p>
                    </Box>
                </Box>
                <Box display='flex' alignItems='center' gap='4'>
                    <Tag bg='#5146D6' p='2' color='#fff' rounded='full'>Concept 2</Tag>
                    <MoreVertical size='24px' />
                </Box>
            </HStack>
            <Stack padding={['3', null, '4']}>
                <Card bg='#1D1D1D' p='20'>
                    <Text color='#fff' fontSize='32px'>You must know how to read the passage fast (Speed reading techniques must be followed)</Text>
                </Card>
                <HStack align='center' fontWeight='400' fontSize='14px' padding='4'>
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
            </Stack>
            <Box p='0'>
                <CommentSlider />
            </Box>
        </Box>
    )
}

export default TextCardPostCard