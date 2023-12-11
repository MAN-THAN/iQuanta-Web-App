import { Box, Flex, HStack, Image, Tag, Text , Switch } from "@chakra-ui/react";
import { MoreVertical } from "lucide-react";
import React from "react";

const ClassToggle = () => {

  return (
    <Box sx={{ borderRadius: "10px" }} bg="#ffffff" px="1rem" py="1rem">
      <HStack align="center" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box boxSize="30px">
            <Image
              objectFit="cover"
              width="100%"
              height="100%"
              className="rounded-md"
              src="/static/images/Profile.jpeg"
              alt="Profile Image"
            />
          </Box>
          <Box ml="4">
            <p
              style={{
                fontSize: "12px",
                color: "#171717",
                fontWeight: "600",
              }}
            >
              Hardik Beniwal
            </p>
            <p style={{ fontSize: "10px", color: "#636363" }}>2h ago</p>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Tag
            bg="#5146D6"
            color="#fff"
            fontSize="10px"
            style={{ borderRadius: "6px" }}
          >
            Concept 2
          </Tag>
          <MoreVertical size="18px" />
        </Box>
      </HStack>
      <Flex alignItems="center" pt="5" justifyContent="space-between">
        <Text fontSize="13px" w='200px'>
          There are two writing tasks you'll have to co...
        </Text>
        <Switch size="md" />
      </Flex>
    </Box>
  );
};

export default ClassToggle;
