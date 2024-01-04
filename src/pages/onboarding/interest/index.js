import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useReducer, useState, useEffect, useMemo } from "react";
import { BsCheckLg } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { useRouter } from 'next/router'
import { Search } from "lucide-react";
import { postUserInterest, getInterests } from "@/api/onboarding";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import OnBordingLayout from "@/components/layouts/onBordingLayout";

const Interest = () => {
  const router = useRouter();
  const { isLoading, data, isError, error } = useQuery("getInterest", getInterests);
  const [interests, setInterests] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const { _id: uid } = useSelector((state) => state.userData);

  //Setting Interests state
  useEffect(() => {
    if (data?.status == 200) {
      setInterests(data?.data.data.list);
    }
  }, [data]);
  // Mutation
  const mutation = useMutation({
    mutationFn: (payload) => postUserInterest(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (data, variables, context) => {
      router.push("/");
    },
    onSettled: (data, error, variables, context) => {},
  });
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_SELECTION":
        const updatedSelection = state.includes(action.title)
          ? state.filter((val) => val !== action.title)
          : [...state, action.title];
        return updatedSelection;
      default:
        return state;
    }
  };
  // Search Func
  const filteredData = useMemo(() => {
    if (!interests || !searchTerm) {
      return interests; // If INTERESTS or searchTerm is not present, return original data
    }
    return interests
      .filter((category) => {
        const filteredEntityTypes = category.items.filter((entity) =>
          entity.title.toLowerCase().startsWith(searchTerm)
        );

        return filteredEntityTypes.length > 0; // Include only if there are matching entity_types
      })
      .map((category) => ({
        ...category,
        items: category.items.filter((entity) => entity.title.toLowerCase().startsWith(searchTerm)),
      }));
  }, [interests, searchTerm]);

  const [selectedItems, dispatch] = useReducer(reducer, initialState);
  const handleToggleSelection = (title) => {
    dispatch({ type: "TOGGLE_SELECTION", title });
  };

  const isFormValid = () => {
    if (selectedItems.length > 2) {
      return true;
    } else return false;
  };

  const handleNextClick = () => {
    if (isFormValid()) {
      mutation.mutate(selectedItems);
    } else {
      // Display a validation message or take any other action
      toast.error("Please select at least three item", {
        position: "top-right",
        autoClose: 2000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <Flex align="center" bg="black" flexWrap="wrap">
        <Box w={{ base: "100%", md: "40%" }} position="relative">
          <Image alt="icon" src="/back.png" objectFit="cover" width="100%" height="100vh" />
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
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Box maxH="30vh" overflow="scroll" color="#ffffff">
                {filteredData?.map(({ category, title, items, _id }) => (
                  <Box key={_id}>
                    <Text fontSize="md" align="start" fontWeight="600" py="2" pt="5">
                      {title}
                    </Text>
                    <HStack flexWrap="wrap" gap="3" pt="2">
                      {items.map((data) => (
                        <Button
                          key={data._id}
                          variant="ghost"
                          alignItems="center"
                          size="sm"
                          bg={selectedItems.includes(data.title) ? "#F4F3FE" : "#fff !important"}
                          border={selectedItems.includes(data.title) ? "1px solid #5146D6" : "1px solid gray"}
                          onClick={() => handleToggleSelection(data.title)}
                        >
                          {selectedItems.includes(data.title) ? (
                            <BsCheckLg fontSize="14px" fontWeight="900" color="#5146D6" />
                          ) : (
                            <GrAdd fontSize="14px" fontWeight="900" />
                          )}
                          <Text fontSize="14px" px="1" color={selectedItems.includes(data.title) ? "#5146D6" : ""}>
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
                  onClick={handleNextClick}
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
    </>
  );
};

export default Interest;
