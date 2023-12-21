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
      <Card width="full" height="50vh" overflow="scroll" border="1px solid #D6D7D9" rounded="xl">
        <Box display="flex" h='full' alignItems="center" justifyContent="center" bg='#E551B326'>
          <Box>
            <Textarea placeholder="Enter text here" variant="unstyled" resize="none" />
          </Box>
        </Box>
      </Card>
  );
};

export default Type5Meme;
