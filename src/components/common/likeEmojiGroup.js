import { Avatar } from "antd";
import React from "react";

const LikeEmojiGroup = () => {
  return (
    <>
      <Avatar.Group maxCount={3} size="small">
        <Avatar style={{ backgroundColor: "#fff" }} src="/Union.svg" />
        <Avatar style={{ backgroundColor: "#fff" }} src="/UnionH.svg" />
        <Avatar style={{ backgroundColor: "#fff" }} src="/Smile.svg" />
      </Avatar.Group>
    </>
  );
};

export default LikeEmojiGroup;
