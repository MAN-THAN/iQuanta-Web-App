import { Box, Divider, Flex, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { Dot, MessageCircle, MoreHorizontal, MoreVertical, Share2, ThumbsUp } from "lucide-react";
import React from "react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import CommentSlider from "@/components/postCards/commentSlider/commentSlider";
import { MdPlayArrow } from "react-icons/md";
import moment from "moment";
import VideoPlayer from "@/components/common/videoPlayer";

const VideoFeedCard = ({ name, uid, title, reactionCount, commentCount, createdAt, media, comments, profilePic }) => {
  const getTime = () => {
    const endDate = moment(createdAt);
    const duration = moment.duration(endDate.diff(moment(Date.now())));
    const hours = duration.asHours();
    // console.log(hours, "hours");
    // console.log(duration, "duration");
    return Math.trunc(Math.abs(hours));
  };
  return (
    <Box bg="#fff" mt="4">
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
              src="/static/images/Profile.jpeg"
              alt="Profile Image"
            />
          </Box>
          <Box ml="2">
            <Box display="flex" alignItems="center">
              <p style={{ fontSize: "14px", color: "#171717", fontWeight: "600" }}>{name}</p> <MdPlayArrow />
              {/* <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p> */}
            </Box>
            <p style={{ fontSize: "14px", color: "#636363" }}>{getTime()} h ago</p>
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
        {/* <Image alt="video" src={media?.[0]} /> */}
        <VideoPlayer videoUrl={media?.[0]} />
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
        <Divider />
        <Flex align="center" justify="space-between" p="3">
          <HStack>
            <ThumbsUp fontSize={{ sm: "14px" }} /> <Text fontSize={{ sm: "14px", md: "16px" }}>Like</Text>
          </HStack>
          <HStack>
            <MessageCircle fontSize={{ sm: "14px" }} /> <Text fontSize={{ sm: "14px", md: "16px" }}>Comment</Text>
          </HStack>
          <HStack>
            <Share2 fontSize={{ sm: "14px" }} /> <Text fontSize={{ sm: "14px", md: "16px" }}>Share</Text>
          </HStack>
        </Flex>
        <Divider />
      </Stack>
      <Box p="4">
        <CommentSlider comments={comments} />
      </Box>
    </Box>
  );
};

export default VideoFeedCard;