import { Image } from "@chakra-ui/image";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import React from "react";

const Pagination = () => {
  return (
    <section className="mt-5 flex gap-2 text-xs font-semibold">
      <HStack
        padding="0"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        border="1px solid #757575"
        rounded="md"
      >
        <Plus />
        <Text fontSize="auto">Study Room</Text>
      </HStack>
      <Box
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid #757575"
        rounded="md"
        w="50%"

      >
        <Text fontSize="auto"> Find Study Partner</Text>
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
        <Plus fontSize='10px' />
        <Text fontSize="auto">10</Text>
      </Box>
    </section>
  );
};

export default Pagination;
