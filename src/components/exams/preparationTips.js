import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import NoteCard from "../learn/noteCard";
import { featursCard } from "@/utilities/comanData";

const PreparationTips = () => {
  return (
    <Box bg='white.900' p='4' mt='1'>
      <Flex
        align="center"
        justify="space-between"
        fontSize="18px"
        fontWeight="500"
        p="4"
      >
        <Text>Tips for preparation</Text>
        <HStack>
          <Box>
            <ChevronLeft />
          </Box>
          <Box>
            <ChevronRight />
          </Box>
        </HStack>
      </Flex>
      <Box>
        <HStack pt="4" pb="3" gap="3" maxW="800px" overflowX="scroll">
          {featursCard.map((data, index) => (
            <Box key={index}>
              <NoteCard data={data} />
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default PreparationTips;
