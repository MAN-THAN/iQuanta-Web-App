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

const DetailseactivateAccount = () => {
  const router = useRouter();
  const [showPinInput, setShowPinInput] = useState(false);

  const handleNext = () => {
    setShowPinInput(true);
  };

  return (
    <UserSettingLayout>
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
                  <Input type="tel" value="" placeholder="Phone number" />
                </InputGroup>
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
                  <PinInput size="lg" otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </>
            )}
          </CardBody>
          <CardFooter>
            {!showPinInput ? (
              <Button
                onClick={handleNext}
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
                onClick={handleNext}
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
    </UserSettingLayout>
  );
};

export default DetailseactivateAccount;
