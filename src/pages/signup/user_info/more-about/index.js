import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { userInterest } from "@/api/onboarding";
import { useQuery } from "react-query";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SELECTION":
      const updatedSelection = state[action.category].includes(action.title)
        ? state[action.category].filter((val) => val !== action.title)
        : [...state[action.category], action.title];
      return {
        ...state,
        [action.category]: updatedSelection,
      };
    default:
      return state;
  }
};

const MoreAbout = () => {
  const router = useRouter();
  const [apiCall, setApiCall]= useState(false);
  const {isLoading} = useQuery("userInterest", () => userInterest(selectedItems), {enabled : apiCall});

  const initialState = {
    tech: [],
    arts: [],
    knowledge: [],
    worldAffairs: [],
    sports: [],
  };

  const [selectedItems, dispatch] = useReducer(reducer, initialState);

  const handleToggleSelection = (category, title) => {
    dispatch({ type: "TOGGLE_SELECTION", category, title });
  };

  const categories = [
    {
      category: "tech",
      title: "Tech",
      items: [
        { id: 1, title: "Start ups" },
        { id: 2, title: "Engineering" },
        { id: 3, title: "Venture Capital" },
        { id: 4, title: "Marketing" },
        { id: 5, title: "Video Games" },
        { id: 6, title: "Crypto" },
        { id: 7, title: "Products" },
        { id: 8, title: "Angel Investing" },
      ],
    },
    {
      category: "arts",
      title: "Arts",
      items: [
        { id: 1, title: "Architecture" },
        { id: 2, title: "Design" },
        { id: 3, title: "Beauty" },
        { id: 4, title: "Writing" },
        { id: 5, title: "Photography" },
        { id: 6, title: "Advertising" },
        { id: 7, title: "Food & Drinks" },
        { id: 8, title: "Fashion" },
      ],
    },
    {
      category: "knowledge",
      title: "Knowledge",
      items: [
        { id: 1, title: "Math" },
        { id: 2, title: "Philosophy" },
        { id: 3, title: "History" },
        { id: 4, title: "Physics" },
        { id: 5, title: "Science" },
        { id: 6, title: "Biology" },
        { id: 7, title: "Psychology" },
        { id: 8, title: "Chemistry" },
      ],
    },
    {
      category: "worldAffairs",
      title: "World Affairs",
      items: [
        { id: 1, title: "Economics" },
        { id: 2, title: "Current Events" },
        { id: 3, title: "Law and Order" },
        { id: 4, title: "Geopolitics" },
        { id: 5, title: "Indian Politics" },
        { id: 6, title: "Start ups" },
      ],
    },
    {
      category: "sports",
      title: "Sports",
      items: [
        { id: 1, title: "Cricket" },
        { id: 2, title: "Football" },
        { id: 3, title: "Tennis" },
        { id: 4, title: "IPL" },
        { id: 5, title: "NBA" },
        { id: 6, title: "Volleyball" },
      ],
    },
  ];
  return (
    <Flex align="center" bg="black" flexWrap="wrap">
      <Box w={{ base: "100%", md: "40%" }} position="relative">
        <Image
          alt="icon"
          src="/back.png"
          objectFit="cover"
          width="100%"
          height="100vh"
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "50%",
            background: "linear-gradient(to right, #ffffff 0%, #000000 100%)",
            zIndex: "1",
            mixBlendMode: "multiply",
          }}
        ></div>
      </Box>
      <Box w={{ base: "100%", md: "60%" }}>
        <Container gap="6" mt={{ base: "40px", md: "0" }}>
          <Stack gap="6">
            <Box>
              <Image alt="logo" src="/logowhite.png" />
            </Box>
            <FormControl>
              <Heading as="h2" fontSize="28px" color="#fff">
                What are your interests?
              </Heading>
              <FormLabel color="#8A8A8A">Tell us more about you</FormLabel>
              <InputGroup>
                <InputLeftElement color="white" height="50px">
                  <Search />
                </InputLeftElement>
                <Input
                  height="50px"
                  width="450px"
                  type="text"
                  bg="#252525"
                  color="white"
                  border="none"
                  placeholder="Search"
                />
              </InputGroup>
            </FormControl>
            <Box maxH="30vh" overflow="scroll" color="#ffffff">
              {categories.map(({ category, title, items }) => (
                <Box key={category}>
                  <Text
                    fontSize="md"
                    align="start"
                    fontWeight="600"
                    py="2"
                    pt="5"
                  >
                    {title}
                  </Text>
                  <HStack flexWrap="wrap" gap="3" pt="2">
                    {items.map((data) => (
                      <Button
                        variant="ghost"
                        alignItems="center"
                        size="sm"
                        key={data.title}
                        bg={
                          selectedItems[category].includes(data.title)
                            ? "#F4F3FE"
                            : "#fff !important"
                        }
                        border={
                          selectedItems[category].includes(data.title)
                            ? "1px solid #5146D6"
                            : "1px solid gray"
                        }
                        onClick={() =>
                          handleToggleSelection(category, data.title)
                        }
                      >
                        {selectedItems[category].includes(data.title) ? (
                          <BsCheckLg
                            fontSize="14px"
                            fontWeight="900"
                            color="#5146D6"
                          />
                        ) : (
                          <GrAdd fontSize="14px" fontWeight="900" />
                        )}
                        <Text
                          fontSize="14px"
                          px="1"
                          color={
                            selectedItems[category].includes(data.title)
                              ? "#5146D6"
                              : ""
                          }
                        >
                          {data.title}
                        </Text>
                      </Button>
                    ))}
                  </HStack>
                </Box>
              ))}
            </Box>
            <Box pt="4">
              <Button
                onClick={() => {
                  setApiCall(true);
                  router.push("/");
                }}
                sx={{
                  backgroundColor: "#fff !important",
                  fontSize: "14px",
                }}
                w="100%"
                variant="solid"
              >
                Next
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
};

export default MoreAbout;
