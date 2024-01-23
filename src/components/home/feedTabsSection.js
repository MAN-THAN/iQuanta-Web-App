import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "./postFormSection";
import SuggestionSection from "./suggestionSection";
import TextFeedCard from "./feedPostCards/textFeedCard";
import ImageFeedCard from "./feedPostCards/imageFeedCard";
import ImageSwiper from "./feedPostCards/imageSwiper";
import CardFeedCard from "./feedPostCards/cardFeedCard";
import PollFeedCard from "./feedPostCards/pollFeedCard";
import ChallengeForm from "./challenge/challengesPostCard/challengeForm";
import ChallengeList from "./challenge/challengeList";
import VideoFeedCard from "./feedPostCards/videoFeedCard";
import { useState, useEffect } from "react";
import ChallengesModal from "./challenge/challengesModals/challengesModal";
import DiscussionModal from "./challenge/challengesModals/discussionModal";
import { useQuery, useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAllPost } from "@/api/feed/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDisclosure } from "@chakra-ui/react";

const FeedTabsSection = () => {
  const { isOpen: isOpenChallenge, onOpen: onOpenChallenge, onClose: onCloseChallenge } = useDisclosure();
  const { isOpen: isOpenDiscussion, onOpen: onOpenDiscussion, onClose: onCloseDiscussion } = useDisclosure();
  const [clickPhoto, setClickPhoto] = useState(false);
  const [state, setState] = useState();
  // const [challengeTab, setChallengeTab] = useState(false);
  const { _id: uid } = useSelector((state) => state?.userData);
  console.log("uid", uid);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllPosts", uid],
    queryFn: ({ pageParam = 1, limit = 10 }) => getAllPost(pageParam, limit),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.pages[0]?.data.data.allPostData),
  });

  // useEffect(() => {}, [challengeTab]);

  return (
    <>
      <ChallengesModal isOpen={isOpenChallenge} onClose={onCloseChallenge} triggeredFrom="user" />
      <DiscussionModal
        isOpen={isOpenDiscussion}
        onClose={onCloseDiscussion}
        clickPhoto={clickPhoto}
        triggeredFrom="user"
      />
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
              {
                <>
                  <PostFormSection openModal={onOpenDiscussion} setClickPhoto={setClickPhoto} />
                  <SuggestionSection />
                  {/* different type of post to select */}
                  {state?.map((item, ind) => {
                    if (item.postType === "photo") {
                      if (item.postTypeId?.media?.length == 1)
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
                      else if (item.postTypeId?.media?.length > 1) {
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
                      } else {
                        return null;
                      }
                    } else if (item.postType === "video")
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
                </>
              }
            </TabPanel>
            <TabPanel padding="0">
              <>
                <ChallengeForm openModal={onOpenChallenge} triggeredFrom="user" />
                <ChallengeList triggeredFrom="user" />
              </>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <ToastContainer />
    </>
  );
};

export default FeedTabsSection;
