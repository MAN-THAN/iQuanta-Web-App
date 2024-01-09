'use client'
import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    HStack,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { Bookmark, ChevronLeft, ChevronRight, Copy, Dot, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';

const questions = [
    {
        "question": "Trying to keep her balance on the icy surface, the last competitor's ski-tip caught the pole and somersaulted into the soft snow.",
        "answers": [
            "The last competitor's ski-tip caught the pole and somersaulted into the soft snow.",
            "The ski-tip of the last competitor caught the pole and somersaulted in the soft snow.",
            "The last competitor's ski-tip caught the pole and somersaulted into the soft snow.",
            "The last competitor's ski-tip caught the pole and somersaulted into the soft snow."
        ]
    },
    {
        "question": "Another question goes here.",
        "answers": [
            "Answer A",
            "Answer B",
            "Answer C",
            "Answer D"
        ]
    },
    {
        "question": "And another question here.",
        "answers": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ]
    }
];

const PracticeQuestionsSwiper = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <Box pt='4'>
                <Text fontSize='18px' fontWeight='500'>Practice Questions</Text>
                <HStack fontSize='12px' color='grey'>
                    <Text>Module</Text>
                    <Dot />
                    <Text>Sentence Correction</Text>
                </HStack>
                <Text fontSize='14px' fontWeight='500' pt='4'>
                    {currentQuestionIndex + 1}. {currentQuestion.question}
                </Text>
                <List spacing='4' pt='4'>
                    {currentQuestion.answers.map((answer, index) => (
                        <ListItem key={index} bg='#F1F2F6' p='4' rounded='lg'>
                            <HStack align='start'>
                                <Text>{String.fromCharCode(65 + index)}.</Text>
                                <Text>{answer}</Text>
                            </HStack>
                        </ListItem>
                    ))}
                </List>
                <Flex alignItems='center' justifyContent='space-between' pt='5'>
                    <div className='flex items-center gap-2'>
                        <Share2 />
                        <Copy />
                        <Bookmark />
                    </div>
                    <div className='flex items-center gap-2'>
                        <Text color='gray' fontSize='12px'>
                            Was this helpful?
                        </Text>
                        <ThumbsUp />
                        <ThumbsDown />
                    </div>
                </Flex>
            </Box>
            <Flex justifyContent='space-between' pt='5'>
                <Button onClick={handlePrev} disabled={currentQuestionIndex === 0} variant="solid" color='#000' backgroundColor="#fff" border='1px solid #000' _hover={{ color: "#000", backgroundColor: "#fff", }} >
                <ChevronLeft/>  Previous
                </Button>
                <Button onClick={handleNext}
                    disabled={currentQuestionIndex === questions.length - 1} variant="solid" color='#fff' backgroundColor="#000" _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }} >
                    Next  <ChevronRight/>
                </Button>


            </Flex>
        </>
    );
}

export default PracticeQuestionsSwiper;

