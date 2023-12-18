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

const ParticipantsModal = () => {
  return (
    <>
      <Box>
        <Flex alignItems="center" gap="3" pb="6">
          <X />
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
        <UnorderedList listStyleType="none">
          <ListItem display="flex" justifyContent="space-between">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
             <Box width='100px'>
             <Image boxSize="2.5rem" fit='cover' borderRadius="md" src="/men2.jpg" alt="Fluffybuns the destroyer" mr="12px" />
             </Box>
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
            <Checkbox />
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default ParticipantsModal;
