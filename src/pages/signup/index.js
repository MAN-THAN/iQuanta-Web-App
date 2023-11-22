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
import { ChevronRight, Dot, Mail, MessageSquare, Phone } from "lucide-react";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import { userAuthGen } from "@/api/onboarding";
import { TbRuler3 } from "react-icons/tb";
import { userVerification } from "@/api/onboarding";

const PhoneAuth = () => {
  const router = useRouter();
  const [isOtp, setOtp] = useState(false);
  const [verifCall, setVerifCall] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const formik = useFormik({
    initialValues: {
      phoneNum: "",
    },
    onSubmit: (values) => {
      setVerifCall(true);
      alert(JSON.stringify(otpCode, null, 2));
    },
  });
  const { isLoadingAuth, isErrorAuth, dataAuth, errorAuth } = useQuery(
    "authGenerate",
    () => userAuthGen(formik.values.phoneNum),
    { enabled: isOtp }
  );
  const { isLoadingVerf, isErrorVerf, dataVerf, errorVerf } = useQuery(
    "userVerification",
    () => userVerification(otpCode),
    { enabled: verifCall }
  );

  // Error Handling Code


  // Error Handling Code 

  

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
          {isOtp ? (
            <Stack gap="6">
              <Box>
                <Image alt="logo" src="/logowhite.png" />
              </Box>
              <FormControl mt="10%">
                <FormLabel fontSize="22px" width="400px" color="gray">
                  Please enter the code we just send to
                  <span style={{ color: "white" }}>
                    {" "}
                    (+91) {formik.values.phoneNum}
                  </span>{" "}
                  to procced
                </FormLabel>
                <HStack gap="4" mt="5" fontWeight="600" color="white">
                  <PinInput
                    id="otp"
                    name="otp"
                    type="number"
                    otp
                    focusBorderColor="white"
                    onChange={(e) => setOtpCode(e)}
                  >
                    <PinInputField
                      border="none"
                      bg="#252525"
                      width="60px"
                      height="60px"
                      rounded="2xl"
                    />
                    <PinInputField
                      bg="#252525"
                      border="none"
                      width="60px"
                      height="60px"
                      rounded="2xl"
                    />
                    <PinInputField
                      bg="#252525"
                      border="none"
                      width="60px"
                      height="60px"
                      rounded="2xl"
                    />
                    <PinInputField
                      bg="#252525"
                      border="none"
                      width="60px"
                      height="60px"
                      rounded="2xl"
                    />
                    <PinInputField
                      bg="#252525"
                      border="none"
                      width="60px"
                      height="60px"
                      rounded="2xl"
                    />
                    <PinInputField
                      bg="#252525"
                      border="none"
                      width="60px"
                      height="60px"
                      rounded="2xl"
                    />
                  </PinInput>
                </HStack>
                <HStack fontSize="18px" align="center" pt="5">
                  <Text color="white">00:30 </Text>
                  <Dot color="white" />
                  <Text display="flex" align="center" color="gray">
                    Resend OTP via :&nbsp;
                    <MessageSquare color="white" />
                    &nbsp; SMS &nbsp;
                    <Phone color="white" />
                    &nbsp;Call
                  </Text>
                </HStack>
              </FormControl>
              <Stack direction="row" spacing={2} justify="start">
                <Button
                  p="6"
                  sx={{
                    fontSize: "16px",
                    width: "250px",
                    color: "#7E7E7E !important",
                    bg: "#252525 !important",
                  }}
                  _hover={{
                    bg: "white  !important",
                    color: "#F84D43 !important",
                  }}
                  onClick={formik.handleSubmit}
                >
                  Continue
                </Button>
              </Stack>
              <Text fontSize="18px" color="gray" fontWeight="500">
                Truble logging in?
              </Text>
              <Divider mt="25%" width="250px" />
              <p style={{ color: "white", fontSize: "14px" }}>
                By continuing you agree to
                <span style={{ fontWeight: "600" }}>Terms of services</span> and
                <span style={{ fontWeight: "600" }}>Privacy Policy</span>
              </p>
            </Stack>
          ) : (
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
                  <InputLeftAddon
                    p="6"
                    height="60px"
                    bg="#252525"
                    color="white"
                    border="none"
                    fontWeight="bold"
                  >
                    +91
                  </InputLeftAddon>
                  <Input
                    id="phoneNum"
                    name="phoneNum"
                    size="lg"
                    height="60px"
                    type="tel"
                    bg="#252525"
                    color="white"
                    border="none"
                    placeholder="Enter your mobile number"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNum}
                  />
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
                    onClick={() => setOtp(true)} // form validation part
                  >
                    <ChevronRight size="30px" />
                  </Button>
                </InputGroup>
                <Text
                  py="4"
                  color="white"
                  fontWeight="500"
                  lineHeight="16.94px"
                  fontSize="16px"
                >
                  We will send you an OTP code on this number for your
                  verification
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
                  leftIcon={
                    <Image
                      alt="google image"
                      w="22px"
                      h="22px"
                      src="/google.png"
                    />
                  }
                  variant="outline"
                >
                  Sign with Google
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
                <span style={{ fontWeight: "600" }}>Terms of services</span> and
                <span style={{ fontWeight: "600" }}>Privacy Policy</span>
              </p>
            </Stack>
          )}
        </Container>
      </Box>
    </Flex>
  );
};

export default PhoneAuth;
