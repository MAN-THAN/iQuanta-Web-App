import { Box, HStack, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const RowButton = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between" p='0' width='full'>
      <UnorderedList cursor="pointer" listStyleType="none" gap="6" display="flex">
        <ListItem cursor="pointer" py="3" display="flex" gap="4">
          <Image alt="img icon" src="/colorImage.svg" />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4">
          <Image alt="poll icon" src="/Poll.svg" />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4">
          <Image alt="megaphone icon" src="/Megaphone copy.svg" />
        </ListItem>
        <ListItem cursor="pointer" py="3" display="flex" gap="4">
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
