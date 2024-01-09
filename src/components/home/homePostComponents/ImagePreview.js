import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import VideoPlayer from "@/components/common/videoPlayer";

const ImagePreview = ({ selectedFilesBlob,selectedFiles, removeImage }) => {
// useEffect(()=>{},[sele])
  return (
    <>
     
      <Flex overflowX="scroll"
            css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
            sx={{
              "-webkit-overflow-scrolling": "touch",
              scrollBehavior: "smooth",
            }}>
        {selectedFilesBlob.map((file, index) => (
         
          <Box
            key={index}
            minW="200px"
            h="150px"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="base"
            mr="2"
            rounded='lg'
            position="relative"
            overflow='hidden'
          >
            <Box
              cursor="pointer"
              bg="gray.200"
              position="absolute"
              rounded="full"
              p='1'
              right="1"
              zIndex='9999'
              top="2"
              onClick={() => removeImage(index)}
            >
             
              <X  size="16px" />

            
            </Box>
            {console.log('filetype',selectedFiles[index].type.includes('video'))}
            {selectedFiles[index].type.includes('image')&& 
            <Image src={file} alt={`Card Image ${index + 1}`} boxSize="100%" fit="cover" />
            }
            {selectedFiles[index].type.includes('video')&& 
            <VideoPlayer videoUrl={file} alt={`Card Image ${index + 1}`} boxSize="100%" fit="cover" />
            }
            
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default ImagePreview;
