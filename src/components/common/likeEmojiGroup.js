import { Avatar } from "antd";
import React from "react";
import { Text } from "@chakra-ui/react";
import { reactions } from "@/utilities/comanData";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getReactionsByPostId } from "@/api/feed/user/reaction";

const LikeEmojiGroup = ({ userReaction, postId }) => {
  // const reactions = [
  //   { reaction: "👍", reactionType: "like", fontColor: "#DAA520" },
  //   { reaction: "❤️", reactionType: "heart", fontColor: "#C92A2A" },
  //   { reaction: "😂", reactionType: "happy", fontColor: "#FFD700" },
  //   { reaction: "😯", reactionType: "surprise", fontColor: "#FFA500" },
  //   { reaction: "😢", reactionType: "sad", fontColor: "#5E6A71" },
  //   { reaction: "😡", reactionType: "angry", fontColor: "#C92A2A" },
  // ];
  const modifiedReactions = reactions.slice(1);
  const [reactionCountDetail, setReactionCountDetail] = useState([]);
  const { _id: uid } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useQuery({
    queryKey: ["getAllReactions", postId],
    queryFn: () => getReactionsByPostId(postId, uid),
    onError: (error, variables, context) => {},
    onSuccess: (res, page) => {
      console.log(res);
      setReactionCountDetail(res?.data.data.reactionCountDetail);
    },
  });
  const getEmojiArrOnPosts = () => {
    const arr = [];
    reactionCountDetail?.length > 0 &&
      reactionCountDetail?.map((item, ind) => {
        if (item.count > 0 && !arr.find((i) => i.reactionType === item.type) && item.type !== "like") {
          const obj = modifiedReactions.find((i) => i.reactionType === item.type);
          // console.log(obj);
          arr.push(obj);
        }
      });
    // if (userReaction && userReaction?.reactionType !== "like") {
    //   const userReactionObj = modifiedReactions.find((i) => i.reactionType === userReaction.reactionType);
    //   console.log(userReaction);
    //   arr.push(userReactionObj);
    // }
    return arr;
  };
  console.log(getEmojiArrOnPosts());
  return (
    <>
      <Avatar.Group maxCount={3} size="small">
        {getEmojiArrOnPosts().length === 0 ? (
          <Avatar fontSize={"16px"}>{"👍"}</Avatar>
        ) : (
          getEmojiArrOnPosts().map((i, ind) => (
            <Avatar key={ind} fontSize={"16px"}>
              {i?.reaction}
            </Avatar>
          ))
        )}
        {/* <Avatar style={{ backgroundColor: "#fff" }} src="/Union.svg" />
        <Avatar style={{ backgroundColor: "#fff" }} src="/UnionH.svg" />
        <Avatar style={{ backgroundColor: "#fff" }} src="/Smile.svg" /> */}
      </Avatar.Group>
    </>
  );
};

export default LikeEmojiGroup;
