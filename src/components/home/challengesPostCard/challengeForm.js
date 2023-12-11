import { Box, Flex, Image } from "@chakra-ui/react";

const ChallengeForm = () => {
  return (
    <Box bg='white.900' p='4'>
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
    </Box>
  );
};

export default ChallengeForm;
