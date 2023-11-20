"use client";
import React, { useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Card } from "antd";

const UserInfo = () => {
  const router = useRouter();
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
              <FormLabel fontSize="20px" fontWeight="600" color="#fff" py="3">
                What should we call you?
              </FormLabel>
              <Input
                size="lg"
                height="60px"
                type="text"
                bg="#252525"
                color="white"
                border="none"
                placeholder="Enter your name"
              />
              <FormLabel fontSize="20px" fontWeight="600" color="#fff" py="3">
                How do we reach you out?
              </FormLabel>
              <InputGroup gap="4">
                <Input
                  size="lg"
                  height="50px"
                  type="text"
                  bg="#252525"
                  color="white"
                  border="none"
                  placeholder="Enter your email "
                />
                I
                <Input
                  size="lg"
                  height="50px"
                  type="text"
                  bg="#252525"
                  color="white"
                  border="none"
                  placeholder="Enter your mobile number"
                />
              </InputGroup>
              <Box display="flex" gap="6" pt="7">
                <Box textAlign="center" color="#fff">
                  <Text>Male</Text>
                  <Image alt="male icon" scale="2px" src="/male.png" />
                </Box>
                <Box textAlign="center" color="#fff">
                  <Text>Female</Text>
                  <Image alt="female icon" src="/female.png" />
                </Box>
                <Box textAlign="center" color="#fff">
                  <Text>Don’t Prefer</Text>
                  <Image alt="other icon" src="/other.png" />
                </Box>
              </Box>
              <Button
                p="6"
                mt="6"
                sx={{
                  fontSize: "16px",
                  width: "75%",
                  color: "#7E7E7E !important",
                  bg: "#252525 !important",
                }}
                _hover={{
                  bg: "white  !important",
                  color: "#F84D43 !important",
                }}
              >
                Continue
              </Button>
            </FormControl>
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
};

export default UserInfo;
