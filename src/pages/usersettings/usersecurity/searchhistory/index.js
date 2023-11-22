"use client";
import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SearchHistory = () => {
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
            <HStack align="center" justify="space-between">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box boxSize="40px" rounded="md">
                  <Image
                    rounded="md"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    src="/static/images/Profile.jpeg"
                    alt="Profile Image"
                  />
                </Box>
                <Box pl="4">
                  <p style={{ fontSize: "16px", color: "#171717" }}>Gourav</p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#636363",
                      display: "flex",
                    }}
                  >
                    Grand Master
                  </p>
                </Box>
              </Box>
              <X cursor="pointer" />
            </HStack>
            <Divider pt="2" />
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

SearchHistory.getLayout = (page) => (
  <UserSettingLayout>{page}</UserSettingLayout>
);

export default SearchHistory;
