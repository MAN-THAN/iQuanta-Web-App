

import { Box } from "@chakra-ui/react";
import SuggestionSection from "../suggestionSection";
import ChallengeCard from "../challengesPostCard/challengeCard";
import ChallengeLivecard from "../challengesPostCard/challengeLivecard";
import ChallengeLeaderbordCard from "../challengesPostCard/challengeLeaderbordCard";
import { useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAllChallenges } from "@/api/feed/user/challenge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ChallengeList = () => {
// challenges intg
const [challengeList,setChallengeList]=useState([]);
const { _id: uid } = useSelector((state) => state?.userData);
const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllChallenges", uid],
    queryFn: ({uid, pageParam = 1, limit = 10 }) => getAllChallenges(uid,pageParam, limit),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setChallengeList(res.pages[0]?.data.data.challenge.data),
  });
    return (
        <>{challengeList?.map((challenge, ind) => {
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
            {/* <ChallengeLivecard /> */}
            <SuggestionSection />
            <ChallengeLeaderbordCard /></>)
}

export default ChallengeList;