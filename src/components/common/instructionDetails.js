import { HTMLConverter } from "@/utilities/commonFunctions";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

const InstructionDetails = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack>
        <Flex justifyContent="center" py="4">
          <Image src="/logo.png" />
        </Flex>
        <Text fontSize="18px" fontWeight="600" textAlign="center">
          Term & condition
        </Text>
        <Box height="65vh" width="80vw" border="2px solid #000" py="6" overflowY="scroll">
          <HTMLConverter>{`<h1>Paste here your html<h1>`}</HTMLConverter>
        </Box>
        <Flex justifyContent="space-evenly">
          <Button width="15%" bg="brand.900" rounded="full" color="white.900">
            Agree
          </Button>
          <Button width="15%" rounded="full" bg="black.900" color="white.900">
            Start Test
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default InstructionDetails;
