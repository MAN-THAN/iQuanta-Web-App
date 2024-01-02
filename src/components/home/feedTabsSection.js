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
import { useDisclosure } from "@chakra-ui/react";

const FeedTabsSection = () => {
  const { isOpen: isOpenChallenge, onOpen: onOpenChallenge, onClose: onCloseChallenge } = useDisclosure();
  const { isOpen: isOpenDiscussion, onOpen: onOpenDiscussion, onClose: onCloseDiscussion } = useDisclosure();
  const [clickPhoto, setClickPhoto] = useState(false);
  
  return (
    <>
      <ChallengesModal isOpen={isOpenChallenge} onClose={onCloseChallenge} />
      <DiscussionModal isOpen={isOpenDiscussion} onClose={onCloseDiscussion} clickPhoto={clickPhoto} />
      <Box mt={{ base: "6", md: "12" }}>
        <Tabs isFitted>
          <TabList>
            <Tab
              roundedTopLeft="2xl"
              bg="#fff"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="600"
            >
              <HStack py={{ base: "3", md: "4" }}>
                <MessagesSquare />
                <Text fontSize={{ base: "12px", md: "16px" }}>Discussion</Text>
              </HStack>
            </Tab>
            <Tab
              roundedTopRight="2xl"
              bg="#fff"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="600"
            >
              <HStack py={{ base: "0", md: "4" }}>
                <ShieldCheck fontSize={{ base: "12px", md: "16px" }} />
                <Text fontSize={{ base: "12px", md: "16px" }}>Challenges</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
              <PostFormSection openModal={onOpenDiscussion} setClickPhoto={setClickPhoto} />
            </TabPanel>
            <TabPanel padding="0">
              <ChallengeForm openModal={onOpenChallenge} />
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
