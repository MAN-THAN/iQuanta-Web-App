import { Avatar, Box, Flex, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Paperclip, X } from "lucide-react";
import React, { useRef, useState } from "react";

const FileUploadButton = () => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((file) => ({
      name: file.name,
      file,
    }));
    setSelectedFiles(fileArray);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };


  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
        accept=".pdf, .doc, .docx"
      />
      {selectedFiles.length > 0 && (
        <div>
          <UnorderedList pr='4' >
            {selectedFiles.map((file, index) => (
              <ListItem rounded='2xl' key={index} bg="#F1F2F6" display="flex" justifyContent="space-between" alignItems='center' p='3'>
                <HStack>
                  <Paperclip />
                  <Text>{file.name}</Text>
                </HStack>
                <Box onClick={() => handleRemoveFile(index)}>
                  <X />
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </div>
      )}
      {selectedFiles.length === 0 && (
        <Flex alignItems="center" gap="2" px='10' onClick={handleButtonClick}>
          <Box >
            <Paperclip />
          </Box>
          <Text fontSize="18px" fontWeight="600">
           Select Documents
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default FileUploadButton;
