import { useQuery, useMutation } from "react-query";
import { getAllTopics } from "@/api/feed/user/challenge";
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
  Input
} from "@chakra-ui/react";
import { SearchIcon, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { getSubtopics } from "@/api/feed/user/challenge";

export const TopicList = ({
  topicList,
  setTopicList,
  selectedTopic,
  setSelectedTopic,
  setShowSubTopicList,
  setShowTopicList,
  setSubtopicList,
  setLoading
}) => {
  const [searchTopic, setSearchTopic] = useState();
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getTopicsForChallenge", "650445c6fc904d452998918c"],
    queryFn: () => getAllTopics("650445c6fc904d452998918c"),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setTopicList(res.data.data.topics),
  });
  const filteredTopics = useMemo(() => {
    if (!searchTopic) {
      return topicList;
    }
    return topicList.filter((item) => item?.title.toLowerCase().startsWith(searchTopic.toLowerCase()));
  }, [topicList, searchTopic]);

  const mutation = useMutation({
    mutationFn: (topicId) => getSubtopics(topicId),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      console.log(res);
      setLoading(false);
      setSubtopicList(res?.data?.data?.subTopic);
    },
    onSettled: (data, error, variables, context) => {},
  });
  const showSubTopicLists = (topicId) => {
    // setSelectedTopic(topic);
    setLoading(true);
    mutation.mutate(topicId);
    setShowSubTopicList(true);
    setShowTopicList(false);
  };

  return (
    <Box>
      <InputGroup size="md" value>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={searchTopic}
          onChange={(e) => setSearchTopic(e.target.value)}
          pl="3.0rem"
          placeholder="Search Topic"
          name="searchTopic"
        />
      </InputGroup>
      <Box overflowY="scroll">
        <UnorderedList listStyleType="none">
          {filteredTopics?.map((item, ind) => (
            <ListItem
              cursor={"pointer"}
              key={ind}
              display="flex"
              py="3"
              alignItems="center"
              justifyContent="space-between"
            >
              <Checkbox
                onChange={() => {
                  setSelectedTopic((prev) => {
                    const isTopicSelected = prev.includes(item);
                    if (isTopicSelected) {
                      // const filteredSubtopic = selectedSubtopic.filter((i) => !subtopicList.includes(i));
                      // setSelectedSubtopic(filteredSubtopic);
                      return prev.filter((i) => i?._id !== item?._id);
                    } else {
                      showSubTopicLists(item?._id);
                      return [...prev, item];
                    }
                  });
                }}
                isChecked={selectedTopic.includes(item)}
                gap="4"
                alignItems="center"
              >
                <Box>
                  <Text>{item?.title}</Text>
                  <Text fontSize="12px" color="#636363">
                    {item?.subtopicCount} Sub Topic
                  </Text>
                </Box>
              </Checkbox>
              <ChevronRight />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};
