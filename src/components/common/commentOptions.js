import { HStack, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { Link, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const CommentOptions = ({ setCommentEdit }) => {

//   const handleEditComment = () => {
//     setCommentEdit(true);

//     onEditTable(commonetEdit);
//   };

  return (
    <>
      <Menu placement="start">
        <MenuButton rounded="full" bg="#fff" p='1'>
          <MoreHorizontal size="24px" />
        </MenuButton>
        <MenuList width="80px" fontWeight="500">
          <MenuItem display="flex" alignItems="center" justifyContent="flex-start" gap="4">
            <Link size="18px" />
            <Text fontWeight="18px">Copy Link</Text>
          </MenuItem>
          <MenuItem display="flex" alignItems="center" justifyContent="flex-start" gap="4" onClick={() => setCommentEdit(true)}>
            <Pencil size="18px" />
            <Text fontWeight="18px">Edit</Text>
          </MenuItem>
          <MenuItem display="flex" alignItems="center" justifyContent="flex-start" gap="4">
            <Trash2 size="18px" />
            <Text fontWeight="18px">Delete</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default CommentOptions;
