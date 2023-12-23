import { Avatar, Box, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
// import AvatarEditor from "react-avatar-editor";

const ImgUpload = ({ onChange, src, id, width, height }) => {
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [scale, setScale] = useState(1);

  const handleImageChange = (e) => {
    const file = e.target.files;

    if (file) {
      setIsImageSelected(true);
      onChange(e, id);
    }
  };

  const handleScale = (newScale) => {
    setScale(newScale);
  };

  return (
    <label htmlFor={`photo-upload-${id}`} className="custom-file-upload fas">
      {src ? (
        <Box p="0" fit="cover">
          <TransformWrapper>
            <TransformComponent>
              <Image w="100%" h="100%" htmlFor={`photo-upload-${id}`} src={src} alt="Uploaded" />
            </TransformComponent>
          </TransformWrapper>
        </Box>
      ) : (
        <Stack align="center">
          <Avatar p="3" src="/Upload.svg" alt="Icon" bg="white.900" rounded="full" />
          <Text fontSize="12px">Upload Image</Text>
        </Stack>
      )}

      <input
        id={`photo-upload-${id}`}
        className="hidden"
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        disabled={isImageSelected}
      />
    </label>
  );
};

export default ImgUpload;
