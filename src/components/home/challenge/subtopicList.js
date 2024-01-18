import { useQuery } from "react-query";
import { toast } from "react-toastify";
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
  MenuItem,
  UnorderedList,
  ListItem,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Image,
  Select,
  Portal,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { SearchIcon, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { useMutation } from "react-query";
import { getSubtopics } from "@/api/feed/user/challenge";

export const SubtopicList = ({ setSubtopicList, setSelectedSubtopic, subtopicList, selectedSubtopic }) => {
  const [searchSubTopic, setSearchSubTopic] = useState();

  const filteredSubTopics = useMemo(() => {
    if (!searchSubTopic) {
      return subtopicList;
    }
    return subtopicList.filter((item) => item?.title.toLowerCase().startsWith(searchSubTopic.toLowerCase()));
  }, [subtopicList, searchSubTopic]);
  return (
    <Box>
      <InputGroup size="md">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={searchSubTopic}
          onChange={(e) => setSearchSubTopic(e.target.value)}
          pl="3.0rem"
          placeholder="Search Sub-topic"
        />
      </InputGroup>
      <Box overflowY="scroll">
        {false ? (
          <div>Loading</div>
        ) : (
          <UnorderedList listStyleType="none">
            {filteredSubTopics?.map((subtopic, i) => (
              <ListItem key={i} display="flex" py="3" alignItems="center" justifyContent="space-between">
                <Checkbox
                  gap="4"
                  alignItems="center"
                  isChecked={selectedSubtopic.includes(subtopic)}
                  onChange={() =>
                    setSelectedSubtopic((prev) => {
                      const isIncluded = selectedSubtopic.includes(subtopic);
                      if (isIncluded) {
                        return selectedSubtopic.filter((i) => i?._id !== subtopic._id);
                      } else {
                        return [...prev, subtopic];
                      }
                    })
                  }
                >
                  <Box>
                    <Text>{subtopic?.title}</Text>
                  </Box>
                </Checkbox>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </Box>
    </Box>
  );
};
