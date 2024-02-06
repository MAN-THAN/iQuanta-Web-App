import { Box, Button, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const MockTestFeatured = () => {
  const router = useRouter();
  return (
    <Box bg="#5160E5" p="4" rounded="2xl" color="#fff">
      <Tag my="3">Featured</Tag>
      <Text fontSize="24px" fontWeight="600">
        GRE 2021 Mock Test Series
      </Text>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "16px",
          paddingTop: "10px",
          fontWeight: "500",
          listStyle: "none",
        }}
      >
        <li style={{ display: "flex" }}>
          <span>
            <Dot transform="scale(2)" />
          </span>
          <span>15 GRE pattern full mocks</span>
        </li>
        <li style={{ display: "flex" }}>
          <span>
            <Dot transform="scale(2)" />
          </span>
          <span>Video solution, performance analysis & more...</span>
        </li>
      </ul>
      <Box pt="6">
        <Flex
          align="center"
          justify="space-between"
          gap="4"
          bg="#000"
          rounded="xl"
          padding="3"
          cursor="pointer"
          onClick={() => router.push("/courses/0")}
        >
          <Box display="flex">
            <Text fontSize="16px" color="#fff">
              ₹2,700
            </Text>
            <HStack fontSize="10px" textAlign="start">
              <strike className="text-gray-500 text-sm">₹3000</strike>
              <span className="text-green-500 text-sm">10% Off</span>
            </HStack>
          </Box>

          <HStack>
            <Text fontSize="18px">2 Month</Text>
            <Text fontSize="12px" color="#8D96A5">
              Starts immediately
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default MockTestFeatured;
