import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Image, ListItem, Switch, Text, UnorderedList } from '@chakra-ui/react'


const UserNotification = () => {
    return (
        <Box>
            <Card>
                <CardHeader>
                    <HStack>
                        <Text fontSize='18px' fontWeight='600'>Push Notifications</Text>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <UnorderedList spacing='4' listStyleType='none' fontSize='14px' fontWeight='500' color='#455564'>
                        <ListItem key='1'>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Pause All Notifications
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider   pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Reactions
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider  pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Comments
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider  pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Direct Messages
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider  pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Group Notifications
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider  pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Invites
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                        </ListItem>
                    </UnorderedList>
                </CardBody>
            </Card>
        </Box>
    )
}

export default UserNotification