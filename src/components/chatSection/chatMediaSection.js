import {
  Avatar,
  Badge,
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PeopleList from "./peopleList";
import {
  ArrowLeft,
  BellOff,
  CircleIcon,
  MoreVertical,
  Search,
} from "lucide-react";

const ChatMediaSection = () => {
  return (
    <>
      <Box>
        <HStack alignItems="start" gap="6" justifyContent="space-between">
          <PeopleList />
          <Box
            bg="white.900"
            w="70%"
            h="80vh"
            rounded="lg"
            overflowY="scroll"
            overflowX="hidden"
            sx={{
              "::-webkit-scrollbar": {
                width: "5px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#8D96A5",
                borderRadius: "10px",
              },
            }}
          >
            <Box p="4">
              <ArrowLeft />
            </Box>
            <Box textAlign="center" p="10">
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Text>Rahul Rastogi</Text>
              <Text>+91 9876543987</Text>
            </Box>
            <Flex align="center" justifyContent="center" gap="6">
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                p="2"
                rounded="2xl"
                bg="gray.200"
              >
                <BellOff />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Mute
                </span>
              </Box>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                p="2"
                rounded="2xl"
                bg="gray.200"
              >
                <Search />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Find
                </span>
              </Box>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                p="2"
                rounded="2xl"
                bg="gray.200"
              >
                <CircleIcon />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Theme
                </span>
              </Box>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                p="2"
                rounded="2xl"
                bg="gray.200"
              >
                <MoreVertical />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  More
                </span>
              </Box>
            </Flex>
            <Divider mt="4" />
            <Box>
              <Text fontSize="18px" fontWeight="600" padding="4">
                Share Media
              </Text>
              <Wrap padding="4">
                {[...Array(5)].map((data, index) => (
                  <WrapItem key={index} w="250px">
                    <Image
                     alt="share media"
                      rounded="xl"
                      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    />
                  </WrapItem>
                ))}
                <WrapItem
                  rounded="xl"
                  w="250px"
                  bg="gray.200"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="35px">+10</Text>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default ChatMediaSection;
