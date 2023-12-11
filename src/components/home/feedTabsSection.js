import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "./postFormSection";
import TextPostCard from "../postCards/textPostCard";
import TextCardPostCard from "../postCards/textCardPostCard";
import ImagePostCard from "../postCards/imagePostCard";
import PollPostCard from "../postCards/pollPostCard";
import SuggestionSection from "./suggestionSection";
import TextFeedCard from "./feedPostCards/textFeedCard";
import ImageFeedCard from "./feedPostCards/imageFeedCard";
import CardFeedCard from "./feedPostCards/cardFeedCard";
import PollFeedCard from "./feedPostCards/pollFeedCard";
import ChallengeCard from "./challengesPostCard/challengeCard";
import ChallengeForm from "./challengesPostCard/challengeForm";
import ChallengeLivecard from "./challengesPostCard/challengeLivecard";
import ChallengeLeaderbordCard from "./challengesPostCard/challengeLeaderbordCard";

const FeedTabsSection = () => {
  return (
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
            <PostFormSection />
            <TextFeedCard />
            <ImageFeedCard />
            <CardFeedCard />
            <SuggestionSection />
            <PollFeedCard />
          </TabPanel>
          <TabPanel padding="0">
            <ChallengeForm />
            <ChallengeCard />
            <ChallengeLivecard />
            <SuggestionSection />
            <ChallengeLeaderbordCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FeedTabsSection;