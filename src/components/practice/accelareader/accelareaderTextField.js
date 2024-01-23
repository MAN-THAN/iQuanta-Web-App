import BackButton from "@/components/common/backButton";
import {
  Box,
  Button,
  Center,
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
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChevronDownIcon, Minus, Plus, SearchIcon } from "lucide-react";

const AccelareaderTextField = () => {
  return (
    <>
      <Box mt="4" bg="#fff" roundedTop="2xl" p="4">
        <HStack py="4">
          <BackButton />
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Accelareader
            </Text>
            <Text fontSize="12px" color="#636363">
              Practice
            </Text>
          </Box>
        </HStack>
        <Text p="4" py="4">
          Accelareader will help you read faster by flashing words at you using what is called a Rapid Serial Visual
          Presentation. Practice speed reading and save precious time during your final exam.
        </Text>
      </Box>
      <Box mt="4" bg="#fff" p="4">
        <Textarea placeholder="Write your answer here..." h="45vh" mb="4" />
        <Button
          width="100%"
          marginTop="7"
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

export default AccelareaderTextField;
