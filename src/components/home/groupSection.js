import { randomColors } from "@/utilities/commonFunctions";
import { Box, Card, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { ChevronRight, Star } from "lucide-react";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const GroupSection = () => {
    const cardColors = ["bg-teal-600", "bg-blue-500", "bg-purple-500"];
  return (
    <>
      <Flex align="center" justify="space-between" pt='4'>
        <HStack>
          <Heading fontSize="18px" fontWeight="500">
            Groups
          </Heading>
        </HStack>
        <HStack>
          <Text fontWeight="500">View all</Text>
          <ChevronRight />
        </HStack>
      </Flex>
      <Box display="flex" justifyContent="space-between">
        {[...Array(3)].map((data, i) => (
          <div key={i} className="flex gap-4 overflow-scroll">
            <Box bg={randomColors(["#336792", "#E56951", "#339287"])} position="relative" rounded="xl" w="220px" h="180px" mt="4">
              <Box color='#FCB461'  position="absolute" left={3} top={4} fontSize='3xl' >
                <BsStarFill />
              </Box>
              <div className="absolute  right-5 top-3 text-2xl text-white">
                <ChevronRight />
              </div>
              <div className="absolute bottom-10 text-white text-2xl px-3  ">
                <p>
                  CAT-2021
                  <br />
                </p>
                <p className="text-xs">Premium</p>
              </div>
            </Box>
          </div>
        ))}
      </Box>
    </>
  );
};

export default GroupSection;
