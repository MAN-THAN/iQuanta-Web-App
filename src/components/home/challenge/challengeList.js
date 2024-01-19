import { Box, useDisclosure } from "@chakra-ui/react";
import SuggestionSection from "../suggestionSection";
import ChallengeCard from "./challengesPostCard/challengeCard";
import ChallengeLivecard from "./challengesPostCard/challengeLivecard";
import ChallengeLeaderbordCard from "./challengesPostCard/challengeLeaderbordCard";
import { useEffect, useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAllChallenges } from "@/api/feed/user/challenge";
import { getGroupChallengeList } from "@/api/feed/groups/challenge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import ChallengeDetailJoin from "./challengeDetails/challengeDetailJoin";

const ChallengeList = ({ triggeredFrom }) => {
  // challenges intg
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [challengeList, setChallengeList] = useState([]);
  const { _id: uid } = useSelector((state) => state.userData);
  const { _id: groupId } = useSelector((state) => state.groupData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["challengeList", triggeredFrom == "user" ? uid : groupId],
    queryFn: ({ pageParam = 1, limit = 10 }) =>
      triggeredFrom == "user"
        ? getAllChallenges(pageParam, limit, uid)
        : getGroupChallengeList(pageParam, limit, groupId),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setChallengeList(res),
  });
  console.log("32::", challengeList);
  return (
    <>
      {challengeList.length > 0 &&
        challengeList.map((challenge, ind) => {
          if (challenge.status === "created") {
            return (
              <Box key={ind}>
                <ChallengeCard challengeData={challenge} />
              </Box>
            );
          } else if (challenge.status === "live") {
            return (
              <Box key={ind}>
                <ChallengeLivecard challengeData={challenge} />
              </Box>
            );
          }
        })}
      <ChallengeDetailJoin isOpen={isOpen} onClose={onClose} />
      <SuggestionSection />
      <Box onClick={onOpen}>
        <ChallengeCard />
      </Box>
      <ChallengeLeaderbordCard />
    </>
  );
};

export default ChallengeList;
