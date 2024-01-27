import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  TableContainer,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Dot, MessageCircle, MoreVertical, ThumbsUp } from "lucide-react";
import React from "react";
import LikeEmojiGroup from "../../common/likeEmojiGroup";
import CommentSlider from "../../postCards/commentSlider/commentSlider";
import AvatarGroups from "../../common/avatarGroups";
import { ReactionPanel } from "../../common/reactionPanel";
import moment from "moment";

const DebateFeedCard = ({
  name,
  uid,
  profilePic,
  title,
  options,
  reactionCount,
  commentCount,
  createdAt,
  media,
  triggeredFrom,
  postId,
  followingCount,
  participants,
  userReaction
}) => {
  const getTime = () => {
    const endDate = moment(createdAt);
    const duration = moment.duration(endDate.diff(moment(Date.now())));
    const hours = duration.asHours();
    // console.log(hours, "hours");
    // console.log(duration, "duration");
    return Math.trunc(Math.abs(hours));
  };
    return (
    <Box bg="#fff" mt="1">
      <HStack align="center" justifyContent="space-between" padding={["3", null, "4"]}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: ["auto", null, "280px"],
          }}
        >
          <Box boxSize="45px">
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
            <p style={{ fontSize: "18px", color: "#171717", fontWeight: "600" }}>{name}</p>
            <p style={{ fontSize: "14px", color: "#636363" }}>{getTime()} h ago</p>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="4">
          <MoreVertical size="24px" />
        </Box>
      </HStack>
      <Stack padding={["3", null, "4"]}>
        <Box p="4">
          <Box bg="brand.900" color="white.900" p="6" roundedTop="2xl" position="relative" overflow="hidden">
            <Box position="absolute" top="0" right="0">
              <Image alt="vector img" src="/Vector103.svg" />
            </Box>
            <Tag>Debate</Tag>
            <Text fontSize="22px" fontWeight="500" pt="4" maxW="350px">
              {title}
            </Text>
          </Box>
          <Box bg="#F4F3FE" p="4" roundedBottom="2xl">
            <HStack>
              <Text fontSize="16px" color="#000000" fontWeight="400">
                Participants
              </Text>
              <AvatarGroup max={3} size="sm" gap="0">
                {participants?.map((item, ind) =>  <Avatar key={ind} name={item.name} src={item?.profilePic} />)}
              </AvatarGroup>
            </HStack>
          </Box>
        </Box>
        <HStack align="center" fontWeight="400" fontSize="14px" padding="4">
          <Box display="flex" alignItems="center">
            <LikeEmojiGroup userReaction={userReaction} />
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
        <ReactionPanel postId={postId} userReaction={userReaction} />
      </Stack>
      <Box p="0">
        <CommentSlider />
      </Box>
    </Box>
  );
};

export default DebateFeedCard;
