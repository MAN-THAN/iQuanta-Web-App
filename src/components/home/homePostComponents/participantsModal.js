import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { SearchIcon, X } from "lucide-react";
import React from "react";

const ParticipantsModal = ({ closeParticipants }) => {
  return (
    <>
      <Box>
        <Flex alignItems="center" gap="3" pb="6">
          <Box onClick={closeParticipants}>
            <X />
          </Box>
          <Text fontSize="18px" fontWeight="600">
            Add Participants
          </Text>
        </Flex>
        <InputGroup size="md">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input pl="3.0rem" placeholder="Search" />
        </InputGroup>
        <UnorderedList listStyleType="none" overflowY="scroll">
          {[...Array(40)].map((d, i) => (
            <ListItem key={i} display="flex" alignItems="center" justifyContent="space-between" pr="4" pt="5">
              <Box display="flex" alignItems="center">
                <Image
                  boxSize="2.5rem"
                  fit="cover"
                  borderRadius="md"
                  src="/man1.jpg"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <Box>
                  <p style={{ fontSize: "16px", color: "#171717" }}>Anshul Atri</p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#636363",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Master Level
                  </p>
                </Box>
              </Box>
              <Checkbox size="lg" colorScheme="green" />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
};

export default ParticipantsModal;
