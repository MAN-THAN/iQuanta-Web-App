import { Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import PostFormSection from "../home/postFormSection";
import { useState } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import DiscussionModal from "../home/challenge/challengesModals/discussionModal";
import ExamTab from "./examTab";
import PracticeQAs from "./practiceQAs";
import MockTests from "./mockTests";
import FilesTab from "./filesTab";
import { useRouter } from "next/navigation";
import ChallengeForm from "../home/challenge/challengesPostCard/challengeForm";
import ChallengesModal from "../home/challenge/challengesModals/challengesModal";
import ChallengeList from "../home/challenge/challengeList";
import CourseList from "../courses/courseList";
import EventList from "../events/eventList";
import MediaPostList from "./mediaPostList";
import TopicDetailsTab from "./topicDetailsTab";
import DoubtDetailsTab from "./doubtDetailsTab";
import FlagFeedDetails from "./flagFeedDetails";
import { FeedPostList } from "../home/discussion/feedPostList";

const GroupTabList = () => {
  const router = useRouter();
  const { isOpen: isOpenChallenge, onOpen: onOpenChallenge, onClose: onCloseChallenge } = useDisclosure();
  const { isOpen: isOpenDiscussion, onOpen: onOpenDiscussion, onClose: onCloseDiscussion } = useDisclosure();
  const [clickPhoto, setClickPhoto] = useState(false);
  const [challengeTab, setChallengeTab] = useState(false);
  const { _id: uid } = useSelector((state) => state.userData);
  const { _id: groupId, entityType: examId } = useSelector((state) => state.groupData);
 
  const tabs = [
    {
      tabName: "Discussions",
      challengeTab: false,
    },
    {
      tabName: "Challenges",
      challengeTab: true,
    },
    {
      tabName: "Exam Details",
      challengeTab: false,
    },
    {
      tabName: "Courses",
      challengeTab: false,
    },
    {
      tabName: "Practice QAs",
      challengeTab: false,
    },
    {
      tabName: "Mock Tests",
      challengeTab: false,
    },
    {
      tabName: "Upcoming",
      challengeTab: false,
    },
    {
      tabName: "Files",
      challengeTab: false,
    },
    {
      tabName: "Media",
      challengeTab: false,
    },
    {
      tabName: "Topics",
      challengeTab: false,
    },
    {
      tabName: "Doubt",
      challengeTab: false,
    },
    {
      tabName: "Flags",
      challengeTab: false,
    },
    {
      tabName: "Hashtag",
      challengeTab: false,
    },
  ];

  return (
    <>
      <ChallengesModal isOpen={isOpenChallenge} onClose={onCloseChallenge} triggeredFrom="group" />
      <DiscussionModal
        isOpen={isOpenDiscussion}
        onClose={onCloseDiscussion}
        clickPhoto={clickPhoto}
        triggeredFrom="group"
      />
      <Tabs variant="soft-rounded">
        <TabList gap="4" py="4" px="4" overflow="scroll" bg="white.900">
          {tabs.map((da, i) => (
            <Tab
              key={i}
              fontSize="14px"
              width="fit-content"
              whiteSpace="nowrap"
              bg="black.700"
              color="#fff"
              _selected={{
                color: "#333",
                bg: "#fff",
              }}
              border="1px solid"
              px="3"
              onClick={() => {
               setChallengeTab(da.challengeTab);
              }}
            >
              {da.tabName}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel padding="0">
            <PostFormSection openModal={onOpenDiscussion} setClickPhoto={setClickPhoto} />
            <FeedPostList triggeredFrom="group"/>
          </TabPanel>
          <TabPanel padding="0">
            {challengeTab == true && (
              <>
                <ChallengeForm openModal={onOpenChallenge} triggeredFrom="group" />
                <ChallengeList triggeredFrom="group" />
              </>
            )}
          </TabPanel>
          <TabPanel padding="0">
            <ExamTab examId={examId?._id} />
          </TabPanel>
          <TabPanel padding="0">
            <CourseList groupId={groupId}/>
          </TabPanel>
          <TabPanel padding="0">
            <PracticeQAs />
          </TabPanel>
          <TabPanel padding="0">
            <MockTests />
          </TabPanel>
          <TabPanel padding="3" bg="white.900" mt="1">
            <EventList groupId={groupId}/>
          </TabPanel>
          <TabPanel padding="0">
            <FilesTab groupId={groupId} />
          </TabPanel>
          <TabPanel padding="0">
            <MediaPostList groupId={groupId}/>
          </TabPanel>
          <TabPanel padding="0">
            <TopicDetailsTab />
          </TabPanel>
          <TabPanel padding="0">
            <DoubtDetailsTab />
          </TabPanel>
          <TabPanel padding="0">
            <FlagFeedDetails />
          </TabPanel>
          <TabPanel padding="0">
            <DoubtDetailsTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default GroupTabList;
