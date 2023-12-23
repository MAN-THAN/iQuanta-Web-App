import { Box, Card, CardHeader, Textarea } from "@chakra-ui/react";
import React from "react";
import ImgUpload from "@/components/common/imgUpload";

const Type1Meme = ({ files, imagePreviewUrls, photoUpload }) => {
  return (
    <Card width="full" height="50vh" overflow="scroll" border="1px solid #D6D7D9" rounded="xl">
      <CardHeader pt="1" height="100px">
        <Textarea placeholder="Enter text here" variant="unstyled" resize="none" />
      </CardHeader>
      <Box display="flex" alignItems="center" justifyContent="center" bg="#5146D626" h="full" overflow="hidden">
        <ImgUpload onChange={photoUpload} src={imagePreviewUrls[0]} id={0} />
      </Box>
    </Card>
  );
};

export default Type1Meme;
