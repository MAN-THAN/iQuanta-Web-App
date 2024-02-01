import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import UpcomingTestCard from "./upcomingTestCard";

const UpcomingTestList = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <Box mt="4" bg="#fff" p="4">
      <Text fontSize="22px"> Upcoming Tests</Text>
      <Box>
        <HStack pt="6" pb="3" gap="3" maxW="800px" overflowX="scroll">
          {[...Array(5)].map((data, index) => (
            <Box key={index} >
             <UpcomingTestCard/>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default UpcomingTestList;
