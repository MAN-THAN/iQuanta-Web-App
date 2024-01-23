import React, { useState, useMemo } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Stack,
  HStack,
  Box,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  UnorderedList,
  ListItem,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Image,
  Select,
  Portal,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getFriendList } from "@/api/feed/user/friendList";
import { SearchIcon } from "lucide-react";
import { useSelector } from "react-redux";

export const ConfirmationModal = ({
  selectedTopic,
  friendList,
  setFriendList,
  selectedFriends,
  setSelectedFriends,
  challengeType,
  setChallengeType,
}) => {
  const { _id: uid, profilePic } = useSelector((state) => state.userData);
  const [searchFriend, setSearchFriend] = useState();
  // Search Func
  const filteredFriends = useMemo(() => {
    if (!searchFriend) {
      return friendList;
    }
    return friendList.filter((item) => item?.name.toLowerCase().startsWith(searchFriend.toLowerCase()));
  }, [friendList, searchFriend]);
  const friendListQuery = useQuery({
    queryKey: ["getFriendList", uid],
    queryFn: () => getFriendList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setFriendList(res?.data.data?.friendList),
  });
  console.log(friendList, "friendalIST");
  return (
    <Box w="100%" display={"flex"} justifyContent={"center"} flexDirection={"column"} gap={"1em"}>
      <Box height={"5.5em"} width={"100%"} bgColor={"#5146D6"} p={"1.2em"} borderRadius={"10px"}>
        <Flex gap={"1em"}>
          <Image src={profilePic} alt="profile pic" width={"3em"} height={"3em"} borderRadius={"8px"}></Image>
          <Box>
            <Text>You want to challenge in</Text>
            <Text fontWeight={"700"}>{selectedTopic?.map((i) => i.title + " ")}</Text>
          </Box>
        </Flex>
      </Box>
      <Text sx={{ fontSize: "16px", fontWeight: "700" }}>Challenge type</Text>
      <RadioGroup
        value={challengeType}
        onChange={(e) => setChallengeType(e)}
      >
        <Stack>
          <Flex justifyContent={"space-between"}>
            <label htmlFor="openChallenge">
              <Box cursor={"pointer"}>
                {" "}
                <Text sx={{ fontSize: "14px" }}>Open Challenge</Text>
                <Text sx={{ fontSize: "12px", color: "grey" }}>Anyone from your followers can join</Text>
              </Box>
            </label>
            <Radio id="openChallenge" value="Public" />
          </Flex>
          <Flex justifyContent={"space-between"}>
            <label htmlFor="privateChallenge">
              <Box cursor={"pointer"}>
                {" "}
                <Text sx={{ fontSize: "14px" }}>Private Challenge</Text>
                <Text sx={{ fontSize: "12px", color: "grey" }}>Only invited people can join</Text>
              </Box>
            </label>
            <Radio id="privateChallenge" value="Private" />
          </Flex>
        </Stack>
      </RadioGroup>
      <Text sx={{ fontSize: "16px", fontWeight: "700" }}>Who can join your challenge</Text>
      <InputGroup size="sm">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={searchFriend}
          onChange={(e) => setSearchFriend(e.target.value)}
          pl="3.0rem"
          placeholder="Search for people"
        />
      </InputGroup>
      <UnorderedList listStyleType="none" overflowY="scroll">
        {filteredFriends?.map((item, ind) => (
          <ListItem key={ind} display="flex" alignItems="center" justifyContent="space-between" pr="4" pt="5">
            <Box display="flex" alignItems="center">
              <Image
                boxSize="2.5rem"
                fit="cover"
                borderRadius="md"
                src={item?.profilePic}
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <Box>
                <p style={{ fontSize: "16px", color: "#171717" }}>{item?.name}</p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#636363",
                    textOverflow: "ellipsis",
                  }}
                >
                  Master Level
                </p>
              </Box>
            </Box>
            <Checkbox
              size="lg"
              colorScheme="green"
              isChecked={selectedFriends?.includes(item)}
              onChange={() =>
                setSelectedFriends((prev) => {
                  const isIncludes = prev.includes(item);
                  if (isIncludes) {
                    return prev.filter((i, ind) => i?._id !== item?._id);
                  } else {
                    return [...prev, item];
                  }
                })
              }
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
