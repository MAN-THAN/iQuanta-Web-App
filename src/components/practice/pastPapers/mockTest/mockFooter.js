import { Button, Flex, HStack } from "@chakra-ui/react";
import React from "react";

const MockFooter = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <HStack pt="4">
        <Button
          size="md"
          rounded="2xl"
          bg="brand.900"
          sx={{
            color: "#fff",
            fontSize: "12px",
          }}
          variant="solid"
        >
          Mark for Review & Next
        </Button>
        <Button
          size="md"
          rounded="2xl"
          bg="brand.900"
          sx={{
            color: "#fff",
            fontSize: "12px",
          }}
          variant="solid"
        >
          Mark for Review & Next
        </Button>
      </HStack>
      <Button
        size="md"
        rounded="2xl"
        bg="#FFA53B"
        sx={{
          color: "#fff",
          fontSize: "12px",
        }}
        variant="solid"
      >
        Mark for Review & Next
      </Button>
    </Flex>
  );
};

export default MockFooter;
