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

const Type4Meme = ({ files, imagePreviewUrls, photoUpload }) => {
  return (
    <Card width="full" height="50vh" overflow="scroll" border="1px solid #D6D7D9" rounded="xl">
      <Box>
        <Box display="flex" gap="2" p="0">
          <Center objectFit="cover" bg="#5146D626" height="240px" width='50%'>
            <ImgUpload width="210px" height="130px" onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
          </Center>
          <Center>
            <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
          </Center>
        </Box>
        <Box display="flex" gap="2" p="0">
          <Center objectFit="cover" bg="#E5A15126" height="240px" width='50%'>
            <ImgUpload width="210px" height="130px" onChange={photoUpload} src={imagePreviewUrls[1]} id={1} />
          </Center>
          <Center>
            <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
          </Center>
        </Box>
      </Box>
    </Card>
  );
};

export default Type4Meme;
