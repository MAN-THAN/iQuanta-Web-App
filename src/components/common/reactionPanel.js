import { Flex, HStack, Text, Tooltip, Box } from "@chakra-ui/react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const ReactionPanel = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isPanelVisible, setPanelVisibility] = useState(false);
  const panelRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const reactions = [
    { reaction: "👍", title: "Like" },
    { reaction: "❤️", title: "Love" },
    { reaction: "😂", title: "LOL" },
    { reaction: "😯", title: "Surprise" },
    { reaction: "😢", title: "Sad" },
    { reaction: "😡", title: "Angry" },
  ];

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setPanelVisibility(false);
  };
  const handleLike = () => {
    if (selectedReaction) {
      setSelectedReaction(null);
    } else {
      setSelectedReaction(reactions[0]);
    }
  };

  const handleMouseLeave = () => {
    // Add a delay before hiding the panel
    leaveTimeoutRef.current = setTimeout(() => {
      setPanelVisibility(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    // Cancel the hiding process if the mouse enters the panel during the delay
    clearTimeout(leaveTimeoutRef.current);
  };

  useEffect(() => {
    // Cleanup the timeout on component unmount
    return () => {
      clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  return (
    <Flex align="center" justify="space-between" p="3">
      <HStack
        cursor="pointer"
        onMouseEnter={() => setPanelVisibility(true)}
        onMouseLeave={handleMouseLeave}
        sx={{ position: "relative" }}
        onClick={handleLike}
      >
        {selectedReaction ? (
          <>
            <Text fontSize={"20px"}>{selectedReaction?.reaction}</Text>
            <Text fontSize={{ sm: "14px", md: "16px" }} fontWeight="800">
              {selectedReaction?.title}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {reactions?.map((reaction, index) => (
              <Tooltip key={index} label={`${reaction.title}`} placement="top" marginBottom={"1em"}>
                <HStack
                  onClick={(e) => {
                    handleReactionClick(reaction);
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
      <HStack cursor="pointer">
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
  );
};
