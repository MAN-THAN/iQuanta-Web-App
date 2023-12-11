import React, { useState } from "react";
import { AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { BiLike, BiSolidLike } from "react-icons/bi";

const LikeShareButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  const iconColor = liked ? "red" : "";
  return (
    <div className="flex bg-white  w-full text-md" role="group">
      <button
        onClick={handleClick}
        className=" hover:text-blue-500  border border-r-0   py-2 mx-0 outline-none focus:shadow-outline w-full"
      >
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          {liked ? <BiSolidLike className="text-lg" style={{ color: "blue" }} /> : <BiLike className="text-lg" />}
          <span>Like</span>
        </div>
      </button>
      <button className="hover:text-blue-500  border  py-2 mx-0 outline-none focus:shadow-outline w-full">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <AiOutlineComment className="text-lg" /> <span>Comment</span>
        </div>
      </button>
      <button className="hover:text-blue-500  border border-l-0 py-2 mx-0 outline-none focus:shadow-outline w-full">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <AiOutlineShareAlt className="text-lg" />
          <span>Share</span>
        </div>
      </button>
    </div>
  );
};

export default LikeShareButton;
