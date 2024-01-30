import React, { useState } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

const ColorSelector = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };
  const colorOptions = [
    "#5146D64D",    
    "#EEB5EF",
    "#EFE2B5",
    "#B5D7EF",
    "#E56C5166",
  ];

  return (
    <Flex gap="4" align="center">
      <Box
        width="30px"
        height="30px"
        bg="#F2F2F2"
        rounded="full"
        fontSize="12px"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <span>All</span>
        </Center>
      </Box>
      {colorOptions.map((data, index) => (
        <Box key={index} width="30px" height="30px" bg={data} rounded="full" />
      ))}
    </Flex>
  );
};

export default ColorSelector;
