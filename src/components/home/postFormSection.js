import { Box, Divider, Flex, HStack, Image } from "@chakra-ui/react";
import { BiDoughnutChart } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";

const PostFormSection = () => {
  return (
    <Box bg="#fff" p='4'>
      <Flex className="flex items-center">
        <Box width="50px" height="50px">
          <Image
            boxSize="2.5rem"
            borderRadius="md"
            width="100%"
            src="/static/images/Profile.jpeg"
            alt="Fluffybuns the destroyer"
            fit="cover"
            mr="2"
          />
        </Box>
        <input
          className="w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
          id="6"
          type="text"
          placeholder="Create a new post"
        />
        {/* <button className="hover:text-blue-500 w-1/5  py-2 outline-none focus:shadow-outline">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <BsImages />
            <span>Post</span>
          </div>
        </button> */}
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
            <div className="flex items-center justify-center gap-2 text-sm font-semibold">
              <CiImageOn size="26px" fontWeight="800" />
              <span>Photos/Videos</span>
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
            <BiDoughnutChart size="26px" />
            <span> Poll</span>
          </div>
        </button>
        <button className="hover:text-blue-500  w-full">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Image src="/megaphone.svg" />
            <span> Debate</span>
          </div>
        </button>
      </Flex>
      <Divider />
    </Box>
  );
};

export default PostFormSection;
