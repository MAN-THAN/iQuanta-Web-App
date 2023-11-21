import React from 'react'
import { Box, Card, CardBody, CardHeader, Divider, Flex, HStack,  ListItem,  Text, UnorderedList } from '@chakra-ui/react'
import CustomLinkItem from '@/components/common/customLinkItem'
import { ChevronRight } from 'lucide-react'


const UserSecurity = () => {
    return (
        <Box>
            <Card>
                <CardHeader>
                    <HStack>
                        <Text fontSize='18px' fontWeight='600'>Login Security</Text>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <UnorderedList spacing='3' listStyleType='none' fontSize='14px' fontWeight='500' color='#455564' pt='0'>
                        <CustomLinkItem href='/usersettings/usersecurity/resetpassword'>
                            <ListItem key='1'>
                                <Flex align='center' justify='space-between'>
                                    <Text>
                                        Reset Password
                                    </Text>
                                    <Box> <ChevronRight/></Box>
                                </Flex>
                                <Divider pt='4' />
                            </ListItem>
                        </CustomLinkItem>
                        <CustomLinkItem href='/usersettings/usersecurity/loginactivity'>
                            <ListItem>
                                <Flex align='center' justify='space-between'>
                                    <Text>
                                        My Login Activity
                                    </Text>
                                    <Box><ChevronRight/></Box>
                                </Flex>
                                <Divider pt='4' />
                            </ListItem>
                        </CustomLinkItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Two Factor Authentication
                                </Text>
                                <Box> <ChevronRight/></Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                    </UnorderedList>
                </CardBody>
                <CardHeader>
                    <HStack>
                        <Text fontSize='18px' fontWeight='600'>Data & History</Text>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <UnorderedList spacing='4' listStyleType='none' fontSize='14px' fontWeight='500' color='#455564'>
                        <ListItem key='2'>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Download Data
                                </Text>
                                <Box> <ChevronRight/></Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        <CustomLinkItem href='/usersettings/usersecurity/searchhistory'>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Search History
                                </Text>
                                <Box> <ChevronRight/></Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        </CustomLinkItem>
                    </UnorderedList>
                </CardBody>
            </Card>
        </Box>
    )
}

export default UserSecurity