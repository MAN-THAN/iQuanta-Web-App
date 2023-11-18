'use client'
import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Image, ListItem, Switch, Text, UnorderedList } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'
import ControlPost from '../../components/userPrivacyModals/controlPost'
import BlockedAccount from '../../components/userPrivacyModals/blockedAccount'
import { validateConfig } from 'next/dist/server/config-shared'



const UserPrivacy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Everyone");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenBlocked = () => {
        setIsOpen(true)
    }

    const handleCloseBlocked = () => {
        setIsOpen(false)
    }

    const handleChangeValue =(value)=>{
        setSelectedValue(value)
    }

    return (
        <Box>
            <Card>
                <CardBody>
                    <UnorderedList spacing='4' listStyleType='none' fontSize='14px' fontWeight='500' color='#455564'>
                        <ListItem key='1'>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Private Account
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Comments
                                </Text>
                                <Box>
                                    <Button onClick={handleOpenModal}
                                        size="sm"
                                        fontSize="12px"
                                        rightIcon={<ChevronDown fontSize="10px" />}
                                        variant="outline"
                                    >
                                        {selectedValue}
                                    </Button>
                                </Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Mentions
                                </Text>
                                <Box>
                                    <Button onClick={handleOpenModal}
                                        size="sm"
                                        fontSize="12px"
                                        rightIcon={<ChevronDown fontSize="10px" />}
                                        variant="outline"
                                    >
                                        {selectedValue}
                                    </Button>
                                </Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Invites
                                </Text>
                                <Box>
                                    <Button onClick={handleOpenModal}
                                        size="sm"
                                        fontSize="12px"
                                        rightIcon={<ChevronDown fontSize="10px" />}
                                        variant="outline"
                                    >
                                        {selectedValue}
                                    </Button>
                                </Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        <ListItem>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Activity Status
                                </Text>
                                <Box><Switch size='md' colorScheme='green' /></Box>
                            </Flex>
                            <Divider pt='4' />
                        </ListItem>
                        <ListItem onClick={handleOpenBlocked}>
                            <Flex align='center' justify='space-between'>
                                <Text>
                                    Blocked Accounts
                                </Text>
                            </Flex>
                        </ListItem>
                    </UnorderedList>
                </CardBody>
            </Card>
            <ControlPost isOpen={isModalOpen} onClose={handleCloseModal} setValue={handleChangeValue} value={selectedValue}/>
            <BlockedAccount isOpen={isOpen} onClose={handleCloseBlocked} />

        </Box>
    )
}

export default UserPrivacy