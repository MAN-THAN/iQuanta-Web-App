import { Box, Card, CardBody, CardHeader, Divider, Flex, HStack,  ListItem, Text, UnorderedList } from '@chakra-ui/react'
import CustomLinkItem from '@/components/common/customLinkItem'
import { ChevronRight } from 'lucide-react'


const UserHelp = () => {
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Text fontSize='18px' fontWeight='600'>Help</Text>
          </HStack>
        </CardHeader>
        <CardBody pt='0'>
          <UnorderedList spacing='3' listStyleType='none' fontSize='14px' fontWeight='500' color='#455564' pt='0'>
          <CustomLinkItem href='/usersettings/userhelp/faqs'>
            <ListItem key='1' >
              <Flex align='center' justify='space-between'  py='3'>
                <Text>
                  FAQs
                </Text>
                <Box> <ChevronRight/></Box>
              </Flex>
              <Divider />
            </ListItem>
            </CustomLinkItem>
            <CustomLinkItem href='/usersettings/userhelp/counselling'>
            <ListItem>
              <Flex align='center' justify='space-between' py='3'>
                <Text>
                  Free Counselling
                </Text>
                <Box> <ChevronRight/></Box>
              </Flex>
              <Divider/>
            </ListItem>
            </CustomLinkItem>
            <CustomLinkItem href='/usersettings/userhelp/privacypolicy'>
            <ListItem>
              <Flex align='center' justify='space-between' py='3'>
                <Text>
                  Privacy Policy
                </Text>
                <Box> <ChevronRight/></Box>
              </Flex>
              <Divider />
            </ListItem>
            </CustomLinkItem>
            <CustomLinkItem href='/usersettings/userhelp/termofuse'>
            <ListItem>
              <Flex align='center' justify='space-between' py='3'>
                <Text>
                  Terms of Use
                </Text>
                <Box> <ChevronRight/></Box>
              </Flex>
              <Divider />
            </ListItem>
            </CustomLinkItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </Box>
  )
}

export default UserHelp