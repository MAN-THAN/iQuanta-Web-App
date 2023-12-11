"use client";
import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Confirmed = () => {
  const router = useRouter();

  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              Confirmed
            </Text>
          </HStack>
        </CardHeader>
        <CardBody px="6" py="6rem">
          <Stack textAlign="center" align="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              rounded="lg"
              width="150px"
              height="150px"
              bg="#F1F2F6"
            >
              <Image alt="icon image" src="/Handshake.png" />
            </Box>
            <Text fontSize="16px" fontWeight="600">
              Your booking was confimed!
            </Text>
            <Text fontSize="14px">
              We’ll get in touch with you within 24 hours.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => router.push("/usersettings/userhelp")}
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
            Go Back
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

Confirmed.getLayout = (page) => <UserSettingLayout>{page}</UserSettingLayout>


export default Confirmed;
