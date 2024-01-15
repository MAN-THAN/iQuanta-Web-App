import { Box, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "../home/postFormSection";
import TextFeedCard from "../home/feedPostCards/textFeedCard";
import ImageFeedCard from "../home/feedPostCards/imageFeedCard";
import VideoFeedCard from "../home/feedPostCards/videoFeedCard";
import CardFeedCard from "../home/feedPostCards/cardFeedCard";
import PollFeedCard from "../home/feedPostCards/pollFeedCard";
import { useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { getGroupPosts } from "@/api/feed/groups/post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeaturesCard from "../courses/featuresCard";
import { featursCard } from "@/utilities/comanData";
import UpComeingCard from "../feature/upComeingCard";
import DiscussionModal from "../home/challengesModals/discussionModal";
import ExamTab from "./examTab";
import PracticeQAs from "./practiceQAs";
import MockTests from "./mockTests";
import FilesTab from "./filesTab";
import { useRouter } from "next/navigation";
import ImageSwiper from "../home/feedPostCards/imageSwiper";
import ChallengeForm from "../home/challengesPostCard/challengeForm";
import ChallengesModal from "../home/challengesModals/challengesModal";
import ChallengeCard from "../home/challengesPostCard/challengeCard";
import ChallengeLivecard from "../home/challengesPostCard/challengeLivecard";
import SuggestionSection from "../home/suggestionSection";
import ChallengeLeaderbordCard from "../home/challengesPostCard/challengeLeaderbordCard";

const GroupTabList = () => {
 
  const router = useRouter();
  const { isOpen: isOpenChallenge, onOpen: onOpenChallenge, onClose: onCloseChallenge } = useDisclosure();
  const { isOpen: isOpenDiscussion, onOpen: onOpenDiscussion, onClose: onCloseDiscussion } = useDisclosure();
  const [clickPhoto, setClickPhoto] = useState(false);
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { _id: groupId } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getGroupPosts", uid,groupId],
    queryFn: ({ pageParam = 1,limit=10 }) => getGroupPosts(pageParam,limit,uid,groupId),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.pages[0]?.data.data.allPostData),
  });
 
  console.log("52:",state);

  const tabs = [
    {
      tabName: "Discussions",
    },
    {
      tabName: "Challenges",
    },
    {
      tabName: "Exam Details",
    },
    {
      tabName: "Courses",
    },
    {
      tabName: "Practice QAs",
    },
    {
      tabName: "Mock Tests",
    },
    {
      tabName: "Upcoming",
    },
    {
      tabName: "Files",
    },
    {
      tabName: "Media",
    },
    {
      tabName: "Topics",
    },
  ];
 
  return (
    <>
      <ChallengesModal isOpen={isOpenChallenge} onClose={onCloseChallenge} triggeredFrom="group" />
      <DiscussionModal isOpen={isOpenDiscussion} onClose={onCloseDiscussion} clickPhoto={clickPhoto} triggeredFrom="group" />
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
            >
              {da.tabName}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel padding="0">
            <PostFormSection openModal={onOpenDiscussion} setClickPhoto={setClickPhoto} />
            {state?.map((item, ind) => {
              if (item.postType === "photo")
                return (
                  <ImageFeedCard
                    name={item?.createdBy?.name}
                    uid={item?.createdBy?._id}
                    title={item?.postTypeId?.title}
                    reactionCount={item?.reactionCount}
                    commentCount={item?.commentCount}
                    createdAt={item?.postTypeId?.createdAt}
                    media={item?.postTypeId?.media}
                  />
                );
                else if (item.postType==="video")
                return (
                <VideoFeedCard
                  name={item?.createdBy?.name}
                  uid={item?.createdBy?._id}
                  title={item?.postTypeId?.title}
                  reactionCount={item?.reactionCount}
                  commentCount={item?.commentCount}
                  createdAt={item?.postTypeId?.createdAt}
                  media={item?.postTypeId?.media}/>);
              else if (item.postType === "memes")
                return (
                  <CardFeedCard
                    name={item?.createdBy?.name}
                    uid={item?.createdBy?._id}
                    title={item?.postTypeId?.title}
                    reactionCount={item?.reactionCount}
                    commentCount={item?.commentCount}
                  />
                );
              else if (item.postType === "text")
                return (
                  <TextFeedCard
                    name={item?.createdBy?.name}
                    uid={item?.createdBy?._id}
                    title={item?.postTypeId?.title}
                    reactionCount={item?.reactionCount}
                    commentCount={item?.commentCount}
                  />
                );
              else if (item.postType === "poll")
                return (
                  <PollFeedCard
                    name={item?.postTypeId.createdBy?.name}
                    uid={item?.postTypeId.createdBy?._id}
                    profilePic ={item?.postTypeId?.createdBy?.profilePic}
                    title={item?.postTypeId?.title}
                    options={item?.postTypeId?.options}
                    reactionCount={item?.reactionCount}
                    commentCount={item?.commentCount}
                    postId={item._id}
                    triggeredFrom="group"
                  />
                );
              
              // else if (item.post_type === "video") return <ImageFeedCard />;
              // else if (item.post_type === "video") return <SuggestionSection />;
              // else if (item.post_type === "video") return <PollFeedCard />;
            })}
          </TabPanel>
          <TabPanel padding="0">
            <ChallengeForm openModal={onOpenChallenge} />
            <ChallengeCard />
            <ChallengeLivecard />
            <SuggestionSection />
            <ChallengeLeaderbordCard />
          </TabPanel>
          <TabPanel padding="0">
            <ExamTab />
          </TabPanel>
          <TabPanel padding="0">
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              px="4"
              gap="3"
              justifyContent="space-between"
              bg="white.900"
            >
              {featursCard.map((data, index) => (
                <FeaturesCard data={data} key={index} onButtonClick={() => router.push(`/courses/${index}`)} />
              ))}
            </Box>
          </TabPanel>
          <TabPanel padding="0">
            <PracticeQAs />
          </TabPanel>
          <TabPanel padding="0">
            <MockTests />
          </TabPanel>
          <TabPanel padding="3" bg='white.900' mt='1'>
            {[...Array(4)].map((e, i) => (
              <Box key={i} width="100%">
                <UpComeingCard id={i} />
              </Box>
            ))}
          </TabPanel>
          <TabPanel padding='0'>
            <FilesTab />
          </TabPanel>
          <TabPanel padding='0'>
            <ImageSwiper />
          </TabPanel>
          <TabPanel>
            <p>nine!</p>
          </TabPanel>
          <TabPanel>
            <p>ten!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default GroupTabList;
