import {
  Flex,
  HStack,
  Text,
  Tooltip,
  Box,
  Divider,
  Collapse,
  useDisclosure,
  InputGroup,
  Input,
  InputRightElement,
  Image,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { createUserPostComment } from "@/api/feed/user/comment";

export const CommentPanel = ({ isOpenComment, postId }) => {
  const { profilePic, _id:uid } = useSelector((state) => state.userData);
  const [comment, setComment] = useState("");
  const date = new Date();
  const queryClient = useQueryClient()
  const handleComment = () => {
    const payload = {
      postId: postId,
      uid: uid,
      timestamp: date.toISOString(),
      comment: comment,
    };
    mutation.mutate(payload);
  };
  const mutation = useMutation({
    mutationFn: (payload) => createUserPostComment(payload, uid),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) => console.log(error),
    onSuccess: (res, variables, context) => {
      console.log(res);
      setComment("");
      queryClient.invalidateQueries("getAllPosts");
    },
    onSettled: (data, error, variables, context) => {},
  });
  return (
    <Collapse in={isOpenComment} animateOpacity>
      <InputGroup size="lg">
        <Input
          type="text"
          pr="6.3rem"
          placeholder="Type here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <InputLeftElement>
          <Image boxSize="40px" fit="cover" rounded="lg" src={profilePic} />
        </InputLeftElement>
        <InputRightElement width="100px" alignItems="center" justifyContent="space-around">
          <Image alt="img" cursor="pointer" src="/image.svg" />
          <Text cursor="pointer" onClick={handleComment}>
            Post
          </Text>
        </InputRightElement>
      </InputGroup>
    </Collapse>
  );
};
