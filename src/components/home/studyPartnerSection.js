import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import React from "react";
import { getExistingStudyPartnerList } from "@/api/feed/studyPartner";
import { useQuery } from "react-query";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const StudyPartnerSection = () => {
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getExistingStudyPartnerList", uid],
    queryFn: () => getExistingStudyPartnerList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res?.data?.data?.partnerList),
  });
  console.log(state);
  return (
    <Box overflowY="hidden" overflow="scroll">
      <Box className="mt-5 flex gap-2 text-xs font-semibold" width="78vh">
        <Box
          padding="0"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid #757575"
          rounded="md"
          w="50%"
        >
          <Plus />
          <Text fontSize="sm">Study Room</Text>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid #757575"
          rounded="md"
          w="50%"
        >
          <Text fontSize="sm"> Find Study Partner</Text>
        </Box>

        {/* <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man3.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man1.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man2.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man3.jpg" />
        </div>
        <div className="rounded-md">
          <Image alt="img" className="rounded-md" src="/man1.jpg" />
        </div> */}
        {state?.map((item, ind) => (
          <div key={ind} className="rounded-md">
            <Image cursor={'pointer'} width={"5em"} alt="img" className="rounded-md" src={item?.profilePic} />
          </div>
        ))}
        {(() => {
          if (state?.length > 10) {
            return (
              <Box
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid #757575"
                rounded="md"
                w="30%"
              >
                <Text cursor={'pointer'} fontSize="sm">{state?.slice(10)?.length}</Text>;
                <Plus />
              </Box>
            );
          }
        })()}
      </Box>
    </Box>
  );
};

export default StudyPartnerSection;
