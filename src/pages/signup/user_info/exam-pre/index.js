"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import SplashSearchCard from "../../../components/search-cards/splashSearchCard";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { GrAdd } from "react-icons/gr";

const ExamPreChosse = () => {
  const router = useRouter();
  const examArray = [
    { id: 1, title: "GMAT", img: "/exam.png", selected: false },
    { id: 2, title: "GMAT", img: "/exam.png", selected: false },
    { id: 3, title: "GMAT", img: "/exam.png", selected: false },
  ];
  const examArray2 = [
    { id: 1, title: "GMAT", img: "/exam.png", selected: false },
    { id: 2, title: "GMAT", img: "/exam.png", selected: false },
    { id: 3, title: "GMAT", img: "/exam.png", selected: false },
  ];

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (id) => {
    if (selectedImages?.includes(id)) {
      setSelectedImages(selectedImages.filter((val) => val !== id));
    } else {
      setSelectedImages([...(selectedImages ?? []), id]);
    }
  };

  return (
    <Flex align="center" bg="black" flexWrap="wrap">
      <Box w={{ base: "100%", md: "40%" }} position="relative">
        <Image src="/back.png" objectFit="cover" width="100%" height="100vh" />
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
              <Image src="/logowhite.png" />
            </Box>
            <FormControl>
              <Heading as="h2" fontSize="28px" color="#fff">
                Which exams are you preparing for?
              </Heading>
              <FormLabel color="#8A8A8A">
                You can add more later id needed
              </FormLabel>
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
          </Stack>
        </Container>
        <Box
          mt="7"
          width="100%"
          h="auto"
          display="flex"
          justifyContent="space-between"
          pl="20%"
        >
          <Box
            width="260px"
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            p="2"
          >
            <div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#FFFFFF",
                  fontWeight: "500",
                }}
              >
                After college
              </p>
              <p style={{ fontSize: "12px", color: "#FFFFFF80" }}>
                MBA in India
              </p>
              {examArray.map(() => (
                <Button
                  variant="ghost"
                  alignItems="center"
                  size="sm"
                  key=""
                  bg={"#fff !important"}
                  border={"1px solid gray"}
                  mr="1"
                  mt="2"
                >
                  <GrAdd fontSize="14px" fontWeight="900" />

                  <Text fontSize="14px" px="1">
                    CTE
                  </Text>
                </Button>
              ))}
              <p
                style={{
                  fontSize: "12px",
                  color: "#FFFFFF80",
                  marginTop: "7px",
                }}
              >
                MBA in India
              </p>
              {examArray2.map(() => (
                <Button
                  variant="ghost"
                  alignItems="center"
                  size="sm"
                  key=""
                  bg={"#fff !important"}
                  border={"1px solid gray"}
                  mr="1"
                  mt="2"
                >
                  <GrAdd fontSize="14px" fontWeight="900" />

                  <Text fontSize="14px" px="1">
                    CTE
                  </Text>
                </Button>
              ))}
            </div>
            <ChevronDown color="#fff" />
          </Box>
          <Box
            width="260px"
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            p="2"
          >
            <div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#FFFFFF",
                  fontWeight: "500",
                }}
              >
                After college
              </p>
              <p style={{ fontSize: "12px", color: "#FFFFFF80" }}>&nbsp;</p>
              {examArray.map(() => (
                <Button
                  variant="ghost"
                  alignItems="center"
                  size="sm"
                  key=""
                  bg={"#fff !important"}
                  border={"1px solid gray"}
                  mr="1"
                  mt="2"
                >
                  <GrAdd fontSize="14px" fontWeight="900" />

                  <Text fontSize="14px" px="1">
                    CTE
                  </Text>
                </Button>
              ))}
              <p
                style={{
                  fontSize: "12px",
                  color: "#FFFFFF80",
                  marginTop: "7px",
                }}
              >
                &nbsp;
              </p>
              {examArray2.map(() => (
                <Button
                  variant="ghost"
                  alignItems="center"
                  size="sm"
                  key=""
                  bg={"#fff !important"}
                  border={"1px solid gray"}
                  mr="1"
                  mt="2"
                >
                  <GrAdd fontSize="14px" fontWeight="900" />

                  <Text fontSize="14px" px="1">
                    CTE
                  </Text>
                </Button>
              ))}
            </div>
            <ChevronDown color="#fff" />
          </Box>
          <Box
            width="260px"
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            p="2"
          >
            <div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#FFFFFF",
                  fontWeight: "500",
                }}
              >
                After college
              </p>
              <p style={{ fontSize: "12px", color: "#FFFFFF80" }}>&nbsp;</p>
              {examArray.map(() => (
                <Button
                  variant="ghost"
                  alignItems="center"
                  size="sm"
                  key=""
                  bg={"#fff !important"}
                  border={"1px solid gray"}
                  mr="1"
                  mt="2"
                >
                  <GrAdd fontSize="14px" fontWeight="900" />

                  <Text fontSize="14px" px="1">
                    CTE
                  </Text>
                </Button>
              ))}
              <p
                style={{
                  fontSize: "12px",
                  color: "#FFFFFF80",
                  marginTop: "7px",
                }}
              >
                &nbsp;
              </p>
              {examArray2.map(() => (
                <Button
                  variant="ghost"
                  alignItems="center"
                  size="sm"
                  key=""
                  bg={"#fff !important"}
                  border={"1px solid gray"}
                  mr="1"
                  mt="2"
                >
                  <GrAdd fontSize="14px" fontWeight="900" />

                  <Text fontSize="14px" px="1">
                    CTE
                  </Text>
                </Button>
              ))}
            </div>
            <ChevronDown color="#fff" />
          </Box>
        </Box>
        <Box pt="4" width='300px' ml='20%'>
          <Button
            onClick={() => router.push("/home")}
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
      </Box>
    </Flex>
  );
};

export default ExamPreChosse;
