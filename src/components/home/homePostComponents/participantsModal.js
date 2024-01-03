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
import { useQuery } from "react-query";
import { getDebateParticipants } from "@/api/feed/userPost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const ParticipantsModal = ({ closeParticipants, participants, setParticipants }) => {
  const { _id: uid } = useSelector((state) => state.userData);
  const [state, setState] = useState();
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getDebateParticipants", uid],
    queryFn: () => getDebateParticipants(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => {
      console.log(res);
      setState(res?.data?.data?.friendList);
    },
  });
  const handleParticipants = (obj) => {
    console.log(obj);
    // Check if the participant with the same _id exists
    const participantExists = participants.some(item => item._id === obj._id);
  
    if (participantExists) {
      const filterParticipants = participants.filter(item => item._id !== obj._id);
      console.log(filterParticipants);
      setParticipants(filterParticipants);
    } else {
      console.log("in else");
      setParticipants((prev) => [...prev, obj])
    }
  };
  const checkParticipants = (obj) => {
    const participantExists = participants.some(item => item._id === obj._id);
    return participantExists
  };
  console.log(participants)
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
          {state?.length === 0 ? (
            <Text marginTop={4} textAlign={"center"}>
              No Friends!
            </Text>
          ) : (
            state?.map((item, ind) => (
              <ListItem key={ind} display="flex" alignItems="center" justifyContent="space-between" pr="4" pt="5">
                <Box display="flex" alignItems="center">
                  <Image
                    boxSize="2.5rem"
                    fit="cover"
                    borderRadius="md"
                    src={item?.profilePic}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <Box>
                    <p style={{ fontSize: "16px", color: "#171717" }}>{item?.name}</p>
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
                <Checkbox size="lg" colorScheme="green" isChecked={checkParticipants(item)} onChange={() => handleParticipants(item)} />
              </ListItem>
            ))
          )}
        </UnorderedList>
      </Box>
    </>
  );
};

export default ParticipantsModal;
