import { Box, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import { MessagesSquare, ShieldCheck } from "lucide-react";
import PostFormSection from "../home/postFormSection";
import TextFeedCard from "../home/feedPostCards/textFeedCard";
import ImageFeedCard from "../home/feedPostCards/imageFeedCard";
import CardFeedCard from "../home/feedPostCards/cardFeedCard";
import PollFeedCard from "../home/feedPostCards/pollFeedCard";
import { useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { getGroupPosts } from "@/api/feed/groups/index";
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

const GroupTabList = () => {
  const router = useRouter();
  const { isOpen: isOpenChallenge, onOpen: onOpenChallenge, onClose: onCloseChallenge } = useDisclosure();
  const { isOpen: isOpenDiscussion, onOpen: onOpenDiscussion, onClose: onCloseDiscussion } = useDisclosure();
  const [clickPhoto, setClickPhoto] = useState(false);
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getGroupPosts", uid,],
    queryFn: ({ pageParam = 1 }) => getGroupPosts(pageParam),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.pages[0]?.data.data.allPostData),
  });
  console.log(state);

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
      <DiscussionModal isOpen={isOpenDiscussion} onClose={onCloseDiscussion} clickPhoto={clickPhoto} />
      <Tabs variant="soft-rounded">
        <TabList gap="4" pt="5" overflow="scroll">
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
                    name={item?.createdBy?.name}
                    uid={item?.createdBy?._id}
                    title={item?.postTypeId?.title}
                    reactionCount={item?.reactionCount}
                    commentCount={item?.commentCount}
                  />
                );
              else if (item.postType === "video")
                return (
                  <ImageFeedCard
                    name={item?.createdBy?.name}
                    uid={item?.createdBy?._id}
                    title={item?.postTypeId?.title}
                    reactionCount={item?.reactionCount}
                    commentCount={item?.commentCount}
                  />
                );
              // else if (item.post_type === "video") return <ImageFeedCard />;
              // else if (item.post_type === "video") return <SuggestionSection />;
              // else if (item.post_type === "video") return <PollFeedCard />;
            })}
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <ExamTab />
          </TabPanel>
          <TabPanel>
            <Box display="flex" flexWrap="wrap" gap="5">
              {featursCard.map((data, index) => (
                <FeaturesCard data={data} key={index} onButtonClick={() => router.push(`/courses/${index}`)} />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <PracticeQAs />
          </TabPanel>
          <TabPanel>
            <MockTests />
          </TabPanel>
          <TabPanel>
            {[...Array(4)].map((e, i) => (
              <Box key={i} width="100%">
                <UpComeingCard id={i} />
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            <FilesTab />
          </TabPanel>
          <TabPanel>
            <ImageSwiper/>
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
