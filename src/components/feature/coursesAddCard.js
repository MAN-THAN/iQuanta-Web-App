import { Card } from "@chakra-ui/card";
import { Button, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

const CoursesAddCard = () => {
  return (
    <>
      <Card
        maxW="sm"
        bg="#5146D6"
        h="230px"
        color="white.900"
        rounded="xl"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgfilter="grayscale(100%)"
        bgPosition="center"
        position="relative"
        padding="5"
        overflow="hidden"
      >
        <div
          style={{
            height: "220px",
            width: "220px",
            position: "absolute",
            top: "-14vh",
            right: "-8vh",
            borderRadius: "100%",
            background: "#76CBC1",
          }}
          class="circle"
        ></div>

        <Text fontSize="lg" fontWeight="500">
          Get access to premium <br /> content & ace your exams.
        </Text>
        <Text fontSize="sm" pt="4" pb="5" width="300px" color="#FFFFFFBF">
          Join our online courses, gain access to our exclusive community, learning and practice material.
        </Text>
        <Button
          margin="auto 0"
          variant="solid"
          color="#fff"
          backgroundColor="#000"
          _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
        >
          View Courses
        </Button>
      </Card>
    </>
  );
};

export default CoursesAddCard;
