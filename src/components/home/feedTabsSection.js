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
              <TextFeedCard />
              <ImageFeedCard />
              <CardFeedCard />
              <SuggestionSection />
              <PollFeedCard />
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
    </>
  );
};

export default FeedTabsSection;
