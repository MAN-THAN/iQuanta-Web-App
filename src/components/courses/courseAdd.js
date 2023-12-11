import { Box, Button,  Text } from "@chakra-ui/react";
import { Dot } from "lucide-react";
import React from "react";

const CoursesAdd = () => {
  return (
    <Box bg="#5160E5" p="6" rounded="2xl" color="#fff">
      <Text fontSize="24px" fontWeight="600">
        Get CAT Prep @15% off!
      </Text>
      <ul
        style={{
          display: "flex",
          gap: "4",
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
          <span>Live classes & sessions</span>
        </li>
        <li style={{ display: "flex" }}>
          <span>
            <Dot transform="scale(2)" />
          </span>
          <span>Theory, QAs and tips</span>
        </li>
        <li style={{ display: "flex" }}>
          <span>
            <Dot transform="scale(2)" />
          </span>
          <span>Current affairs, and more...</span>
        </li>
      </ul>
      <Box pt="6">
        <Button
          sx={{
            backgroundColor: "#000 !important",
            fontSize: "14px",
            color: "#fff",
          }}
          variant="solid"
          _hover={{ bg: "#fff !important ", color: "#000" }}
        >
          View Courses
        </Button>
      </Box>
    </Box>
  );
};

export default CoursesAdd;
