import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

const MsgChatSection = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" align='end' gap={4} justify="flex-end">
              <Flex
                bg="brand.800"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                rounded="2xl"
              >
                <Text>{item.text}</Text>
              </Flex>
              <Image
                boxSize="1.5rem"
                borderRadius="md"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%" align='end'>
              <Image
                boxSize="1.5rem"
                borderRadius="md"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <Flex
                bg="brand.900"
                color="white.900"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                rounded="2xl"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default MsgChatSection;
