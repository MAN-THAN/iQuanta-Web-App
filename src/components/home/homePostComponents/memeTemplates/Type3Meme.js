// Type3Meme.js

import ImgUpload from "@/components/common/imgUpload";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Type3Meme = ({ files, imagePreviewUrls, photoUpload }) => {
  return (
    <Card width="full" height="50vh" overflow="scroll" border="1px solid #D6D7D9" rounded="xl">
      <Box display="flex" gap="2" p="0">
        <Box width="50%">
          <Center bg="#5146D626" height="240px" overflow='hidden'>
            <ImgUpload onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
          </Center>
          <Center  bg="#E5A15126" height="240px" overflow='hidden'>
            <ImgUpload  onChange={photoUpload} src={imagePreviewUrls[1]} id={0} />
          </Center>
        </Box>
        <Center width="50%">
          <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
        </Center>
      </Box>
    </Card>
  );
};

export default Type3Meme;
