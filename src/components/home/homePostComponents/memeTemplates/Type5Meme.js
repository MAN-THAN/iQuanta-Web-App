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

const Type5Meme = ({ files, imagePreviewUrls, photoUpload }) => {
  return (
    <Box>
      <Card maxW="440px" height="238px" overflow="scroll" border="1px solid ">
        <Box display="flex" h='full' alignItems="center" justifyContent="center" bg='#E5A15126'>
          <Box>
            <Textarea placeholder="Enter text here" variant="unstyled" resize="none" />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Type5Meme;
