import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "./postFormSection";
import SuggestionSection from "./suggestionSection";
import TextFeedCard from "./feedPostCards/textFeedCard";
import ImageFeedCard from "./feedPostCards/imageFeedCard";
import CardFeedCard from "./feedPostCards/cardFeedCard";
import PollFeedCard from "./feedPostCards/pollFeedCard";
import ChallengeCard from "./challengesPostCard/challengeCard";
import ChallengeForm from "./challengesPostCard/challengeForm";
import ChallengeLivecard from "./challengesPostCard/challengeLivecard";
import ChallengeLeaderbordCard from "./challengesPostCard/challengeLeaderbordCard";
import { useState } from "react";
import ChallengesModal from "./challengesModals/challengesModal";
import DiscussionModal from "./challengesModals/discussionModal";
import { useQuery, useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAllPost } from "@/api/feed/userPost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedTabsSection = () => {
  const [challengesModal, setChallengesModal] = useState(false);
  const [discussionModal, setDiscussionModal] = useState(false);

  const openModal = () => {
    setChallengesModal(true);
  };
  const discussionModalOpen = () => {
    setDiscussionModal(true);
  };
  const closeChallengesModal = () => {
    setChallengesModal(false);
  };
  const closeDiscussionModal = () => {
    setDiscussionModal(false);
  };
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllPosts", uid],
    queryFn: ({ pageParam = 1 }) => getAllPost(pageParam),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.pages[0]?.data.data.data),
  });
  console.log(state);
  return (
    <>
      <ChallengesModal isOpen={challengesModal} onClose={closeChallengesModal} />
      <DiscussionModal isOpen={discussionModal} onClose={closeDiscussionModal} />
      <Box mt="6">
        <Tabs isFitted>
          <TabList>
            <Tab
              roundedTopLeft="2xl"
              bg="#fff"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize="16px"
              fontWeight="600"
            >
              <HStack py="3">
                <MessagesSquare />
                <Text>Discussion</Text>
              </HStack>
            </Tab>
            <Tab
              bg="#fff"
              roundedTopRight="2xl"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize="16px"
              fontWeight="600"
            >
              <HStack py="3">
                <ShieldCheck />
                <Text>Challenges</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
              <PostFormSection openModal={discussionModalOpen} />
              {state?.map((item, ind) => {
                if (item.postType === "photo") return <ImageFeedCard />;
                else if (item.postType === "memes") return <CardFeedCard />;
                else if (item.postType === "text") return <TextFeedCard />;
                // else if (item.post_type === "video") return <ImageFeedCard />;
                // else if (item.post_type === "video") return <ImageFeedCard />;
                // else if (item.post_type === "video") return <SuggestionSection />;
                // else if (item.post_type === "video") return <PollFeedCard />;
              })}
            </TabPanel>
            <TabPanel padding="0">
              <ChallengeForm openModal={openModal} />
              <ChallengeCard />
              <ChallengeLivecard />
              <SuggestionSection />
              <ChallengeLeaderbordCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <ToastContainer />
    </>
  );
};

export default FeedTabsSection;
