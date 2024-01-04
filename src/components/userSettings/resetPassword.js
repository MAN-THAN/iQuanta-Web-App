import React, { useState } from "react";
import { Button, CardFooter, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Box, Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ResetPassword = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              {" "}
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              Reset Password
            </Text>
          </HStack>
        </CardHeader>
        <CardBody alignItems="center" justifyContent="center" px="6" pt="0">
          <FormControl display="flex" flexDirection="column" gap="6" mt="4">
            <Box>
              <FormLabel>Current Password</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Box>
              <FormLabel>New Password</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box>
              <FormLabel>Repeat New Password</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </FormControl>
          <Link
            style={{
              textDecoration: "underline",
              color: "#5146D6",
              paddingTop: "1 5px",
            }}
            href="#"
          >
            Forgot Password?
          </Link>
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => router.push("/usersettings/userhelp/counselling/confirmed")}
            width="100%"
            p="5"
            size="sm"
            variant="solid"
            sx={{
              margin: "0 auto",
              backgroundColor: "black !important",
              color: "white",
            }}
          >
            Confirmed
          </Button>
        </CardFooter>
      </Card>
    </Box>
  
  );
};

export default ResetPassword;
