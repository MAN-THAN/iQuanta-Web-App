import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Modal } from "antd";
import { ArrowLeft, ChevronRight, SearchIcon } from "lucide-react";
import React, { useState } from "react";

const PastPapersExamList = ({ isOpen, onClose }) => {
  const [selectedExamIndex, setSelectedExamIndex] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleClick = () => {
    setSelectedExamIndex(true);
    // Assuming you have a function to fetch topics for the selected exam, update selectedTopics accordingly.
    // For demonstration purposes, I'm using a dummy array.
    setSelectedTopics([`Topic 1`, `Topic 2`, `Topic 3`]);
  };

  return (
    <>
      <Modal
        width="560px"
        title={
          <HStack alignItems="center">
            <Box>
              <ArrowLeft />
            </Box>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>Select the exam</span>
          </HStack>
        }
        centered
        open={isOpen}
        onOk={() => onClose(false)}
        onCancel={() => onClose(false)}
        closable={false}
        footer={null}
      >
        <Stack>
          <InputGroup size="md">
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input pl="3.0rem" placeholder="Search" />
          </InputGroup>
          {!selectedExamIndex ? (
            <Box
              mt="4"
              sx={{
                padding: "0 !important",
              }}
            >
              <UnorderedList listStyleType="none" spacing="5">
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    <ListItem
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      cursor="pointer"
                      onClick={() => handleClick()}
                      borderRadius="md"
                    >
                      <HStack alignItems="center">
                        <Image boxSize="40px" alt="exam-img" src="/exam.png" />
                        <Box>
                          <Text fontWeight="600">GMAT</Text>
                          <Text fontSize="12px" color="black.600">
                            20k students attempted
                          </Text>
                        </Box>
                      </HStack>
                      <ChevronRight />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </UnorderedList>
            </Box>
          ) : (
            <Box mt="4" maxH="40vh" overflow={"scroll"}>
              <UnorderedList>
                {[...Array(6)].map(() => (
                  <ListItem cursor={"pointer"} display="flex" py="3" alignItems="center" justifyContent="space-between">
                    <Checkbox gap="4" alignItems="center">
                      <Box>
                        <Text>Reasoning</Text>
                        <Text fontSize="12px" color="#636363">
                          Topic
                        </Text>
                      </Box>
                    </Checkbox>
                    <ChevronRight />
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          )}
        </Stack>
        <Button
          width="100%"
          size="md"
          bg="black.900"
          sx={{
            color: "#fff",
            margin: "0 auto",
            fontSize: "12px",
          }}
          variant="solid"
        >
          Next
        </Button>
      </Modal>
    </>
  );
};

export default PastPapersExamList;
