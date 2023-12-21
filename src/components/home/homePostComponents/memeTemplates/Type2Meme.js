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
    
      <Card width='full' height='50vh' overflow="scroll" border="1px solid #D6D7D9" rounded='xl'>
        <Box display="flex" gap="2" p="0" h="full">
          <Center objectFit="cover" bg="#51D3E526" width="60%">
            <ImgUpload width="full" height="470x"  onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
          </Center>
          <Center>
            <Textarea placeholder="Enter text here" noOfLines="1" variant="unstyled" resize="none" />
          </Center>
        </Box>
      </Card>
   
  );
};

export default Type2Meme;
