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
    <Box>
      <Card maxW="440px" height="238px" overflow="scroll" border="1px solid ">
        <Box>
          <Box>
            <Box display="flex" gap="2" p="0">
              <Center objectFit="cover" bg="#51D3E526" width="50%" height="130px">
                <ImgUpload width="210px" height="130px" onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
              </Center>
              <Center>
                <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
              </Center>
            </Box>
            <Box display="flex" gap="2" p="0">
              <Center objectFit="cover" bg="#E551B326" width="50%" height="130px" p="0">
                <ImgUpload width="210px" height="130px" onChange={photoUpload} src={imagePreviewUrls[1]} id={1} />
              </Center>
              <Center>
                <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
              </Center>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Type4Meme;
