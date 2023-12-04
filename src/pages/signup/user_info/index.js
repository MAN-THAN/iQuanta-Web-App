import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Card } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserInfo = () => {
  const router = useRouter();
  // Form validation

  // Formik hook
  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      phoneNum: "",
      gender: "male",
    },
    validationSchema: Yup.object({
      phoneNum: Yup.string()
        .matches(/^[0-9]{10}$/, {
          message: "Invalid phone number",
          excludeEmptyString: false,
        })
        .required("Phone number is required"),
      userName: Yup.string()
        .required("Name is required")
        .required("Name is required")
        .matches(/^[a-zA-Z\s]*$/, "Only alphabets and spaces are allowed"),

      userEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      gender: Yup.string().required("Please select your gender"),
    }),
    onSubmit: (values) => {
      // mutation.mutate(values.phoneNum);
      console.log("dfdgdf", values);
    },
  });

  const selectedPlan = formik.values.gender;

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
            <FormControl onSubmit={formik.handleSubmit}>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                name="userName"
              />
              {formik.touched.userName && formik.errors.userName && (
                <Text style={{ color: "red", marginTop: "8px" }}>
                  {formik.errors.userName}
                </Text>
              )}
              <FormLabel fontSize="20px" fontWeight="600" color="#fff" py="3">
                How do we reach you out?
              </FormLabel>
              <InputGroup gap="4">
                <VStack width="full" align="start">
                  <Input
                    size="lg"
                    height="50px"
                    type="text"
                    bg="#252525"
                    color="white"
                    border="none"
                    placeholder="Enter your email "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userEmail}
                    name="userEmail"
                  />
                  {formik.touched.userEmail && formik.errors.userEmail && (
                    <Text style={{ color: "red", marginTop: "8px" }}>
                      {formik.errors.userEmail}
                    </Text>
                  )}
                </VStack>

                <VStack width="full" align="start">
                  <Input
                    size="lg"
                    height="50px"
                    type="text"
                    bg="#252525"
                    color="white"
                    border="none"
                    placeholder="Enter your mobile number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNum}
                    name="phoneNum"
                  />
                  {formik.touched.phoneNum && formik.errors.phoneNum && (
                    <Text style={{ color: "red", marginTop: "8px" }}>
                      {formik.errors.phoneNum}
                    </Text>
                  )}
                </VStack>
              </InputGroup>

              <Box display="flex" gap="6" pt="7">
                <Box
                  className="relative flex flex-row rounded-lg shadow-md cursor-pointer"
                  textAlign="center"
                  color="#fff"
                >
                  <label htmlFor="gender-male">
                    <Text>Male</Text>
                    <Image
                      border={`${
                        selectedPlan === "male" ? "4px solid red" : ""
                      }`}
                      rounded="3xl"
                      alt="male icon"
                      scale="2px"
                      src="/male.png"
                    />
                    <input
                      type="radio"
                      name="gender"
                      id="gender-male"
                      value="male"
                      className="absolute h-0 w-0 appearance-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === "male"}
                    />
                  </label>
                </Box>
                <Box
                  className="relative flex flex-row rounded-lg shadow-md cursor-pointer"
                  textAlign="center"
                  color="#fff"
                >
                  <label htmlFor="gender-female">
                    <Text>Female</Text>
                    <Image
                      border={`${
                        selectedPlan === "female" ? "4px solid red" : ""
                      }`}
                      rounded="3xl"
                      alt="male icon"
                      scale="2px"
                      src="/female.png"
                    />
                    <input
                      type="radio"
                      name="gender"
                      id="gender-female"
                      value="female"
                      className="absolute h-0 w-0 appearance-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === "female"}
                    />
                  </label>
                </Box>
                <Box
                  className="relative flex flex-row rounded-lg shadow-md cursor-pointer"
                  textAlign="center"
                  color="#fff"
                >
                  <label htmlFor="gender-other">
                    <Text>Don't Prefer</Text>
                    <Image
                      border={`${
                        selectedPlan === "other" ? "4px solid red" : ""
                      }`}
                      rounded="3xl"
                      alt="male icon"
                      scale="2px"
                      src="/other.png"
                    />
                    <input
                      type="radio"
                      name="gender"
                      id="gender-other"
                      value="other"
                      className="absolute h-0 w-0 appearance-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === "other"}
                    />
                  </label>
                </Box>
              </Box>
              <Button
                p="6"
                mt="6"
                type="submit"
                onClick={() => formik.handleSubmit()}
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
