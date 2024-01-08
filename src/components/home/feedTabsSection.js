import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "./postFormSection";
import SuggestionSection from "./suggestionSection";
import TextFeedCard from "./feedPostCards/textFeedCard";
import ImageFeedCard from "./feedPostCards/imageFeedCard";
import ImageSwiper from "./feedPostCards/imageSwiper";
import CardFeedCard from "./feedPostCards/cardFeedCard";
import PollFeedCard from "./feedPostCards/pollFeedCard";
import ChallengeCard from "./challengesPostCard/challengeCard";
import ChallengeForm from "./challengesPostCard/challengeForm";
import VideoFeedCard from "./feedPostCards/videoFeedCard";
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
    onSuccess: (res) => setState(res.pages[0]?.data.data.allPostData),
  });
  console.log(state);
  return (
    <>
      <ChallengesModal isOpen={isOpenChallenge} onClose={onCloseChallenge} />
      <DiscussionModal isOpen={isOpenDiscussion} onClose={onCloseDiscussion} clickPhoto={clickPhoto} />
      {/* user post list */}
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
              {/* different type of post to select */}
              {state?.map((item, ind) => {
                if (item.postType === "photo")
                 {
                if(item.postTypeId?.media?.length==1)
                return (
                    <ImageFeedCard
                      name={item?.postTypeId?.createdBy?.name}
                      profilePic={item?.postTypeId?.createdBy?.profilePic}
                      uid={item?.postTypeId?.createdBy?._id}
                      title={item?.postTypeId?.title}
                      reactionCount={item?.reactionCount}
                      commentCount={item?.commentCount}
                      createdAt={item?.postTypeId?.createdAt}
                      media={item?.postTypeId?.media}
                      comments={item?.comments}
                    />
                  );
                else{
                  return (
                    <ImageSwiper
                      name={item?.postTypeId?.createdBy?.name}
                      profilePic={item?.postTypeId?.createdBy?.profilePic}
                      uid={item?.postTypeId?.createdBy?._id}
                      title={item?.postTypeId?.title}
                      reactionCount={item?.reactionCount}
                      commentCount={item?.commentCount}
                      createdAt={item?.postTypeId?.createdAt}
                      media={item?.postTypeId?.media}
                      comments={item?.comments}
                    />
                  );
                }
                }
                
                else if (item.postType === "video")
                  return (
                    <VideoFeedCard
                      name={item?.postTypeId?.createdBy?.name}
                      profilePic={item?.postTypeId?.createdBy?.profilePic}
                      uid={item?.postTypeId?.createdBy?._id}
                      title={item?.postTypeId?.title}
                      reactionCount={item?.reactionCount}
                      commentCount={item?.commentCount}
                      createdAt={item?.postTypeId?.createdAt}
                      media={item?.postTypeId?.media}
                    />
                  );
                else if (item.postType === "memes")
                  return (
                    <CardFeedCard
                      name={item?.postTypeId?.createdBy?.name}
                      profilePic={item?.postTypeId?.createdBy?.profilePic}
                      uid={item?.postTypeId?.createdBy?._id}
                      title={item?.postTypeId?.title}
                      reactionCount={item?.reactionCount}
                      commentCount={item?.commentCount}
                      createdAt={item?.postTypeId?.createdAt}
                      media={item?.postTypeId?.media}
                    />
                  );
                else if (item.postType === "text")
                  return (
                    <TextFeedCard
                      name={item?.postTypeId?.createdBy?.name}
                      profilePic={item?.postTypeId?.createdBy?.profilePic}
                      uid={item?.postTypeId?.createdBy?._id}
                      title={item?.postTypeId?.title}
                      reactionCount={item?.reactionCount}
                      commentCount={item?.commentCount}
                      createdAt={item?.postTypeId?.createdAt}
                      media={item?.postTypeId?.media}
                    />
                  );
                else if (item.postType === "poll")
                  return (
                    <PollFeedCard
                      name={item?.postTypeId?.createdBy?.name}
                      profilePic={item?.postTypeId?.createdBy?.profilePic}
                      uid={item?.postTypeId?.createdBy?._id}
                      title={item?.postTypeId?.title}
                      reactionCount={item?.reactionCount}
                      commentCount={item?.commentCount}
                      createdAt={item?.postTypeId?.createdAt}
                      media={item?.postTypeId?.media}
                    />
                  );

                // else if (item.post_type === "video") return <SuggestionSection />;
              })}
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
