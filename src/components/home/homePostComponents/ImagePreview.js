import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { X } from "lucide-react";
import React from "react";
import VideoPlayer from "@/components/common/videoPlayer";

const ImagePreview = ({ selectedFiles, removeImage }) => {

  return (
    <>
     
      <Flex overflowX="scroll"
            css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
            sx={{
              "-webkit-overflow-scrolling": "touch",
              scrollBehavior: "smooth",
            }}>
        {selectedFiles.map((file, index) => (
         
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
              top="2"
              onClick={() => removeImage(index)}
            >
              <X size="16px" />
            </Box>
            {/* {console.log("selectedFiles:",file['.type'])}
            {file['.type'] == (".png"||".jpg"||".jpeg")&& */}
            <Image src={file} alt={`Card Image ${index + 1}`} boxSize="100%" fit="cover" />
            
            {/* }{file['.type']==(".mp4"||".mpg"||".mpeg"||".mkv"||".wmv"||".mov"||".flv")&&<VideoPlayer videoUrl={file}/>} */}
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default ImagePreview;
