import { HStack, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { saveUserPost } from "@/api/feed/user/postAction";
import { reportUserPost } from "@/api/feed/user/postAction";
import { followUserPost } from "@/api/feed/user/postAction";
import { turnOffCommentsUserPost } from "@/api/feed/user/postAction";
import { deleteUserPost } from "@/api/feed/user/postAction";
import { toast, ToastContainer } from "react-toastify";
import EditPostModal from "../home/feedPostCards/editPostModal";

const PostOption = ({ postUserId, postId, title }) => {
  const { isOpen: isOpenEditPost, onOpen: onOpenEditPost, onClose: onCloseEditPost } = useDisclosure();
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();
  const saveMutation = useMutation({
    mutationFn: () => saveUserPost(uid, postId, "saved"),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Post Successfully Saved!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const reportMutation = useMutation({
    mutationFn: () => reportUserPost(uid, postId),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      queryClient.invalidateQueries("getAllPosts");
      toast.info("Post Reported Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const followMutation = useMutation({
    mutationFn: () => followUserPost(uid, postId, "follow"),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Followed Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const commentsMutation = useMutation({
    mutationFn: () => turnOffCommentsUserPost(postId, false),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.info("comments off successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const deletePostMutation = useMutation({
    mutationFn: () => deleteUserPost(postId),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      queryClient.invalidateQueries("getAllPosts");
      toast.success("Post Deleted Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });

  return (
    <>
      <EditPostModal isOpen={isOpenEditPost} onClose={onCloseEditPost} title={title} postId={postId}/>
      <Menu>
        <MenuButton rounded="lg" bg="#fff">
          <MoreHorizontal size="24px" />
        </MenuButton>
        <MenuList width="40px">
          <MenuItem onClick={() => saveMutation.mutate()}>Save</MenuItem>
          <MenuItem onClick={() => followMutation.mutate()}>Follow</MenuItem>
          <MenuItem onClick={() => reportMutation.mutate()}>Report</MenuItem>
          <MenuItem>Copy Link</MenuItem>
          <MenuItem onClick={() => commentsMutation.mutate()}>Turn Off Comments</MenuItem>
          {postUserId === uid && <MenuItem onClick={onOpenEditPost}>Edit Post</MenuItem>}
          {postUserId === uid && <MenuItem onClick={() => deletePostMutation.mutate()}>Delete Post</MenuItem>}
        </MenuList>
      </Menu>
      <ToastContainer />
    </>
  );
};

export default PostOption;
