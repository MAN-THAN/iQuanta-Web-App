import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "./postFormSection";
import SuggestionSection from "./suggestionSection";
import ChallengeForm from "./challenge/challengesPostCard/challengeForm";
import ChallengeList from "./challenge/challengeList";
import { useState, useEffect, useRef } from "react";
import ChallengesModal from "./challenge/challengesModals/challengesModal";
import DiscussionModal from "./challenge/challengesModals/discussionModal";
import { useDisclosure } from "@chakra-ui/react";
import { FeedPostList } from "./discussion/feedPostList";

const FeedTabsSection = () => {
  const { isOpen: isOpenChallenge, onOpen: onOpenChallenge, onClose: onCloseChallenge } = useDisclosure();
  const { isOpen: isOpenDiscussion, onOpen: onOpenDiscussion, onClose: onCloseDiscussion } = useDisclosure();
  const [clickPhoto, setClickPhoto] = useState(false);
  const finalRef = useRef(null);
  return (
    <>
      <ChallengesModal isOpen={isOpenChallenge} onClose={onCloseChallenge} finalRef={finalRef} triggeredFrom="user" />
      <DiscussionModal
        isOpen={isOpenDiscussion}
        onClose={onCloseDiscussion}
        clickPhoto={clickPhoto}
        finalRef={finalRef}
        triggeredFrom="user"
      />
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
              <>
                <PostFormSection openModal={onOpenDiscussion} setClickPhoto={setClickPhoto} />
                {/* <SuggestionSection /> */}
                <FeedPostList triggeredFrom="user" />
              </>
            </TabPanel>
            <TabPanel padding="0">
              <>
                <ChallengeForm openModal={onOpenChallenge} triggeredFrom="user" />
                <SuggestionSection />
                <ChallengeList triggeredFrom="user" />
              </>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default FeedTabsSection;
