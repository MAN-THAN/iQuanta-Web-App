import { Box, Button, HStack, Image, Textarea } from "@chakra-ui/react";
import { Modal } from "antd";
import React from "react";
import { MdPlayArrow } from "react-icons/md";

const EditPostModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      width="50vw"
      centered
      open={isOpen}
      onOk={() => onClose(false)}
      onCancel={() => onClose(false)}
      closable={false}
      footer={
        <Button width='20%' rounded='2xl' bg='black.900' color='white.900'>Save</Button>
      }
    >
      <HStack align="center" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box boxSize="60px">
            <Image
              objectFit="cover"
              width="100%"
              height="100%"
              className="rounded-md"
              src="/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
          <Box ml="2">
            <Box display="flex" alignItems="center">
              <p style={{ fontSize: "18px", color: "#171717", fontWeight: "600" }}>Himanshu Rohila</p> <MdPlayArrow />
              {/* <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p> */}
            </Box>
            <p style={{ fontSize: "16px", color: "#636363" }}>waert</p>
          </Box>
        </Box>
      </HStack>
      <Box height="60vh" overflowY="scroll">
        <Box py="6">
          <Textarea focusBorderColor="none" _focusVisible={false} fontSize='18px' border='none'/>
        </Box>
        <Box overflow="hidden">
          <Image width="100%" src="/profile.jpeg" />
        </Box>
      </Box>
      
    </Modal>
  );
};

export default EditPostModal;
