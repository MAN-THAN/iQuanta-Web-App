import BackButton from "@/components/common/backButton";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChevronDownIcon, Minus, Plus, SearchIcon } from "lucide-react";

const AccelareaderTopicList = () => {
  return (
    <>
      <Box bg="#fff" roundedTop="2xl" p="4">
        <HStack py="4">
          <BackButton />
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Select the topic
            </Text>
          </Box>
        </HStack>
        <Stack height="60vh" overflowY="scroll">
          {[...Array(5)].map((data, i) => (
            <>
              <Radio key={i} size="md" name="1" colorScheme="orange" py="3" gap="2">
                English Language
              </Radio>
              <Divider />
            </>
          ))}
        </Stack>
        <Button
          width="100%"
          sx={{
            bg: "black !important",
            color: "#fff",
            margin: "0 auto",
            fontSize: "12px",
          }}
          variant="solid"
        >
          Start
        </Button>
      </Box>
    </>
  );
};

export default AccelareaderTopicList