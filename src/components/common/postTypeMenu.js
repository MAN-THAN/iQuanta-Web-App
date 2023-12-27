import React, { useState } from "react";
import { Box, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

const PostTypeMenu = () => {
  const [selectedItem, setSelectedItem] = useState("Public");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <Menu isLazy>
      <MenuButton border="1px solid #8D96A5" rounded="lg" p="1">
        <Box display="flex" alignItems="center">
          <Text fontSize="14px">{selectedItem}</Text>
          <ChevronDown size="14px" />
        </Box>
      </MenuButton>
      <MenuList minWidth="100px" fontSize='14px'>
        <MenuItem onClick={() => handleSelect("Public")}>Public</MenuItem>
        <MenuItem onClick={() => handleSelect("Private")}>Private</MenuItem>
        <MenuItem onClick={() => handleSelect("Friends Only")}>Friends Only</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PostTypeMenu;
