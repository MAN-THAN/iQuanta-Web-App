import React, { useState } from "react";
import ChatLayout from "@/components/layouts/chatLayout";
import ChatDetailsView from "@/components/chatSection/chatDetailsView";

const ChatPage = () => {
  return (
    <>
      <ChatLayout>
        <ChatDetailsView />
      </ChatLayout>
    </>
  );
};

export default ChatPage;
