import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, } from 'swiper/modules';
import 'swiper/css';
import { Box, Card, Divider, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react';
import { Dot, MoreVertical } from 'lucide-react';
import EmojiGroup from '@/components/common/emojiGroup';
import LikeEmojiGroup from '@/components/common/likeEmojiGroup';

const CommentSlider = () => {
    return (
        <Box border='1px solid red' width='auto'>
        <Swiper pagination={{ dynamicBullets: true, }} modules={[Navigation, Pagination, Scrollbar,]}
            spaceBetween={15}
            slidesPerView={1.5}
            navigation={true}

        >
            {[...Array(4)].map(() => (
                <SwiperSlide> 
                   <Card bg='#F1F2F6' minW='250px'  rounded='2xl'>
                        <HStack align="center" justifyContent='space-between' padding={['3', null, '4']}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: ['auto', null, '280px'],
                                }}
                            >
                                <Box boxSize="38px">
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
                                    <p style={{ fontSize: '12px', color: '#636363' }}>2h ago</p>
                                </Box>
                            </Box>
                        </HStack>
                        <Text fontSize='14px' fontWeight='500' color='#16222C' p='3' lineHeight='24px'>
                            Yes, you can! But you need to be in 99.5%iler. I was also in such a situation earlier this year. If I had known this, than I wouldn’t have..... read more
                        </Text>
                        <HStack align="center" w='auto'  padding={['3', null, '4']} >
                            <Text style={{ fontSize: "12px", fontWeight: "600", color: "#455564", }}>Like</Text>
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
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
        </Box>
    )
}

export default CommentSlider