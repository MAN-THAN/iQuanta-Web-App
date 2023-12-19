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

const Type1Meme = ({ files, imagePreviewUrls, photoUpload }) => {
  return (
    <Box>
      <Card maxW="440px" height="240px" overflow="scroll" border="1px solid ">
        <CardHeader pt='1' height="50px">
          <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
        </CardHeader>
       
       <Box bg="#5146D626" h="full">
          <Center>
            <ImgUpload width="420px" height="200px" onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
          </Center>
        </Box>
     
      </Card>
    </Box>
  );
};

export default Type1Meme;
