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
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { postUserReaction } from "@/api/feed/user/reaction";

export const ReactionPanel = ({ postId }) => {
  const { isOpen: isOpenComment, onToggle: onToggleComment, onClose: onClose } = useDisclosure();
  const [selectedReaction, setSelectedReaction] = useState({ reactionType: "dislike" });
  const [isPanelVisible, setPanelVisibility] = useState(false);
  const panelRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();

  const reactions = [
    { reaction: "👍", reactionType: "like" },
    { reaction: "❤️", reactionType: "heart" },
    { reaction: "😂", reactionType: "happy" },
    { reaction: "😯", reactionType: "surprise" },
    { reaction: "😢", reactionType: "sad" },
    { reaction: "😡", reactionType: "angry" },
  ];
  const handleLike = () => {
    console.log("im aworking");
    if (selectedReaction?.reactionType !== "dislike") {
      mutation.mutate({ postId: postId, createdBy: uid, reactionType: "dislike" });
    } else {
      mutation.mutate({ postId: postId, createdBy: uid, reactionType: "like" });
    }
  };
  const debounce = (func, delay) => {
    return () => {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = setTimeout(func, delay);
    };
  };
  const handleMouseLeave = debounce(() => setPanelVisibility(false), 300);
  const handleMouseEnter = () => {
    clearTimeout(leaveTimeoutRef.current);
  };
  const mutation = useMutation({
    mutationFn: (payload) => postUserReaction(payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) => console.log(error),
    onSuccess: (res, variables, context) => {
      console.log(res);
      setSelectedReaction(res?.data?.data.updatedReaction);
      setPanelVisibility(false);
      queryClient.invalidateQueries("getAllPosts");
    },
    onSettled: (data, error, variables, context) => {},
  });
  console.log(selectedReaction);
  return (
    <>
      <Divider />
      <Flex align="center" justify="space-between" p="3">
        <HStack
          cursor="pointer"
          onMouseEnter={() => setPanelVisibility(true)}
          onMouseLeave={handleMouseLeave}
          sx={{ position: "relative" }}
          onClick={handleLike}
        >
          {selectedReaction?.reactionType !== "dislike" ? (
            <>
              <Text fontSize={"20px"}>
                {reactions.find((item, ind) => item?.reactionType === selectedReaction?.reactionType)?.reaction}
              </Text>
              <Text fontSize={{ sm: "14px", md: "16px" }}>{selectedReaction?.reactionType}</Text>
            </>
          ) : (
            <>
              <ThumbsUp fontSize={{ sm: "10px" }} />
              <Text marginTop="4px" fontSize={{ sm: "14px", md: "16px" }}>
                Like
              </Text>
            </>
          )}
          {isPanelVisible && (
            <Flex
              ref={panelRef}
              direction="row"
              position="absolute"
              bottom="40px"
              left="10px"
              background="white"
              border="1px solid #ccc"
              borderRadius="30px"
              padding="5px"
              zIndex={100}
              gap={"1em"}
              p={"0.8em"}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              {reactions?.map((reaction, index) => (
                <Tooltip key={index} label={`${reaction.reactionType}`} placement="top" marginBottom={"1em"}>
                  <HStack
                    onClick={(e) => {
                      // handleReactionClick(reaction);
                      mutation.mutate({ postId: postId, createdBy: uid, reactionType: reaction.reactionType });
                      e.stopPropagation();
                    }}
                    cursor="pointer"
                    _hover={{ transform: "scale(2)", transition: "transform 0.2s ease-in-out" }}
                  >
                    <Text fontSize="18px">{reaction.reaction}</Text>
                  </HStack>
                </Tooltip>
              ))}
            </Flex>
          )}
        </HStack>
        <HStack cursor="pointer" onClick={onToggleComment}>
          <MessageCircle fontSize={{ sm: "14px" }} />
          <Text fontSize={{ sm: "14px", md: "16px" }}>Comment</Text>
        </HStack>
        <HStack cursor="pointer">
          <Share2 fontSize={{ sm: "14px" }} />
          <Text fontSize={{ sm: "14px", md: "16px" }}>Share</Text>
        </HStack>
      </Flex>
      <Divider />
      <Collapse in={isOpenComment} animateOpacity>
        <InputGroup size="lg">
          <Input type="tel" pr="6.3rem" placeholder="Type here..." />
          <InputLeftElement>
            <Image boxSize="40px" fit="cover" rounded="lg" src="/profile.jpeg" />
          </InputLeftElement>
          <InputRightElement width="100px" alignItems="center" justifyContent="space-around">
            <Image cursor="pointer" src="/image.svg" />
            <Text cursor="pointer">Post</Text>
          </InputRightElement>
        </InputGroup>
      </Collapse>
    </>
  );
};
