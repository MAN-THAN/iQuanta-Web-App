import React, { useState, useMemo } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Stack,
  HStack,
  Box,
  Menu,
  MenuButton,
  Text,
  MenuList,
  Textarea,
  Image,
  Select,
  Portal,
} from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
export const BasicModal = ({
  setShowTopicList,
  selectedTopic,
  setTotalQuestions,
  setTimePerQuestion,
  setDescription,
  setDifficulty,
  totalQuestions,
  timePerQuestion,
  difficulty,
  description
}) => {
  return (
    <Box>
      <Stack>
        <HStack align="center" justifyContent="space-between"></HStack>
        <FormControl>
          <FormLabel>You want to challenge in</FormLabel>
          <Menu isLazy>
            <MenuButton border="1px solid #8D96A5" rounded="lg" p="1" onClick={() => setShowTopicList(true)}>
              <Box display="flex" alignItems="center" px="2" justifyContent="space-between">
                {/* <Text fontSize="14px">Select the topic(s)</Text>
                  <ChevronDown size="14px" /> */}
                <Menu>
                  <MenuButton>
                    {selectedTopic?.length > 0 ? selectedTopic[0].title + "..." : "Select the topic(s)"}
                  </MenuButton>
                  <Portal>
                    <MenuList></MenuList>
                  </Portal>
                </Menu>
              </Box>
            </MenuButton>
          </Menu>
        </FormControl>
        <HStack gap="30" py="4">
          <FormControl>
            <FormLabel>Questions</FormLabel>
            <Box border="1px solid #8D96A5" rounded="lg" p="1">
              <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                <Minus
                  onClick={() => {
                    if (totalQuestions > 1) {
                      setTotalQuestions((totalQuestions) => totalQuestions - 1);
                    }
                  }}
                  size="18px"
                />
                <Text>{totalQuestions}</Text>
                <Plus onClick={() => setTotalQuestions((totalQuestions) => totalQuestions + 1)} size="18px" />
              </Box>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Time per question</FormLabel>
            <Box border="1px solid #8D96A5" rounded="lg" p="1">
              <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                <Minus
                  onClick={() => {
                    if (timePerQuestion > 10) {
                      setTimePerQuestion((timePerQuestion) => timePerQuestion - 10);
                    }
                  }}
                  size="18px"
                />
                <Text>{timePerQuestion} sec</Text>
                <Plus
                  onClick={() => {
                    if (timePerQuestion < 1000) {
                      setTimePerQuestion((timePerQuestion) => timePerQuestion + 10);
                    }
                  }}
                  size="18px"
                />
              </Box>
            </Box>
          </FormControl>
        </HStack>
        <FormControl py="4">
          <FormLabel>Difficulty</FormLabel>
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            placeholder="Select difficulty"
            maxWidth={"40%"}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>
      </Stack>
      <Stack borderTop="2px solid" mt="4" py="4">
        <Text fontWeight="600" color="#000">
          Say something to your opponents
        </Text>
        <Textarea
          name="textToOpponent"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          border="1px solid lightgrey"
          // onFocus={}
        ></Textarea>
      </Stack>
    </Box>
  );
};
