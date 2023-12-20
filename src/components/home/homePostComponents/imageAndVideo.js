import React from "react";
import ImagePreview from "./ImagePreview";

const ImageAndVideo = ({ selectedFiles, handleRemoveImage }) => {
  return (
    <>
      <ImagePreview selectedFiles={selectedFiles} removeImage={handleRemoveImage} />
    </>
  );
};

export default ImageAndVideo;
