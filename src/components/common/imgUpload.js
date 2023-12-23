import { Avatar, Box, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";

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
        <Box overflow="hidden" w={width} h={height} p="0">
          {/* <Image width="100%" height="100%" fit="cover" htmlFor={`photo-upload-${id}`} src={src} alt="Uploaded" /> */}
          <AvatarEditor
            image={src}
            width={350}
            height={250}
            border={0}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={scale}
            rotate={0}
            onScaleChange={handleScale}
          />
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
