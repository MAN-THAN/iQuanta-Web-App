import React, { useState } from "react";
import ChatLayout from "@/components/layouts/chatLayout";
import ChatDetailsView from "@/components/chatSection/chatDetailsView";

const ChatPage = () => {
  return (
    <>
      <ChatDetailsView />
    </>
  );
};

ChatPage.getLayout = (page) => {
  return <ChatLayout>{page}</ChatLayout>;
};

export default ChatPage;
