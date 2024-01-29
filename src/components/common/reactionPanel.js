import { Flex, HStack, Text, Tooltip, Box } from "@chakra-ui/react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { postUserReaction } from "@/api/feed/user/reaction";
import { reactions } from "@/utilities/comanData";
import { CommentPanel } from "./commentPanel";
import { useDisclosure } from "@chakra-ui/react";

export const ReactionPanel = ({ postId, userReaction }) => {
  const { isOpen: isOpenComment, onToggle: onToggleComment, onClose: onClose } = useDisclosure();
  const [selectedReaction, setSelectedReaction] = useState(
    userReaction ? userReaction : { reactionType: "no_reaction" }
  );
  const [isPanelVisible, setPanelVisibility] = useState(false);
  const panelRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();
  const handleLike = () => {
    console.log("im aworking");
    if (selectedReaction?.reactionType !== "no_reaction") {
      mutation.mutate({ postId: postId, createdBy: uid, reactionType: "no_reaction" });
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
      <Flex align="center" justify="space-between" p="3">
        <HStack
          cursor="pointer"
          onMouseEnter={() => setPanelVisibility(true)}
          onMouseLeave={handleMouseLeave}
          sx={{ position: "relative" }}
          onClick={handleLike}
        >
          {selectedReaction?.reactionType !== "no_reaction" ? (
            <>
              <Text fontSize={"20px"}>
                {reactions.find((item, ind) => item?.reactionType === selectedReaction?.reactionType)?.reaction}
              </Text>
              <Text
                fontSize={{ sm: "14px", md: "16px" }}
                fontWeight="800"
                color={() =>
                  reactions.find((item, ind) => item?.reactionType === selectedReaction?.reactionType)?.fontColor
                }
              >
                {selectedReaction?.reactionType?.charAt(0).toUpperCase() + selectedReaction?.reactionType?.slice(1)}
              </Text>
            </>
          ) : (
            <>
              <ThumbsUp fontSize={{ sm: "10px" }} />
              <Text marginTop="4px" fontSize={{ sm: "14px", md: "16px" }} fontWeight="800">
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
          <Text fontSize={{ sm: "14px", md: "16px" }} fontWeight="800">
            Comment
          </Text>
        </HStack>
        <HStack cursor="pointer">
          <Share2 fontSize={{ sm: "14px" }} />
          <Text fontSize={{ sm: "14px", md: "16px" }} fontWeight="800">
            Share
          </Text>
        </HStack>
      </Flex>
      <CommentPanel isOpenComment={isOpenComment} postId={postId} />
    </>
  );
};
