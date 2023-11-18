import { Box, Divider, Flex, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Tag, Text } from '@chakra-ui/react'
import { CheckIcon, ChevronDownIcon, Dot, ImagePlus, MessageCircle, MoreVertical, Share2, ThumbsUp } from 'lucide-react'
import React from 'react'
import LikeEmojiGroup from '@/components/common/likeEmojiGroup'
import { useRouter } from 'next/navigation'

const PostDetails = () => {
    const router = useRouter();

    return (
        <Box bg='#fff' mt='4' rounded='xl'>
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
                    <Tag bg='#5146D6' p='2' color='#fff' rounded='full'>Concept 1</Tag>
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
            </Stack>
            <Divider />
            <Flex align='center' justify='space-between' p='4'>
                <HStack><ThumbsUp /> <span>Like</span></HStack>
                <HStack onClick={() => router.push(`/learn/classList/2/6`)}><MessageCircle /> <span>Comment</span></HStack>
                <HStack onClick={() => router.push(`/learn/classList/2/6`)}><Share2 /> <span>Share</span></HStack>
            </Flex>
            <Divider />
            <Stack padding={['3', null, '4']}>
                <Box px='4' py='1'>
                    <Menu>
                        <MenuButton
                            px={4}
                            py={2}
                            transition='all 0.2s'
                            borderRadius='md'
                            borderWidth='1px'
                            _hover={{}}
                            _expanded={{ borderColor: "black" }}
                        >
                            <HStack><span style={{ fontSize: "14px", }}>Top Comments</span> <ChevronDownIcon size='14px' /></HStack>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Latest</MenuItem>
                            <MenuItem>2 Month ago</MenuItem>
                            <MenuDivider />
                        </MenuList>
                    </Menu>
                </Box>


                <Stack>
                    <Box padding={['3', null, '4']}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: ['auto', null, '280px'],
                        }}
                    >
                        <Box boxSize="40px">
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
                            <p style={{ fontSize: '14px', color: '#171717', fontWeight: '600' }}>Hardik Beniwal</p>
                            <p style={{ fontSize: '12px', color: '#636363' }}>Master Level</p>
                        </Box>
                    </Box>
                    <Text paddingLeft="4rem" textAlign='justify' fontSize='14px' >
                        Yes, you can! But you need to be in 99.5%iler. I was also in such a situation earlier this year. If I had known this, than I wouldn’t have grinded this if it weren’t for Banking exam. Moreover, If anyone is interested, feel free to go through my courses. You’ll like it :)
                    </Text>
                    <HStack align="center" paddingLeft='4rem'>
                        <Text fontSize="12px" color='#455564'>Like</Text>
                        <Dot color="#8D96A5" />
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <LikeEmojiGroup />
                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#455564", }} >12</span>
                        </Box>
                        <Stack direction='row' h='12px'>
                            <Divider border='0.2' orientation='vertical' />
                        </Stack>
                        <Text fontSize="12px" color='#455564'>Reply</Text>
                        <Dot color="#8D96A5" />
                        <Box>
                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#455564" }}>13</span>
                            <span style={{ fontSize: "12px", fontWeight: "500", color: "#8D96A5", paddingLeft: "5px" }}>comments</span>
                        </Box>
                    </HStack>
                    <Box padding='4'>
                    <InputGroup mt='4' >
                        <InputLeftElement>
                            <Box boxSize='30px'>
                                <Image
                                    objectFit='cover'
                                    width='100%'
                                    height='100%'
                                    className="rounded-md"
                                    src="/static/images/Profile.jpeg"
                                    alt="Profile Image"
                                />
                            </Box>
                        </InputLeftElement>
                        <Input w='full' placeholder='Start discussion' />
                        <InputRightElement pr='10'>
                            <Flex gap='2' bg='#fff'>
                                <Box>
                                    <ImagePlus />
                                </Box>
                                <Text>Post</Text>
                            </Flex>
                        </InputRightElement>
                    </InputGroup>
                       
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PostDetails