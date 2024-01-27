import { Box, Divider, Flex, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { Dot, MessageCircle, MoreHorizontal, MoreVertical, Share2, ThumbsUp } from "lucide-react";
import React from "react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import CommentSlider from "@/components/postCards/commentSlider/commentSlider";
import { MdPlayArrow } from "react-icons/md";
import { ReactionPanel } from "@/components/common/reactionPanel";
import { getTimeAgo } from "@/utilities/utilityFunction";

const ImageFeedCard = ({
  name,
  uid,
  title,
  reactionCount,
  commentCount,
  createdAt,
  media,
  comments,
  profilePic,
  followingCount,
  postId,
  userReaction,
  reactionCountDetail
}) => {
  console.log(reactionCount);
  return (
    <Box bg="#fff" mt="1">
      <HStack align="center" justifyContent="space-between" padding={["3", null, "4"]}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box boxSize="40px">
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
              <p style={{ fontSize: "14px", color: "#171717", fontWeight: "600" }}>{name}</p> <MdPlayArrow />
              {/* <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p> */}
            </Box>
            <p style={{ fontSize: "14px", color: "#636363" }}>{getTimeAgo(createdAt)}</p>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="4">
          <MoreHorizontal size="24px" />
        </Box>
      </HStack>
      <Stack padding={["3", null, "4"]}>
        <Text fontSize="14px" lineHeight="24px">
          <p>{title}</p>
        </Text>
        <Box maxH="460px" maxW="100vh" overflow="hidden">
          <Image alt="video" w="100%" h="100%" objectFit="cover" src={media?.[0]} />
        </Box>
        <HStack align="center" fontWeight="400" fontSize="14px" padding="4">
          <Box display="flex" alignItems="center">
            <LikeEmojiGroup />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#455564",
                paddingLeft: "5px",
              }}
            >
              {reactionCount}
            </span>
          </Box>
          <Box pl="5">
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>{commentCount}</span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#8D96A5",
                paddingLeft: "5px",
              }}
            >
              comments
            </span>
          </Box>
          <Dot color="#8D96A5" />
          <Box>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>{followingCount}</span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#8D96A5",
                paddingLeft: "5px",
              }}
            >
              following
            </span>
          </Box>
        </HStack>
        <Divider />
        <ReactionPanel postId={postId} userReaction={userReaction} />
        <Divider />
      </Stack>
      <Box p="0">
        <CommentSlider comments={comments} />
      </Box>
    </Box>
  );
};

export default ImageFeedCard;
