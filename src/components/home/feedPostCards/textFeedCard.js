import { Box, Divider, Flex, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { Dot, MessageCircle, MoreHorizontal, MoreVertical, Share2, ThumbsUp } from "lucide-react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import CommentSlider from "@/components/postCards/commentSlider/commentSlider";
import { useRouter } from "next/navigation";
import { MdPlayArrow } from "react-icons/md";
import { ReactionPanel } from "@/components/common/reactionPanel";
import { getTimeAgo } from "@/utilities/utilityFunction";
import PostOption from "@/components/common/postOption";
import { useDisclosure } from "@chakra-ui/react";

const TextFeedCard = ({
  classId,
  name,
  uid,
  title,
  reactionCount,
  commentCount,
  createdAt,
  media,
  postId,
  followingCount,
  reactionCountDetail,
  topComments,
  userReaction,
}) => {
  const router = useRouter();
  const { isOpen: isOpenComment, onToggle: onToggleComment, onClose: onClose } = useDisclosure();
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
              src="/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
          <Box ml="2">
            <Box display="flex" alignItems="center">
              <p style={{ fontSize: "14px", color: "#171717", fontWeight: "600" }}>{name}</p> <MdPlayArrow />{" "}
              {/* <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p> */}
            </Box>
            <p style={{ fontSize: "14px", color: "#636363" }}>{getTimeAgo(createdAt)}</p>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="4">
          <PostOption postUserId={uid} postId={postId} />
        </Box>
      </HStack>
      <Stack padding={["3", null, "4"]}>
        <Text fontSize="14px" lineHeight="24px">
          {title}
          <br />
          <span className="font-semibold">see more</span>
        </Text>
        <HStack align="center" fontWeight="400" fontSize="14px" padding="4">
          <Box display="flex" alignItems="center">
            <LikeEmojiGroup userReaction={userReaction} reactionCountDetail={reactionCountDetail} />
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
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>53</span>
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
        {/* <Flex align="center" justify="space-between" p="3">
          <HStack>
            <ThumbsUp /> <span>Like</span>
          </HStack>
          <HStack onClick={() => router.push(`/learn/class/${classId}/6`)}>
            <MessageCircle /> <span>Comment</span>
          </HStack>
          <HStack onClick={() => router.push(`/learn/class/${classId}/6`)}>
            <Share2 /> <span>Share</span>
          </HStack>
        </Flex> */}
        <ReactionPanel
          postId={postId}
          userReaction={userReaction}
          isOpenComment={isOpenComment}
          onToggleComment={onToggleComment}
        />{" "}
        <Divider />
      </Stack>
      <Box p="0">
        <CommentSlider topComments={topComments} postId={postId} isOpenComment={isOpenComment} />
      </Box>
    </Box>
  );
};

export default TextFeedCard;
