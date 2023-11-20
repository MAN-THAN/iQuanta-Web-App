'use client'
import { Box, Divider, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation';
import CustomLinkItem from '../common/customLinkItem';


const UserAccountSidebar = () => {
    const path = usePathname();
    return (
        <Box width='15%' display={{ md: "none", lg: "block", sm: "none" }}>
            <UnorderedList styleType='none' textAlign='start' color='#455564' >
                <CustomLinkItem href='/useraccount'>
                    <ListItem key='1' className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                        <span>My Dashboard</span>
                        <ChevronRight size='16px' />
                    </ListItem>
                </CustomLinkItem>
                <CustomLinkItem href='/mypost'>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>My Post</span>
                    <ChevronRight size='16px' />
                </ListItem>
                </CustomLinkItem>
                <Divider borderWidth='1px' borderColor='#00000033' />

                <Text color='#8D96A5' fontSize='12px' lineHeight='2' fontWeight='700'>MY ACTIVITIES</Text>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>My Uploads</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>My Saved Posts</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <Divider borderWidth='1px' borderColor='#00000033' />

                <Text color='#8D96A5' fontSize='12px' lineHeight='2' fontWeight='700' >MY COURSES</Text>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>CAT Full Courses</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>GRE Full Courses</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <Divider borderWidth='1px' borderColor='#00000033' />

                <Text color='#8D96A5' fontSize='12px' lineHeight='2' fontWeight='700'>MY LEARNING</Text>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>Error Tracker</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>My Notes</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <Divider borderWidth='1px' borderColor='#00000033' />

                <Text color='#8D96A5' fontSize='12px' lineHeight='2' fontWeight='700' textTransform='uppercase'>My Rewards & Payments</Text>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>Scratch Cards</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>My Badges</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>Redeem Points</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>Payment History</span>
                    <ChevronRight size='16px' />
                </ListItem>
                <ListItem className="flex justify-between items-center" py='3' fontSize='14px' fontWeight="semibold">
                    <span>Refer & Earn</span>
                    <ChevronRight size='16px' />
                </ListItem>
            </UnorderedList>
        </Box>
    )
}

export default UserAccountSidebar