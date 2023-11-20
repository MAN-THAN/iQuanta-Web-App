'use client'
import { Box, Divider, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation';
import CustomLinkItem from '../common/customLinkItem';


const UserSettingSidebar = () => {
    const path = usePathname();
    return (
        <Box display={{ md: "none", lg: "block", sm: "none" }}>
            <UnorderedList styleType='none' textAlign='start' color='#455564' >
                <CustomLinkItem key='1' href='/usersettings'>
                    <ListItem className="flex justify-between items-center" py='3' fontSize='16px' fontWeight="semibold">
                        <span className='w-40'>My Accounts & Learning</span>
                        <ChevronRight size='16px' />
                    </ListItem>
                </CustomLinkItem>
                <CustomLinkItem href='/usersettings/usernotification'>
                <ListItem className="flex justify-between items-center" py='3' fontSize='16px' fontWeight="semibold">
                    <span>Notifications</span>
                    <ChevronRight size='16px' />
                </ListItem>
                </CustomLinkItem>
                <CustomLinkItem href='/usersettings/usersecurity'>
                <ListItem className="flex justify-between items-center" py='3' fontSize='16px' fontWeight="semibold">
                    <span>Security</span>
                    <ChevronRight size='16px' />
                </ListItem>
                </CustomLinkItem>
                <CustomLinkItem href='/usersettings/userprivacy'>
                <ListItem className="flex justify-between items-center" py='3' fontSize='16px' fontWeight="semibold">
                    <span>Privacy</span>
                    <ChevronRight size='16px' />
                </ListItem>
                </CustomLinkItem>
                <CustomLinkItem href='/usersettings/userhelp'>
                <ListItem className="flex justify-between items-center" py='3' fontSize='16px' fontWeight="semibold">
                    <span>Help</span>
                    <ChevronRight size='16px' />
                </ListItem>
                </CustomLinkItem>
            </UnorderedList>
        </Box>
    )
}

export default UserSettingSidebar