import BackButton from "@/components/common/backButton";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { ChevronDown, ChevronDownIcon, Minus, Plus } from "lucide-react";
import React from "react";

const AccelareaderPage = () => {
  return (
    <>
      <Box mt="4" bg="#fff" roundedTop="2xl" p="4">
        <HStack py="4">
          <BackButton />
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Accelareader
            </Text>
            <Text fontSize="12px" color="#636363">
              Practice
            </Text>
          </Box>
        </HStack>
        <Text p="4" py="4">
          Accelareader will help you read faster by flashing words at you using what is called a Rapid Serial Visual
          Presentation. Practice speed reading and save precious time during your final exam.
        </Text>
      </Box>
      <Box mt="4" bg="#fff" p="4">
        <Text fontWeight="600" py="4">
          Preview
        </Text>
        <Box h="20vh" bg="brand.800" rounded="xl" display="flex" justifyContent="center">
          <Center>
            <Text fontSize="18px" fontWeight="600">
              Hello
            </Text>
          </Center>
        </Box>
        <HStack gap="30" py="4">
          <FormControl>
            <FormLabel>Reading topic</FormLabel>
            <Menu>
              <MenuButton border="1px solid #8D96A5" rounded="lg" p="1" bg="#fff">
                <HStack px="4">
                  <Text>Select the topic(s) </Text>
                  <ChevronDownIcon size="12px" />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </FormControl>
          <FormControl>
            <FormLabel>Speed (Words per minute)</FormLabel>
            <Box border="1px solid #8D96A5" rounded="lg" p="1" width="48%">
              <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                <Minus size="18px" />
                <Text>20</Text>
                <Plus size="18px" />
              </Box>
            </Box>
          </FormControl>
        </HStack>
        <HStack gap="30" py="4">
          <FormControl>
            <FormLabel>No. of words</FormLabel>
            <Box border="1px solid #8D96A5" rounded="lg" p="1" width="48%">
              <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                <Minus size="18px" />
                <Text>10</Text>
                <Plus size="18px" />
              </Box>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Text size</FormLabel>
            <Menu>
              <MenuButton border="1px solid #8D96A5" rounded="lg" p="1" bg="#fff">
                <HStack px="4">
                  <Text>Medium </Text>
                  <ChevronDownIcon size="12px" />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Medium</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </FormControl>
        </HStack>
        <Button
          width="100%"
          mt="16"
          sx={{
            bg: "black !important",
            color: "#fff",
            margin: "0 auto",
            fontSize: "12px",
          }}
          variant="solid"
        >
          Start
        </Button>
      </Box>
    </>
  );
};

export default AccelareaderPage;
