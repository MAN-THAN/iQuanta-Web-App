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
import ImgUpload from "@/components/common/imgUpload";

const Type2Meme = ({ files, imagePreviewUrls, photoUpload }) => {
  return (
    <Box>
      <Card maxW="440px" height="240px" overflow="scroll" border="1px solid ">
        <Box display="flex" gap="2" p="0" h="full">
          <Center objectFit="cover" bg="#51D3E526" width="50%">
            <ImgUpload width="210px" height="250px" onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
          </Center>
          <Center>
            <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
          </Center>
        </Box>
      </Card>
    </Box>
  );
};

export default Type2Meme;
