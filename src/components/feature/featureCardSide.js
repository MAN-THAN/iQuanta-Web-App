import {
  Card,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
  HStack,
  Flex,
  CardBody,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Book, ChevronRight } from "lucide-react";

const FeatureCardSide = () => {
  return (
    <Box>
      <Flex align="center" justify="space-between" pb="4">
        <HStack>
          <Box>
            <Book />
          </Box>
          <Heading fontSize="18px" fontWeight="500">
            Featured Courses
          </Heading>
        </HStack>
        <Box>
          <ChevronRight />
        </Box>
      </Flex>
      <Card bg="#5146D6" rounded="xl">
        <CardBody>
          <Image
            width="100%"
            src="/Featurecard.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3" color="#fff">
            <Heading size="sm">GMAT TOEFL 2021 course</Heading>
            <Text fontSize="12px" fontWeight="500">
              Complete course for all your exams
            </Text>
            <UnorderedList fontSize="12px" fontWeight="400">
              <ListItem key="1">15 GRE pattern full mocks</ListItem>
              <ListItem>Video solution, performance analysis and more</ListItem>
            </UnorderedList>
          </Stack>
        </CardBody>
        <Flex
          align="center"
          justify="space-between"
          bg="#000"
          rounded="lg"
          m="2"
          padding="2"
        >
          <Stack align="self-start">
            <HStack fontSize="10px" textAlign="start">
              <strike className="text-gray-500">₹3000</strike>
              <span className="text-green-500">10% Off</span>
            </HStack>
            <Text fontSize="16px" color="#fff">
              ₹2,700
            </Text>
          </Stack>
          <Box bg="#9696965C" padding="0" rounded="md">
            <Button
              variant="solid"
              color="#fff"
              backgroundColor="#9696965C"
              _hover={{ color: "#000", backgroundColor: "#fff" }}
            >
              Buy now
            </Button>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default FeatureCardSide;
