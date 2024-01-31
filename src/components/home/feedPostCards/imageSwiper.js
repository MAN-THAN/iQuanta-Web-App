import { Box, Divider, Flex, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { Dot, MessageCircle, MoreHorizontal, MoreVertical, Share2, ThumbsUp } from "lucide-react";
import React from "react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import CommentSlider from "@/components/postCards/commentSlider/commentSlider";
import VideoPlayer from "@/components/common/videoPlayer";
import { MdPlayArrow } from "react-icons/md";
import { Carousel } from "antd";
import { array } from "prop-types";
import { ReactionPanel } from "@/components/common/reactionPanel";
import { getTimeAgo } from "@/utilities/utilityFunction";
import PostOption from "@/components/common/postOption";
import { useDisclosure } from "@chakra-ui/react";


const ImageSwiper = ({
  name,
  uid,
  profilePic,
  title,
  reactionCount,
  commentCount,
  createdAt,
  media,
  postId,
  followingCount,
  reactionCountDetail,
  userReaction,
  topComments,
}) => {
  const sliderIMg = [
    {
      img: "https://img.freepik.com/free-photo/technology-online-shopping-young-smiling-woman-looking-determined-advicing-download-app-showing_1258-121701.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais",
    },
    {
      img: "https://cdn.create.vista.com/api/media/small/346578186/stock-photo-attractive-girl-duck-face-expression-taking-selfie-while-holding-cofee",
    },
    {
      img: "/back.png",
    },
  ];
  const { isOpen: isOpenComment, onToggle: onToggleComment, onClose: onClose } = useDisclosure();

  return (
    <Box bg="#fff" mt="2">
      <HStack align="center" justifyContent="space-between" py={["3", null, "4"]}>
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
              //src="/profile.jpeg"
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
          <PostOption />
        </Box>
      </HStack>
      <Stack>
        <Text fontSize="14px" lineHeight="24px">
          <p>{title}</p>
        </Text>
        <Carousel >
          {sliderIMg.map((da, i) => (
            <Box position="relative" key={i} width="100%" height="40vh">
              <Image width="100%" height="100%" objectFit="cover" src={da.img} alt={`Image ${i + 1}`} />
              <Text color="white" bg="#000" position="absolute" top="2" right="2" px="2" rounded="full">
                {i + 1}/{sliderIMg.length}
              </Text>
            </Box>
          ))}
        </Carousel>
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
        <ReactionPanel
          postId={postId}
          userReaction={userReaction}
          isOpenComment={isOpenComment}
          onToggleComment={onToggleComment}
        />
        <Divider />
      </Stack>
      <Box p="0">
        <CommentSlider topComments={topComments} postId={postId} isOpenComment={isOpenComment} />
      </Box>
    </Box>
  );
};

export default ImageSwiper;
