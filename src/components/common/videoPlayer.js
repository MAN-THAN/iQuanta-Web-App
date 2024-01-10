import { Box } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  return (
    // <ReactPlayer  url={videoUrl} controls={true} />
    <video className="max-h-[500px] w-full rounded-lg" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
