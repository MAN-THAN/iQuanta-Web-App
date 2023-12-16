import React from "react";
import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const ColumnButtons = () => {
  return (
    <Box alignItems="end">
      <UnorderedList listStyleType="none">
        <ListItem cursor="pointer" py="3" display="flex" gap="4" alignItems="center">
          <Image alt="img icon" src="/colorImage.svg" /> <Text>Photo or Video</Text>
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" alignItems="center">
          <Image alt="poll icon" src="/Poll.svg" /> <Text>Poll</Text>
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4" alignItems="center">
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
