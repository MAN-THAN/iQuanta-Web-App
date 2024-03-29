import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BiDoughnutChart } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { useSelector } from "react-redux";

const PostFormSection = ({ openModal, setClickPhoto }) => {
  const { profilePic } = useSelector((state) => state.userData);
  return (
    <Box bg="#fff" p="4">
      <Flex alignItems="center">
        <Box >
          <Image
            boxSize="2.5rem"
            borderRadius="md"
            width="100%"
            src={profilePic ? profilePic : "noImage.svg"}
            alt="Fluffybuns the destroyer"
            fit="cover"
            mr="2"
          />
        </Box>
        <Box
          width="full"
          onClick={() => {
            openModal();
            setClickPhoto(false);
          }}
        >
          <Text color={'#8D96A5'} cursor={"pointer"} ml="4">
            Create a new post
          </Text>
        </Box>
      </Flex>
      <Divider pt="4" />
      <Flex align="center" justifyContent="center" py="3">
        <HStack className="w-full">
          <button
            type="button"
            className="hover:text-blue-500 w-full"
            style={{
              borderRight: "1px solid #D9D9D4",
            }}
          >
            <div
              className="flex items-center justify-center gap-2 text-sm font-semibold"
              onClick={() => {
                openModal();
                setClickPhoto(true);
              }}
            >
              <Image alt="megaphon icon" boxSize={{ sm: "18px" }} src="/ImageIcons.svg" />
              <Text fontSize={{ sm: "12px" }}>Photos/Videos</Text>
            </div>
          </button>
          <input
            type="file"
            id="myFile"
            style={{ display: "none" }} // Hide the file input
            // Handle file selection
          />
        </HStack>
        <button
          className="hover:text-blue-500  w-full"
          style={{
            borderRight: "1px solid #D9D9D4",
          }}
        >
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Image alt="megaphon icon" boxSize={{ sm: "18px" }} src="/PollBlack.svg" />
            <Text fontSize={{ sm: "12px" }}>Poll</Text>
          </div>
        </button>
        <button className="hover:text-blue-500  w-full">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Image alt="megaphon icon" boxSize={{ sm: "18px" }} src="/megaphone.svg" />
            <Text fontSize={{ sm: "12px" }}>Debate</Text>
          </div>
        </button>
      </Flex>
      <Divider />
    </Box>
  );
};

export default PostFormSection;
