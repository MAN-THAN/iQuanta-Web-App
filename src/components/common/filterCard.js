import { HStack, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Filter, MoreHorizontal } from "lucide-react";
import React from "react";

const FilterTopicCard = () => {
  return (
    <Menu>
      <MenuButton rounded="lg" bg="#fff">
        <Filter size="24px" />
      </MenuButton>
      <MenuList width="40px">
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FilterTopicCard;
