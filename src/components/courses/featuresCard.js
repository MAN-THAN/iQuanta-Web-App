import { Card, CardBody, Heading, Text, Button,  HStack, Flex, Image, Stack, Box } from '@chakra-ui/react'
import { Dot } from 'lucide-react'
import { randomColors } from '../../utilities/commonFunctions'
import { useRouter } from 'next/navigation'
const FeaturesCard = ({ data, onButtonClick }) => {
    const router = useRouter();

    return (
        <Card rounded='2xl' width={{ base: '100%', md: "48%" }} bg={randomColors(['#336792', '#E56C51', '#5146D6', '#339287'])}>
            <CardBody>
                <Image
                    src={data.img}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w='100%'
                />
                <Stack mt='6' spacing='3' color='#fff'>
                    <Heading size='md'>{data.name}</Heading>
                    <Text fontSize='sm' fontWeight='500'>
                        Complete course for all your exams
                    </Text>
                    <ul className='text-base'>
                        <li className='flex'>
                            <span><Dot transform='scale(2)' /></span><span>30 Sessions</span>
                        </li>
                        <li className='flex'>
                            <span><Dot transform='scale(2)' /></span><span> 400+ Videos</span>
                        </li>
                        <li className='flex'>
                            <span><Dot transform='scale(2)' /></span><span> 25+ Assignments & 15+ Mock Tests</span>
                        </li>
                    </ul>
                </Stack>
            </CardBody>
            <Flex align='center' justify='start' gap='4' bg='#000' rounded='xl' m='2' padding='3'>
                <Text fontSize='16px' color='#fff'>₹2,700</Text>
                <HStack fontSize='10px' textAlign="start"><strike className='text-gray-500 text-sm'>₹3000</strike><span className='text-green-500 text-sm'>10% Off</span></HStack>
                <Box padding="0" rounded='md'>
                    <Button onClick={onButtonClick} variant="text" margin='0 auto' color='#fff'>
                        More Details
                    </Button>
                </Box>
            </Flex>
        </Card>
    )
}

export default FeaturesCard