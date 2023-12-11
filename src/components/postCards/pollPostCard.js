import React from "react";
import LikeShareButton from "../common/likeShareButton";
import EmojiGroup from "../common/avatarGroups";
import AddComment from "../common/addComment";
import { Avatar, AvatarGroup, Box, HStack, Image, Text } from "@chakra-ui/react";
import { Dot, MoreVertical } from "lucide-react";
import LikeEmojiGroup from "../common/likeEmojiGroup";
import AvatarGroups from "../common/avatarGroups";

const PollPostCard = () => {
  return (
    <>
      <Box bg="white.900" w="full" mx="auto" mt="4">
        <HStack align="center" justifyContent="space-between" padding={["3", null, "4"]}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: ["auto", null, "280px"],
            }}
          >
            <Box boxSize="45px">
              <Image
                objectFit="cover"
                width="100%"
                height="100%"
                className="rounded-md"
                src="/static/images/Profile.jpeg"
                alt="Profile Image"
              />
            </Box>
            <Box ml="2">
              <p style={{ fontSize: "18px", color: "#171717", fontWeight: "600" }}>Hardik Beniwal</p>
              <p style={{ fontSize: "14px", color: "#636363" }}>2h ago</p>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="4">
            <MoreVertical size="24px" />
          </Box>
        </HStack>
        <Text p="5" fontSize="md" fontWeight="semibold">
          Which exam are you folks applying for?
        </Text>
        <div className=" p-5 poll">
          <div className="flex justify-between mb-1">
            <span className="text-base font-semibold text-gray-600 dark:text-white">CAT</span>
            <AvatarGroups/>

          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
          </div>
        </div>
        <div className=" p-5 poll">
          <div className="flex justify-between mb-1">
            <span className="text-base font-semibold text-gray-600 dark:text-white">GMAT</span>
            <AvatarGroups/>

          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "31%" }}></div>
          </div>
        </div>
        <div className=" p-5 poll">
          <div className="flex justify-between mb-1">
            <span className="text-base font-semibold text-gray-600 dark:text-white">Other</span>
            <AvatarGroups/>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "27%" }}></div>
          </div>
        </div>
        <div className="flex gap-5 items-center ml-5 pb-3" style={{ display: "flex", flexDirection: "row" }}>
          <HStack align="center" fontWeight="400" fontSize="14px" padding="4">
            <Box display="flex" alignItems="center">
              <LikeEmojiGroup />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#455564",
                  paddingLeft: "5px",
                }}
              >
                423
              </span>
            </Box>
            <Box pl="5">
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>13</span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8D96A5",
                  paddingLeft: "5px",
                }}
              >
                comments
              </span>
            </Box>
            <Dot color="#8D96A5" />
            <Box>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#455564" }}>53</span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8D96A5",
                  paddingLeft: "5px",
                }}
              >
                following
              </span>
            </Box>
          </HStack>
        </div>
      </Box>
    </>
  );
};

export default PollPostCard;
