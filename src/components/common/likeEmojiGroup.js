import { Avatar } from "antd";
import React from "react";
import { Text } from "@chakra-ui/react";

const LikeEmojiGroup = ({userReaction}) => {
  const reactions = [
    { reaction: "👍", reactionType: "like", fontColor: "#DAA520" },
    { reaction: "❤️", reactionType: "heart", fontColor: "#C92A2A" },
    { reaction: "😂", reactionType: "happy", fontColor: "#FFD700" },
    { reaction: "😯", reactionType: "surprise", fontColor: "#FFA500" },
    { reaction: "😢", reactionType: "sad", fontColor: "#5E6A71" },
    { reaction: "😡", reactionType: "angry", fontColor: "#C92A2A" },
  ];
  console.log(userReaction);
  const getEmojiArrOnPosts = () => {
    const arr = [];
    userReaction?.length > 0 && userReaction?.map((item, ind) => {
      const obj = reactions.find((i) => i.reactionType === item.reactionType);
      arr.push(obj)
    })
    return arr;
  }
  console.log(getEmojiArrOnPosts())
  return (
    <>
      <Avatar.Group maxCount={3} size="small">
        <Text fontSize={'16px'}>{"👍"}</Text>
        {getEmojiArrOnPosts().map((i, ind) =>  <Text key={ind} fontSize={'16px'}>{i?.reaction}</Text>)}
        {/* <Text fontSize={'16px'}>{"❤️"}</Text>
        <Text fontSize={'16px'}>{"😂"}</Text> */}

        {/* <Avatar style={{ backgroundColor: "#fff" }} src="/Union.svg" />
        <Avatar style={{ backgroundColor: "#fff" }} src="/UnionH.svg" />
        <Avatar style={{ backgroundColor: "#fff" }} src="/Smile.svg" /> */}
      </Avatar.Group>
    </>
  );
};

export default LikeEmojiGroup;
