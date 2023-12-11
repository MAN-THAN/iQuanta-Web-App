import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TextMsgCard = ({ data, index }) => {
  return (
    <Flex
      bg={data.from === "me" ? "brand.800" : "brand.900"}
      color={data.from === "me" ? "black.900" : "white.900"}
      my="1"
      p="3"
      roundedTopLeft="xl"
      roundedTopRight="xl"
      roundedBottomLeft={data.from === "me" ? "xl" : undefined}
      roundedBottomRight={data.from !== "me" ? "xl" : undefined}
    >
      <Text>{data.text}</Text>
    </Flex>
  );
};

export default TextMsgCard;
