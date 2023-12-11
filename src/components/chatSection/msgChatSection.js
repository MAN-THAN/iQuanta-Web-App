import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import TextMsgCard from "./msgCards/textMsgCard";
import ImageMsgCard from "./msgCards/imageMsgCard";
import AudioMsg from "./msgCards/audioMsg";

const MsgChatSection = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" align="end" gap={4} justify="flex-end">
              {item.type === "text" ? (
                <TextMsgCard data={item} index={index} />
              ) : item.type == "image" ? (
                <ImageMsgCard data={item} index={index} />
              ) : item.type == "audio" ? (
                <AudioMsg data={item} index={index} />
              ) : (
                ""
              )}
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
            <Flex key={index} w="100%" align="end">
              <Image
                boxSize="1.5rem"
                borderRadius="md"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              {item.type === "text" ? (
                <TextMsgCard data={item} index={index} />
              ) : item.type == "image" ? (
                <ImageMsgCard data={item} index={index} />
              ) : item.type == "audio" ? (
                <AudioMsg data={item} index={index} />
              ) : (
                ""
              )}
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default MsgChatSection;
