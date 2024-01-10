import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'antd';
import { ArrowLeft, ChevronRightIcon, Pause, Play } from 'lucide-react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

function LiveClassTimer() {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const formattedTimeElapsed = `${Math.floor(timeElapsed / 60)
        .toString()
        .padStart(2, '0')}:${(timeElapsed % 60).toString().padStart(2, '0')}`;

    const timerTextStyles = {
        fontSize: '16px', // Customize text size
        color: '#5146D6', // Customize text color
        borderLeft: '1px solid #D6D7D9  ', // Customize text border
        padding: '8px',
        marginLeft:"10px"
    };

    return (
        <Box bg='#fff' roundedTop='2xl' pb='6'>
            <HStack p='6'>
                <Box onClick={() => router.back()} > <ArrowLeft /></Box>
                <Stack>
                    <Text fontSize='18px' fontWeight='600'>Foreign Studies</Text>
                    <Breadcrumb fontSize='sm' spacing='4px' color='#636363' separator={<ChevronRightIcon size='12px' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Learn</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Class</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>CAT 2021</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Stack>
            </HStack>
            <HStack gap='10' align='center'>
                <Box width='600px' pl='6'>
                    <Progress
                        percent={(timeElapsed / 60) * 2}
                        size="default"
                        format={() => (
                            <span style={timerTextStyles}>{formattedTimeElapsed}</span>
                        )}
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                    />
                </Box>
                <Button type='text' color='#000'  onClick={toggleTimer}>{isRunning ? <Pause/> : <Play/>}</Button></HStack>
        </Box>
    );
}
export default LiveClassTimer;