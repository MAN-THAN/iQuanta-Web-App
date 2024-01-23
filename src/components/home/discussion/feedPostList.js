import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import TextFeedCard from "../feedPostCards/textFeedCard";
import ImageFeedCard from "../feedPostCards/imageFeedCard";
import ImageSwiper from "../feedPostCards/imageSwiper";
import CardFeedCard from "../feedPostCards/cardFeedCard";
import PollFeedCard from "../feedPostCards/pollFeedCard";
import VideoFeedCard from "../feedPostCards/videoFeedCard";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllPost } from "@/api/feed/user";

export const FeedPostList = () => {
  const [postList, setPostList] = useState([]);
  const {_id:uid} = useSelector(state => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllPosts", uid],
    queryFn: ({ pageParam = 1, limit = 10 }) => getAllPost(pageParam, limit),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setPostList(res.pages[0]?.data.data.allPostData),
  });
  return (
    <Box>
      {/* feed post list */}
      {postList?.map((item, ind) => {
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
      <ToastContainer />
    </Box>
  );
};
