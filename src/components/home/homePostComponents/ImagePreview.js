import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { X } from "lucide-react";
import React from "react";

const ImagePreview = ({ selectedFiles, removeImage }) => {
  return (
    <>
      <Flex>
        {selectedFiles.map((file, index) => (
          <Box
            key={index}
            minW="200px"
            maxW="400px"
            h="150px"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            overflow="scroll"
            boxShadow="base"
            mr="2"
            position="relative"
          >
            <Box
              cursor="pointer"
              bg="gray.200"
              position="absolute"
              rounded="full"
              right="1"
              top="2"
              onClick={() => removeImage(index)}
            >
              <X size="16px" />
            </Box>
            <Image src={file} alt={`Card Image ${index + 1}`} boxSize="100%" objectFit="cover" />
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default ImagePreview;
