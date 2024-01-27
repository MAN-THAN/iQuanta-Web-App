import { Avatar } from "antd";
import React from "react";
import { Text } from "@chakra-ui/react";
import { reactions } from "@/utilities/comanData";

const LikeEmojiGroup = ({userReaction, reactionCountDetail}) => {
  // const reactions = [
  //   { reaction: "👍", reactionType: "like", fontColor: "#DAA520" },
  //   { reaction: "❤️", reactionType: "heart", fontColor: "#C92A2A" },
  //   { reaction: "😂", reactionType: "happy", fontColor: "#FFD700" },
  //   { reaction: "😯", reactionType: "surprise", fontColor: "#FFA500" },
  //   { reaction: "😢", reactionType: "sad", fontColor: "#5E6A71" },
  //   { reaction: "😡", reactionType: "angry", fontColor: "#C92A2A" },
  // ];
  const modifiedReactions = reactions.slice(1);
  console.log(userReaction);
  const getEmojiArrOnPosts = () => {
    const arr = [];
    reactionCountDetail?.length > 0 && reactionCountDetail?.map((item, ind) => {
      if(item.count > 0 && !arr.find((i)=>i.reactionType === item.type) && item.type !== 'like'){
        const obj = modifiedReactions.find((i) => i.reactionType === item.type);
        arr.push(obj)
      }
    });
    if(userReaction && userReaction?.reactionType!=='like'){
      arr.push(userReaction)
    }
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
