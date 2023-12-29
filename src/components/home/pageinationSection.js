import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import React from "react";

const Pagination = () => {
  return (
    <Box overflowY="hidden" overflow="scroll">
      <Box className="mt-5 flex gap-2 text-xs font-semibold" width="78vh">
        <Box
          padding="0"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid #757575"
          rounded="md"
          w="50%"
        >
          <Plus />
          <Text fontSize="sm">Study Room</Text>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid #757575"
          rounded="md"
          w="50%"
        >
          <Text fontSize="sm"> Find Study Partner</Text>
        </Box>

        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man3.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man1.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man2.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man3.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man1.jpg" />
        </div>
        <Box
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid #757575"
          rounded="md"
          w="30%"
        >
          <Plus />
          <Text fontSize="sm">10</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Pagination;
