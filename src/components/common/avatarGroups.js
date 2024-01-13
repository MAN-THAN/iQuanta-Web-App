import { Avatar, AvatarGroup } from "@chakra-ui/react";
import React from "react";

const AvatarGroups = ({ size , data }) => {
  console.log("data",data);
  return (
    <AvatarGroup size='sm' max={3}>
      {data?.map(user=>{
      return  <Avatar name={user.name} src={user.profilePic} />
      })}
      
      {/* <Avatar name={dat} src="https://bit.ly/sage-adebayo" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" /> */}
    </AvatarGroup>
  );
};

export default AvatarGroups;
