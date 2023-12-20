import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CreateMeme from "./createMeme";

const MemeCard = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
    
      <Box>{selectedType && <CreateMeme type={selectedType} />}</Box>
      <Heading as="h3" fontSize="16px" px="4" py="3">
        Templates you can choose from
      </Heading>
      <Box
        px="4"
        display="flex"
        overflowX="hidden"
        overflowY="scroll"
        css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
        sx={{
          "-webkit-overflow-scrolling": "touch",
          scrollBehavior: "smooth",
        }}
      >
        <Flex gap="6" >
          <Box
            border={`2px solid ${selectedType === "Type 1" ? "red" : "#16222C"}`}
            rounded="lg"
            textAlign="center"
            width="150px"
            onClick={() => handleButtonClick("Type 1")}
          >
            <Text color="#16222C">Text </Text>
            <Box bg="#5146D626" objectFit="cover" width="full" height="80px"></Box>
          </Box>

          {/* type 2 */}
          <Box
            border={`2px solid ${selectedType === "Type 2" ? "red" : "#16222C"}`}
            display="flex"
            alignItems="center"
            rounded="lg"
            textAlign="center"
            width="150px"
            onClick={() => handleButtonClick("Type 2")}
          >
            <Box bg="#51D3E526" objectFit="cover" width="full" height="full"></Box>
            <Text color="#16222C" width="full">
              Text{" "}
            </Text>
          </Box>
          {/* type 3 */}
          <Box
            border={`2px solid ${selectedType === "Type 3" ? "red" : "#16222C"}`}
            display="flex"
            alignItems="center"
            rounded="lg"
            textAlign="center"
            width="150px"
            onClick={() => handleButtonClick("Type 3")}
          >
            <Box width="full" height="full">
              <Box bg="#5146D626" objectFit="cover" width="full" height="50%"></Box>
              <Box bg="#E5A15126" objectFit="cover" width="full" height="50%"></Box>
            </Box>
            <Text color="#16222C" width="full">
              Text{" "}
            </Text>
          </Box>
          {/* type 4 */}
          <Box
            border={`2px solid ${selectedType === "Type 4" ? "red" : "#16222C"}`}
            display="flex"
            alignItems="center"
            rounded="lg"
            textAlign="center"
            width="150px"
            onClick={() => handleButtonClick("Type 4")}
          >
            <Box width="full" height="full">
              <Box bg="#51D3E526" objectFit="cover" width="full" height="50%"></Box>
              <Box bg="#E551B326" objectFit="cover" width="full" height="50%"></Box>
            </Box>
            <Box
              width="full"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="space-evenly"
              height="full"
              textAlign="center"
            >
              <Text color="#16222C" width="full" textAlign="center">
                Text
              </Text>
              <Text color="#16222C" width="full" textAlign="center">
                Text
              </Text>
            </Box>
          </Box>
          {/* type 5 */}
          <Box
            border={`2px solid ${selectedType === "Type 5" ? "red" : "#16222C"}`}
            rounded="lg"
            textAlign="center"
            width="150px"
          >
            <Box
              bg="#E551B326"
              objectFit="cover"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="full"
              height="full"
              onClick={() => handleButtonClick("Type 5")}
            >
              <Text color="#16222C">Text </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MemeCard;
