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
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChevronRight, Dot, Mail, MessageSquare, Phone } from "lucide-react";
import { useFormik } from "formik";
import { userAuthGen } from "@/api/onboarding";
import { TbRuler3 } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";
import { useSession, signIn, signOut } from "next-auth/react";
import * as Yup from "yup";
import TeacherLayout from "@/components/layouts/teacherLayout";
import OnBordingLayout from "@/components/layouts/onBordingLayout";

const PhoneAuth = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: (phoneNum) => userAuthGen(phoneNum),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (data, variables, context) => {
      // toast.success("OTP Sent !", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      router.push({
        pathname: "/signup/submitotp",
        query: { phoneNum: formik.values.phoneNum },
      });
    },
    onSettled: (data, error, variables, context) => {},
  });

  const formik = useFormik({
    initialValues: {
      phoneNum: "",
    },
    validationSchema: Yup.object({
      phoneNum: Yup.string()
        .matches(/^[0-9]{10}$/, {
          message: "Invalid phone number",
          excludeEmptyString: false,
        })
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      mutation.mutate(values.phoneNum);
    },
  });
  console.log(mutation.error);

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
              <FormControl mt="10%">
                <FormLabel fontSize="18px" color="white">
                  Sign up using your mobile number
                </FormLabel>
                <InputGroup alignItems="center">
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}

                  <InputLeftAddon p="6" height="60px" bg="#252525" color="white" border="none" fontWeight="bold">
                    +91
                  </InputLeftAddon>
                  <Input
                    id="phoneNum"
                    name="phoneNum"
                    size="lg"
                    height="60px"
                    type="number"
                    bg="#252525"
                    color="white"
                    border="none"
                    inputMode="numeric"
                    placeholder="Enter your mobile number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNum}
                  />

                  {/* <PhoneInput
                  dropdownStyle={{ color: "red", border: "1px solid" }}
                  country={"in"}
                  countryCodeEditable={false}
                  id="phoneNum"
                  name="phoneNum"
                  size="lg"
                  height="60px"
                  type="number"
                  bg="#252525"
                  color="white"
                  border="none"
                  inputMode="numeric"
                  placeholder="Enter your mobile number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNum}
                /> */}

                  <Button
                    sx={{
                      bg: "#252525 !important",
                      transition: "background-color 0.3s",
                    }}
                    rounded="full"
                    p="2"
                    ml="2"
                    color="white"
                    _hover={{ color: "#F84D43", bg: "white !important" }}
                    onClick={formik.handleSubmit} // form validation part
                  >
                    <ChevronRight size="30px" />
                  </Button>
                </InputGroup>

                {formik.touched.phoneNum && formik.errors.phoneNum && (
                  <Text style={{ color: "red", marginTop: "8px" }}>{formik.errors.phoneNum}</Text>
                )}
                <Text py="4" color="white" fontWeight="500" lineHeight="16.94px" fontSize="16px">
                  We will send you an OTP code on this number for your verification
                </Text>
              </FormControl>
              <Box position="relative">
                <Divider width="250px" />
                <AbsoluteCenter
                  left="18%"
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="16px"
                  color="white"
                  bg="black"
                  px="4"
                >
                  <div style={{ textAlign: "start" }}>or sign up with</div>
                </AbsoluteCenter>
              </Box>
              <Stack direction="row" spacing={2} justify="start">
                <Button
                  p="6"
                  sx={{
                    fontSize: "16px",
                    width: "250px",
                    color: "black !important",
                    bg: "white !important",
                  }}
                  leftIcon={<Image alt="google image" w="22px" h="22px" src="/google.png" />}
                  variant="outline"
                  onClick={() => signIn()}
                >
                  {"Sign in with Google"}
                </Button>
                <Button
                  p="6"
                  _hover={{ color: "black", bg: "white !important" }}
                  sx={{
                    fontSize: "16px",
                    width: "200px",
                    color: "white",
                    border: "none",
                  }}
                  leftIcon={<Mail />}
                  variant="outline"
                >
                  Sign in with Mail
                </Button>
              </Stack>
              <Divider mt="25%" width="250px" />
              <p style={{ color: "white", fontSize: "14px" }}>
                By continuing you agree to
                <span style={{ fontWeight: "600" }}>&nbsp;Terms of services</span> and
                <span style={{ fontWeight: "600" }}>&nbsp;Privacy Policy</span>
              </p>
            </Stack>
          </Container>
        </Box>
      </Flex>
    </>
  );
};
 
PhoneAuth.getLayout = (page) => <OnBordingLayout>{page}</OnBordingLayout>;

export default PhoneAuth;
