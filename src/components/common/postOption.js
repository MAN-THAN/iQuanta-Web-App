import { HStack, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const PostOption = () => {
  return (
    <Menu>
      <MenuButton  rounded="lg" bg="#fff">
          <MoreHorizontal size="24px" />
      </MenuButton>
      <MenuList width='40px'>
        <MenuItem>Medium</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PostOption;
