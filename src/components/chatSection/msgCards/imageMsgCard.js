import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ImageMsgCard = ({ data, index }) => {
  return (
    <Flex
      bg={data.from === "me" ? "brand.800" : "brand.900"}
      color={data.from === "me" ? "black.900" : "white.900"}
      minW="100px"
      maxW="350px"
      my="1"
      p="3"
      roundedTopLeft="xl"
      roundedTopRight="xl"
      roundedBottomLeft={data.from === "me" ? "xl" : undefined}
      roundedBottomRight={data.from !== "me" ? "xl" : undefined}
    >
      <Stack>
        <Image alt="img chat" rounded="xl" src={data.img} />
        <Text>{data.text}</Text>
      </Stack>
    </Flex>
  );
};

export default ImageMsgCard;
