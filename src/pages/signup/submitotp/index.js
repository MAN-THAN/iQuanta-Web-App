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
import { useRouter } from "next/router";
import { ChevronRight, Dot, Mail, MessageSquare, Phone } from "lucide-react";
import { useFormik } from "formik";
import { TbRuler3 } from "react-icons/tb";
import { userVerification } from "@/api/onboarding";
import CountdownTimer from "@/components/countdownTimer/countdownTimer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUserData } from "@/store/slices/userSlice";

const SubmitOtp = () => {
  const router = useRouter();
  const { phoneNum } = router?.query;
  const [resend, setResend] = useState(false);
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: (otp) => userVerification(phoneNum, otp),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (data, variables, context) => {
      toast.success("Verification successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(data);
      dispatch(addUserData(data.data.user))
      setTimeout(
        () =>
          router.push({
            pathname: "/signup/user_info",
          }),
        1000
      );
    },
    onSettled: (data, error, variables, context) => {},
  });

  const formik = useFormik({
    initialValues: {
      otpCode: "",
    },
    validationSchema: Yup.object({
      otpCode: Yup.string()
        .matches(/^[0-9]{6}$/, "Invalid OTP")
        .required("OTP is required"),
    }),
    onSubmit: (values) => {
      mutation.mutate(values.otpCode);
    },
  });

  return (
    <>
      <ToastContainer />
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
              <FormControl mt="10%">
                <FormLabel fontSize="22px" width="400px" color="gray">
                  Please enter the code we just send to
                  <span style={{ color: "white" }}>
                    (+91) {phoneNum} &nbsp;
                  </span>
                  to procced
                </FormLabel>
                <HStack gap="4" mt="5" fontWeight="600" color="white">
                  <PinInput
                    id="otp"
                    name="otp"
                    type="number"
                    otp
                    focusBorderColor="white"
                    value={formik.values.otpCode}
                    onChange={(value) => formik.setFieldValue("otpCode", value)}
                  >
                    {[...Array(6)].map((_, index) => (
                      <PinInputField
                        key={index}
                        border="none"
                        bg="#252525"
                        width="60px"
                        height="60px"
                        rounded="2xl"
                      />
                    ))}
                  </PinInput>
                </HStack>
                <HStack fontSize="18px" align="center" pt="5">
                  {/* <Text color="white">00:30 </Text> */}
                  <CountdownTimer setResend={setResend} />
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
              {formik.touched.otpCode && formik.errors.otpCode && (
                <Text style={{ color: "red", marginTop: "8px" }}>
                  {formik.errors.otpCode}
                </Text>
              )}
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
                <span
                  onClick={() => router.push("/terms")}
                  style={{ fontWeight: "600" }}
                >
                  &nbsp;Terms of services
                </span>
                and
                <span style={{ fontWeight: "600" }}>&nbsp;Privacy Policy</span>
              </p>
            </Stack>
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default SubmitOtp;
