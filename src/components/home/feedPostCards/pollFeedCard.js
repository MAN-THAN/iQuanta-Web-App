import React, { useEffect } from "react";
import { Box, Divider, Flex, HStack, Image, RadioGroup, Radio, Stack, Text, VStack } from "@chakra-ui/react";
import { Dot, MessageCircle, MoreVertical, Share2, ThumbsUp } from "lucide-react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import AvatarGroups from "@/components/common/avatarGroups";
import { MdPlayArrow } from "react-icons/md";
import { Progress } from "@chakra-ui/react";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import { groupMarkPoll } from "@/api/feed/groups/post";
import { randomColors } from "@/utilities/commonFunctions";
const PollFeedCard = ({
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
}) => {

  const [value, setValue] = React.useState();
  useEffect(() => {
    for (var i = 0; i < options?.length; i++) {
      let uidIndex = options[i].uid.findIndex(it => it._id == uid);
      if (uidIndex > -1) {
        setValue(i);
        break;
      }
    }
  }, [])
  const mutation = useMutation({
    mutationFn: (payload) =>
      triggeredFrom == "group"
        ? groupMarkPoll(payload.postId, payload.option, payload.uid)
        : groupMarkPoll(payload.postId, payload.option, payload.uid),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Poll Save Successfull", {
        position: toast.POSITION.TOP_RIGHT,
      });
      queryClient.invalidateQueries("getAllPosts");
      setText();
      setSelectedFiles([]);
      setOptions([]);
      setSelectedComponent(null);
      onClose();
    },
    onSettled: (data, error, variables, context) => { },
  });
  const handlePollClick = (poll) => {
    setValue(poll);
    mutation.mutate({ postId: postId, option: options[value]?._id, uid: uid });
    //add api call to mark a poll
  };
  const getTime = () => {
    const endDate = moment(createdAt);
    const duration = moment.duration(endDate.diff(moment(Date.now())));
    const hours = duration.asHours();
    return Math.trunc(Math.abs(hours));
  };

  return (
    <>
      <Box bg="white.900" w="full" mx="auto" mt="1">
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
              <p style={{ fontSize: "14px", color: "#636363" }}>{getTime()} h ago</p>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="4">
            <MoreVertical size="24px" />
          </Box>
        </HStack>
        <Text p="5" fontSize="md" fontWeight="semibold">
          {title}
        </Text>
        <RadioGroup onChange={(value) => handlePollClick(value)} value={value} width="100%">
          <Stack>
            {options?.map((option, index) => {
              return (
                <>
                  <Flex justifyContent="space-between" alignItems="center" px="6" pb="2" pt="4">
                    <Radio size="lg" name="1" colorScheme="red" value={index} _active={{ bg: "red" }}>
                      <Text>{option.title}</Text>
                    </Radio>
                    <AvatarGroups data={option.uid} size={3} />
                  </Flex>
                  <Box px="6">
                    <Progress
                      w="100%"
                      colorScheme={randomColors(["green", "red", "yellow"])}
                      rounded="full"
                      value={Number(option.votes) * 10}
                    />
                  </Box>
                </>
              );
            })}
          </Stack>
        </RadioGroup>
        <div className="flex gap-5 items-center ml-5 pb-3" style={{ display: "flex", flexDirection: "row" }}>
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
        </div>
        <Divider />
        <Flex align="center" justify="space-between" p="3">
          <HStack>
            <ThumbsUp /> <span>Like</span>
          </HStack>
          <HStack>
            <MessageCircle /> <span>Comment</span>
          </HStack>
          <HStack>
            <Share2 /> <span>Share</span>
          </HStack>
        </Flex>
        <Divider pb="4" />
      </Box>
    </>
  );
};

export default PollFeedCard;

