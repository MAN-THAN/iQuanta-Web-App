"use client";
import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, Dot, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginActivity = () => {
  const router = useRouter();
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
              My Login Activity
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text>Where You're Logged In</Text>
            <HStack align="center" justify="space-between">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <MapPin />
                </Box>
                <Box pl="4">
                  <p style={{ fontSize: "18px", color: "#171717" }}>Mumbai</p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#24B670",
                      display: "flex",
                    }}
                  >
                    Active Now <Dot />
                    <span style={{ color: "#455564" }}>iPhone6s</span>
                  </p>
                </Box>
              </Box>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

LoginActivity.getLayout = (page) => <UserSettingLayout>{page}</UserSettingLayout>


export default LoginActivity;
