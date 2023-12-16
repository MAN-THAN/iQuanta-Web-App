import React, { useRef, useState } from "react";
import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const ColumnButtons = ({ fileInputRef, handleClick, handleChange, selectedFiles, handleOptionButtonClick }) => {
  const handleButtonClick = (componentName) => {
    handleOptionButtonClick(componentName);
  };
  return (
    <Box alignItems="end">
      <UnorderedList listStyleType="none">
        <ListItem onClick={handleClick} cursor="pointer" py="3" display="flex" gap="4" alignItems="center">
          <Image alt="img icon" src="/colorImage.svg" />
          <Text>Photo or Video</Text>
          <input id="fileInput2" type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleChange} />
        </ListItem>
        <ListItem
          cursor="pointer"
          py="3"
          display="flex"
          gap="4"
          alignItems="center"
          onClick={() => handleButtonClick("poll")}
        >
          <Image alt="poll icon" src="/Poll.svg" /> <Text>Poll</Text>
        </ListItem>
        <ListItem
          cursor="pointer"
          py="3"
          display="flex"
          gap="4"
          alignItems="center"
          onClick={() => handleButtonClick("meme")}
        >
          <Image alt="megaphone icon" src="/Megaphone copy.svg" /> <Text>Create Meme</Text>
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" alignItems="center">
          <Image alt="paperchip" src="/Paperclip.svg" /> <Text>Upload Document</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
export default ColumnButtons;