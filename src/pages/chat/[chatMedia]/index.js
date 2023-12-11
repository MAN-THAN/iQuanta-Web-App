import ChatMediaSection from "@/components/chatSection/chatMediaSection";
import ChatLayout from "@/components/layouts/chatLayout";
import React from "react";

const ChatMedia = () => {
  return (
    <>
      <ChatMediaSection />
    </>
  );
};

ChatMedia.getLayout = (page) => {
  return <ChatLayout>{page}</ChatLayout>;
};

export default ChatMedia;
