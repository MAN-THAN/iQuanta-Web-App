import { randomColors } from "@/utilities/commonFunctions";
import { Box, Card, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { ChevronRight, Star } from "lucide-react";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getGroups } from "@/api/feed/groups";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroupSection = () => {
  const cardColors = ["bg-teal-600", "bg-blue-500", "bg-purple-500"];
  const groups = [
    { tittle: "CAT-2021", iconText: "c&" },
    { tittle: "Banking", iconText: "a$" },
    { tittle: "IIT Aspirants", iconText: "x&" },
    { tittle: "IIT Aspirants", iconText: "x&" },
    { tittle: "IIT Aspirants", iconText: "x&" },
  ];
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  // const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
  //   queryKey: ["getGroups", uid],
  //   queryFn: () => getGroups(uid),
  //   onError: (error, variables, context) =>
  //     toast.error(`${error?.response?.data.error.message}`, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     }),
  //   onSuccess: (res) => setState(res.data.data),
  // });
  // console.log(state);

  return (
    <>
      <Flex align="center" justify="space-between" pt="4">
        <HStack>
          <Heading fontSize="18px" fontWeight="500">
            Groups
          </Heading>
        </HStack>
        <HStack>
          <Text fontWeight="500">View all</Text>
          <ChevronRight />
        </HStack>
      </Flex>
      <Box display="flex" justifyContent="space-between" overflow="scroll" gap="4">
        {state?.map((item, ind) => (
          <div key={ind} className="flex">
            <Box
              bg={randomColors(["#336792", "#E56951", "#339287"])}
              position="relative"
              rounded="xl"
              w="220px"
              h="180px"
              mt="4"
            >
              <Text
                position="absolute"
                fontSize="9xl"
                fontWeight="600"
                opacity="0.1"
                color="white.900"
                right="-3"
                top="-16"
              >
                {item?.iconText}
              </Text>
              <Box color="#FCB461" position="absolute" left={3} top={4} fontSize="3xl">
                {item?.group_type === "Premium" ? <BsStarFill /> : <></>}
              </Box>
              <div className="absolute  right-5 top-3 text-2xl text-white">
                <ChevronRight />
              </div>
              <div className="absolute bottom-10 text-white text-2xl px-3  ">
                <p>
                  {item?.title}
                  <br />
                </p>
                <p className="text-xs">{item?.group_type}</p>
              </div>
            </Box>
          </div>
        ))}
      </Box>
    </>
  );
};

export default GroupSection;
