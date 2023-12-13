import { Box, HStack, Menu, MenuButton, useMediaQuery, Flex } from "@chakra-ui/react";
// import Notification from "./notification"
// import ChatMsgSection from "./chatSection/chatMsgSection"
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { AlignJustify, Bell } from "lucide-react";
import SearchInput from "./searchInput";
import { BsChatDots } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

const MainHeader = () => {
  const router = useRouter();
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const toggleMenu = () => {
    // Add logic to toggle your menu here
  };
  const [state, setState] = useState();
  // const { _id: uid } = useSelector((state) => state.userData);
  // const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
  //   queryKey: ["getUserDetailData", uid],
  //   queryFn: () => getProfileInfo(uid),
  //   onError: (error, variables, context) =>
  //     toast.error(`${error?.response?.data.error.message}`, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     }),
  //   onSuccess: (data) => setState(data.data.data.user_data),
  // });
  console.log(state);

  return (
    <Flex
      as="header"
      bg="#F1F2F3"
      alignItems="center"
      justifyContent="space-between"
      py={8}
      position="sticky"
      top="0"
      zIndex="50"
      padding={{ base: "20px" }}
    >
      <HStack spacing={isSmallerThan768 ? 4 : 0}>
        <Box>
          <Image alt="logo" width="100%" src="/Logo.png" />
        </Box>
      </HStack>
      {!isSmallerThan768 && <SearchInput />}
      {isSmallerThan768 ? (
        <Box justifyContent="end" as={AlignJustify} />
      ) : (
        <Flex gap="20px" alignItems="center" justifyContent="space-between" color="grey.800">
          <Box onClick={() => router.push("/chat")}>
            <BsChatDots size="24px" />
          </Box>
          <Box>
            <Bell size="24px" />
          </Box>
          <Box boxSize="50px">
            <Image
              objectFit="cover"
              width="100%"
              height="100%"
              className="rounded-md"
              src="/static/images/Profile.jpeg"
              alt="profile image"
            />
          </Box>
          <Menu>
            <MenuButton onClick={() => router.push("/useraccount")}>
              <Box alignItems="center" textAlign="start">
                <span className="text-xs">Profile</span>
                <Box display="flex" fontWeight="700" alignItems="center">
                  <span className="text-xs" color="black.900">
                    Himanshu
                  </span>
                </Box>
              </Box>
            </MenuButton>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};

export default MainHeader;
