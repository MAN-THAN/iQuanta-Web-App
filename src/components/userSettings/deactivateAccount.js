import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "react-query";
import { sendOTP } from "@/api/profile/profileSettings/accountDeactivate";
import { verifyOTP } from "@/api/profile/profileSettings/accountDeactivate";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deactivateAccount } from "@/api/profile/profileSettings/accountDeactivate";
import { useSelector } from "react-redux";

const DeactivateAccount = () => {
  const router = useRouter();
  const { _id: uid } = useSelector((state) => state.userData);
  const [showPinInput, setShowPinInput] = useState(false);
  const mutation1 = useMutation({
    mutationFn: (phoneNum) => sendOTP(phoneNum),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("OTP Sent !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
      setShowPinInput(true);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const mutation2 = useMutation({
    mutationFn: (otp) => verifyOTP(otp),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      mutation3.mutate({ isAccountActive: false });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const mutation3 = useMutation({
    mutationFn: (payload) => deactivateAccount(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Account deactivated!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.push({
        pathname: "/signup",
      });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const formik1 = useFormik({
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
      mutation1.mutate({ phonomail: String(values.phoneNum) });
    },
  });
  const formik2 = useFormik({
    initialValues: {
      otpCode: "",
    },
    validationSchema: Yup.object({
      otpCode: Yup.string()
        .matches(/^[0-9]{6}$/, "Invalid OTP")
        .required("OTP is required"),
    }),
    onSubmit: (values) => {
      mutation2.mutate({ phonomail: String(formik1.values.phoneNum), otp: String(values.otpCode) });
    },
  });

  return (
    <>
      <Box>
        <Card>
          <CardHeader>
            <HStack px="4" pt="3">
              <ArrowLeft cursor="pointer" onClick={() => router.back()} />
              <Text fontSize="18px" fontWeight="600">
                Deactivate Account
              </Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Text px="4" pb="6" fontSize="16px" color="#455564">
              By continuing, you will deactivate your account. All your purchases of course and learning material will
              be removed from your account.
            </Text>
            <Text px="4" pb="6" fontSize="16px" color="#455564">
              If you change your mind later, all you need to do to re-activate your account is to simply log in with
              your current email id/mobile number.
            </Text>
            {!showPinInput ? (
              <Box p="4">
                <FormLabel fontSize="14px" fontWeight="500">
                  Enter your registered mobile number
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon>+91</InputLeftAddon>
                  <Input
                    id="phoneNum"
                    name="phoneNum"
                    type="number"
                    value={formik1.values.phoneNum}
                    placeholder="Phone number"
                    onChange={formik1.handleChange}
                  />
                </InputGroup>
                {formik1.touched.phoneNum && formik1.errors.phoneNum && (
                  <Text style={{ color: "red", marginTop: "8px" }}>{formik1.errors.phoneNum}</Text>
                )}
              </Box>
            ) : (
              <>
                <Flex px="4" justifyContent="space-between" alignItems="center">
                  <Text fontSize="14px" fontWeight="600">
                    Enter OTP
                  </Text>
                  <Text fontSize="12px" fontWeight="500" color="#336792">
                    Resend Otp
                  </Text>
                </Flex>

                <HStack p="4" align="center" justifyContent="space-between" fontWeight="600">
                  <PinInput
                    id="otp"
                    name="otp"
                    type="number"
                    value={formik2.values.otpCode}
                    onChange={(value) => formik2.setFieldValue("otpCode", value)}
                    size="lg"
                    otp
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
                {formik2.touched.otpCode && formik2.errors.otpCode && (
                  <Text style={{ color: "red", marginTop: "8px" }}>{formik2.errors.otpCode}</Text>
                )}
              </>
            )}
          </CardBody>
          <CardFooter>
            {!showPinInput ? (
              <Button
                onClick={formik1.handleSubmit}
                width="full"
                size="md"
                variant="solid"
                sx={{
                  margin: "0 auto",
                  backgroundColor: "black !important",
                  color: "white",
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={formik2.handleSubmit}
                width="full"
                size="md"
                variant="solid"
                sx={{
                  margin: "0 auto",
                  backgroundColor: "black !important",
                  color: "white",
                }}
              >
                Confirm & deactivate
              </Button>
            )}
          </CardFooter>
        </Card>
      </Box>
      <ToastContainer />
    </>
  );
};

export default DeactivateAccount;
