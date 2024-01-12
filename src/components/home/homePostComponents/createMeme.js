import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "@/components/common/imgUpload";
import Type2Meme from "./memeTemplates/Type2Meme";
import Type3Meme from "./memeTemplates/Type3Meme";
import Type1Meme from "./memeTemplates/Type1Meme";
import { useEffect } from "react";
import Type4Meme from "./memeTemplates/Type4Meme";
import Type5Meme from "./memeTemplates/Type5Meme";

const CreateMeme = ({ type }) => {
  const [files, setFiles] = useState([null, null]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  console.log(files, "files");
  console.log(imagePreviewUrls, "imagePreviewuR")
  const photoUpload = (e, id) => {
    e.preventDefault();
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedFiles = [...files];
        updatedFiles[id] = uploadedFile;
        const updatedUrls = [...imagePreviewUrls];
        updatedUrls[id] = reader.result;

        setFiles(updatedFiles);
        setImagePreviewUrls(updatedUrls);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };
  const resetState = () => {
    setFiles([null, null]);
    setImagePreviewUrls([]);
  };

  useEffect(() => {
    resetState(); // Call resetState when the component mounts to clear the state
  }, [type]);

  const renderMemeContent = () => {
    switch (type) {
      case "Type 1":
        return <Type1Meme files={files} imagePreviewUrls={imagePreviewUrls} photoUpload={photoUpload} />;
      case "Type 2":
        return <Type2Meme files={files} imagePreviewUrls={imagePreviewUrls} photoUpload={photoUpload} />;
      case "Type 3":
        return <Type3Meme files={files} imagePreviewUrls={imagePreviewUrls} photoUpload={photoUpload} />;
      case "Type 4":
        return <Type4Meme files={files} imagePreviewUrls={imagePreviewUrls} photoUpload={photoUpload} />;
      case "Type 5":
        return <Type5Meme files={files} imagePreviewUrls={imagePreviewUrls} photoUpload={photoUpload} />;
      default:
        return null;
    }
  };

  return (<div className="p-4" >{renderMemeContent()}</div>);
};

export default CreateMeme;
