import { Box, Button, HStack, Image, Textarea } from "@chakra-ui/react";
import { Modal } from "antd";
import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { editPost } from "@/api/feed/user/posts";
import { toast } from "react-toastify";

const EditPostModal = ({ isOpen, onClose, title, postId }) => {
  const { _id: uid, profilePic, name } = useSelector((state) => state.userData);
  const [Title, setTitle] = useState(title);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => editPost(postId, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("post updated successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      onClose(false);
      queryClient.invalidateQueries("getAllPosts");
    },
    onSettled: (data, error, variables, context) => {},
  });
  return (
    <Modal
      width="50vw"
      centered
      open={isOpen}
      onOk={() => onClose(false)}
      onCancel={() => onClose(false)}
      closable={false}
      footer={
        <Button
          onClick={() => mutation.mutate({ title: Title })}
          isDisabled={title === Title ? true : false}
          width="20%"
          rounded="2xl"
          bg="black.900"
          color="white.900"
        >
          Save
        </Button>
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
              src={profilePic}
              alt="Profile Image"
            />
          </Box>
          <Box ml="2">
            <Box display="flex" alignItems="center">
              <p style={{ fontSize: "18px", color: "#171717", fontWeight: "600" }}>{name}</p>
              {/* <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p> */}
            </Box>
            <p style={{ fontSize: "16px", color: "#636363" }}>Public</p>
          </Box>
        </Box>
      </HStack>
      <Box height="60vh" overflowY="scroll">
        <Box py="6">
          <Textarea
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            focusBorderColor="none"
            _focusVisible={false}
            fontSize="18px"
            border="none"
          />
        </Box>
        {/* <Box overflow="hidden">
          <Image width="100%" src="/profile.jpeg" />
        </Box> */}
      </Box>
    </Modal>
  );
};

export default EditPostModal;
