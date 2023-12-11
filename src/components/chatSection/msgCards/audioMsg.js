import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { Pause, Play } from "lucide-react";
import React from "react";

const AudioMsg = ({ data, index }) => {
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
      <HStack alignItems="center">
        <Pause />
        <Box width="200px">
          <Slider
            aria-label="slider-ex-2"
            defaultValue={30}
            padding="0px !important"
          >
            <SliderTrack bgColor="gray.400">
              <SliderFilledTrack
                bg={data.from === "me" ? "black.900" : "white.900"}
              />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <HStack
            align="center"
            justify="space-between"
            fontSize="12px"
            padding="0px !important"
          >
            <Text>00:24</Text>
            <Text>00:34</Text>
          </HStack>
        </Box>
      </HStack>
    </Flex>
  );
};

export default AudioMsg;
