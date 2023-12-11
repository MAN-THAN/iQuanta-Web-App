import React, { useState } from "react";
import { Box, Button, ButtonGroup, Flex, HStack, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ColorSelector from "../common/colorSelector";
import NoteCard from "./noteCard";
import { featursCard } from "@/utilities/comanData";

function MyNotes() {
  const [visibleCards, setVisibleCards] = useState(0);

  const handleNextClick = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards < featursCard.length - 1
        ? prevVisibleCards + 1
        : prevVisibleCards
    );
  };

  const handlePrevClick = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards > 0 ? prevVisibleCards - 1 : 0
    );
  };

  return (
    <Box mt="4" bg="#fff" roundedTop="2xl" p="4">
      <Flex align="center" justifyContent="space-between">
        <Text fontSize="22px">My notes</Text>
        <HStack align="center">
          <Box>
            <ColorSelector />
          </Box>
          <ButtonGroup>
            <Box colorScheme="blue" variant="solid" onClick={handlePrevClick}>
              <ChevronLeft />
            </Box>
            <Box colorScheme="blue" variant="solid" onClick={handleNextClick}>
              <ChevronRight />
            </Box>
          </ButtonGroup>
        </HStack>
      </Flex>
      <Box
        overflowX="auto"
        css={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" }}
        sx={{
          "-webkit-overflow-scrolling": "touch",
          scrollBehavior: "smooth",
        }}
      >
        <HStack pt="6" pb="3" gap="3" maxW="800px" overflowX="scroll">
          {featursCard
            .slice(visibleCards, visibleCards + 3)
            .map((data, index) => (
              <Box key={index}>
                <NoteCard data={data} />
              </Box>
            ))}
        </HStack>
      </Box>
    </Box>
  );
}

export default MyNotes;
