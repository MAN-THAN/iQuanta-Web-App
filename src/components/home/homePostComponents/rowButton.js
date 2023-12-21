import { Box, HStack, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const RowButton = ({ fileInputRef, handleClick, handleChange, handleOptionButtonClick, selectedFiles }) => {
  const handleButtonClick = (componentName) => {
    handleOptionButtonClick(componentName );
  };
  return (
    <HStack alignItems="center" justifyContent="space-between" p="0" width="full">
      <UnorderedList cursor="pointer" listStyleType="none" gap="6" display="flex">
        <ListItem
          onClick={() => {
            handleClick();
            handleButtonClick("imageAndVideo");
          }}
          cursor="pointer"
          py="3"
          display="flex"
          gap="4"
        >
          <Image alt="img icon" src="/colorImage.svg" />
          <input id="fileInput1" type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleChange} />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" onClick={() => handleButtonClick("poll")}>
          <Image alt="poll icon" src="/Poll.svg" />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" onClick={() => handleButtonClick("debate")}>
          <Image alt="megaphone icon" src="/Megaphone copy.svg" />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" onClick={() => handleButtonClick("meme")}>
          <Image alt="megaphone icon" src="/Brush.svg" />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" onClick={() => handleButtonClick("fileUpload")}>
          <Image alt="paperchip" src="/Paperclip.svg" />
        </ListItem>
      </UnorderedList>
      <Box>
        <MoreHorizontal />
      </Box>
    </HStack>
  );
};

export default RowButton;
