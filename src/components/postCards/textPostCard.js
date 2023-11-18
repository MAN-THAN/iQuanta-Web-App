import { Box, Divider, Flex, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { Dot, MessageCircle, MoreVertical, ThumbsUp } from 'lucide-react'
import LikeEmojiGroup from '../common/likeEmojiGroup'
import CommentSlider from './commentSlider/commentSlider'
import { useRouter } from 'next/navigation'

const TextPostCard = ({classId}) => { 
    const router = useRouter();

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
                            src="/static/images/Profile.jpeg"
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
                <Text fontSize='14px' lineHeight='24px'>
                    There are two writing tasks you'll have to conquer on the GRE to get the score you deserve: the argument essay and the issue essay. We won't be going over the broad view in this article, but instead will concentrate on some of the finer details. Both essays are graded holistically.
                    This means that you'll be judged not only on your reasoning, but also on how you write...<br />
                    <span className='font-semibold'>see more</span>
                </Text>
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
                    <HStack onClick={()=>router.push(`/learn/classList/${classId}/6`)}><MessageCircle /> <span>Comment</span></HStack>

                </Flex>
                <Divider />
            </Stack>
            <Box p='4'>
                <CommentSlider />
            </Box>
        </Box>
    )
}

export default TextPostCard