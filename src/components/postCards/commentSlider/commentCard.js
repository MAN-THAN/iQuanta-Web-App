import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import { Box, Card, Divider, Flex, HStack, IconButton, Image, Input, Stack, Tag, Text } from "@chakra-ui/react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import { getTimeAgo } from "@/utilities/utilityFunction";
import { Check, MoreHorizontal, X } from "lucide-react";
import CommentOptions from "@/components/common/commentOptions";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { editUserPostComment } from "@/api/feed/user/comments";
import { MentionsInput, Mention } from "react-mentions";
import { useSelector } from "react-redux";
import mentionStyles from "@/styles/mentionStyles";
import mentionsInputStyles from "@/styles/mentionsInputStyles";
import { getFriendList } from "@/api/feed/user/friendList";
import { toast } from "react-toastify";

const CommentCard = ({ item, postId }) => {
  const [commentEdit, setCommentEdit] = useState(false);
  const [commentText, setCommentText] = useState(item?.comment);
  const {_id:uid} = useSelector(state => state.userData);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (commentId) => editUserPostComment(commentId, { comment: commentText }),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) => {},
    onSuccess: (res, variables, context) => {
      setCommentEdit(false);
      queryClient.invalidateQueries({ queryKey: ["getAllComments", postId], exact: true });
    },
    onSettled: (data, error, variables, context) => {},
  });
  const { data: friendList } = useQuery({
    queryKey: ["getFriendList", uid],
    queryFn: () => getFriendList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => console.log(res),
  });
  return (
    <Card bg="#F1F2F6" minW="280px" rounded="2xl">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack align="center" justifyContent="space-between" padding={["3", null, "4"]}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
            }}
          >
            <Box boxSize={["28px", null, "38px"]}>
              <Image
                objectFit="cover"
                width="100%"
                height="100%"
                className="rounded-md"
                src={item?.uid?.profilePic}
                alt="Profile Image"
              />
            </Box>
            <Box ml="2">
              <p
                style={{
                  fontSize: ["12px", null, "14px"],
                  color: "#171717",
                  fontWeight: "600",
                }}
              >
                {item?.uid?.name}{" "}
              </p>
              <p style={{ fontSize: ["10px", null, "12px"], color: "#636363" }}>{getTimeAgo(item?.createdAt)}</p>
            </Box>
          </Box>
        </HStack>
        <Box px="4" cursor="pointer">
          <CommentOptions setCommentEdit={setCommentEdit} />
        </Box>
      </Flex>
      {!commentEdit ? (
        <Text
          fontSize={["12px", null, "14px"]}
          fontWeight="500"
          color="#16222C"
          p={["2", null, "3"]}
          lineHeight={["20px", null, "24px"]}
        >
          {item?.comment} {"...read more"}
        </Text>
      ) : (
        <Box>
          <Box pt="2">
            <MentionsInput
              width="full"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              style={mentionsInputStyles}
              
            >
              <Mention
                trigger={"@"}
                data={friendList?.data.data.friendList.map((i) => {
                  return { display: i.name, id: i._id };
                })}
                style={mentionStyles}
                appendSpaceOnAdd={true}
              />
            </MentionsInput>
          </Box>
          {/* <Input
            value={commentText}
            placeholder=""
            border="none"
            _focusVisible={false}
            onChange={(e) => setCommentText(e.target.value)}
          /> */}
          <HStack px="4">
            <IconButton onClick={() => mutation.mutate(item?._id)} icon={<Check />} />
            <IconButton onClick={() => setCommentEdit(false)} icon={<X />} />
          </HStack>
        </Box>
      )}
      {/* reaction comment panel */}
      <HStack align="center" padding={["3", null, "3"]}>
        <Text
          style={{
            fontSize: ["10px", null, "12px"],
            fontWeight: "600",
            color: "#455564",
          }}
        >
          Like
        </Text>
        <Divider border="0.2" orientation="vertical" />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <LikeEmojiGroup />
          <Text
            style={{
              fontSize: ["10px", null, "12px"],
              fontWeight: "600",
              color: "#455564",
            }}
          >
            {item?.reactionCount}
          </Text>
        </Box>
        <Divider border="0.2" orientation="vertical" />
        <Text fontSize={{ sm: "14px", md: "16px" }} color="#455564">
          Reply
        </Text>
        <Divider border="0.2" orientation="vertical" />
        <Box display="flex" alignItems="end">
          <span
            style={{
              fontSize: ["10px", null, "12px"],
              fontWeight: "600",
              color: "#455564",
            }}
          >
            13
          </span>
          <Text
            fontSize={{ sm: "14px", md: "16px" }}
            style={{
              fontWeight: "500",
              color: "#8D96A5",
              paddingLeft: ["2px", null, "5px"],
            }}
          >
            comments
          </Text>
        </Box>
      </HStack>
    </Card>
  );
};

export default CommentCard;
