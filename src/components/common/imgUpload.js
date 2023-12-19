import { Avatar, Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ImgUpload = ({ onChange, src, id, width, height }) => (
  <label htmlFor={`photo-upload-${id}`} className="custom-file-upload fas">
    {src ? (
      <Box overflow="hidden" w={width} h={height} p="0">
        <Image
          width="100%"
          height="100%"
          fit="cover"
          htmlFor={`photo-upload-${id}`}
          src={src}
          alt="Uploaded"
        />
      </Box>
    ) : (
      <Stack align='center'>
        <Avatar p="3" src="/Upload.svg" alt="Icon" bg="white.900" rounded="full" />
        <Text fontSize="12px">Upload Image</Text>
      </Stack>
    )}

    <input
      id={`photo-upload-${id}`}
      className="hidden"
      type="file"
      onChange={(e) => onChange(e, id)}
      accept="image/*"
    />
  </label>
);

export default ImgUpload;
