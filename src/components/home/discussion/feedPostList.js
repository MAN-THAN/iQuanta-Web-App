import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import TextFeedCard from "../feedPostCards/textFeedCard";
import ImageFeedCard from "../feedPostCards/imageFeedCard";
import ImageSwiper from "../feedPostCards/imageSwiper";
import CardFeedCard from "../feedPostCards/cardFeedCard";
import PollFeedCard from "../feedPostCards/pollFeedCard";
import VideoFeedCard from "../feedPostCards/videoFeedCard";
import DebateFeedCard from "../feedPostCards/debateFeedCard";
import { useCallback, useState, useEffect } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllPost } from "@/api/feed/user";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { throttle } from "lodash";

export const FeedPostList = () => {
  const [postList, setPostList] = useState([]);
  const { _id: uid } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllPosts", uid],
    queryFn: ({ pageParam = 1 }) => getAllPost(pageParam, 12, uid),
    getNextPageParam: (lastPage, pages) => lastPage.data.data.pagination.page + 1,
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, page) => {
      console.log(res);
      let currentPageParam = res?.pageParams?.length - 1;
      setPostList((prev) => [...prev, ...res.pages[currentPageParam]?.data?.data?.allPostData]);
    },
  });
  // Implement scrolling detection
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(postList);

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
                topComments={item?.topComments}
                postId={item?.postTypeId?._id}
                userReaction={item?.userReaction}
                followingCount={item?.followingCount}
                reactionCountDetail={item?.reactionCountDetail}
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
                topComments={item?.topComments}
                postId={item?.postTypeId?._id}
                userReaction={item?.userReaction}
                followingCount={item?.followingCount}
                reactionCountDetail={item?.reactionCountDetail}
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
              postId={item?.postTypeId?._id}
              userReaction={item?.userReaction}
              followingCount={item?.followingCount}
              reactionCountDetail={item?.reactionCountDetail}
              topComments={item?.topComments}
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
              postId={item?.postTypeId?._id}
              userReaction={item?.userReaction}
              followingCount={item?.followingCount}
              reactionCountDetail={item?.reactionCountDetail}
              topComments={item?.topComments}
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
              postId={item?.postTypeId?._id}
              userReaction={item?.userReaction}
              followingCount={item?.followingCount}
              reactionCountDetail={item?.reactionCountDetail}
              topComments={item?.topComments}
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
              postId={item?.postTypeId?._id}
              userReaction={item?.userReaction}
              followingCount={item?.followingCount}
              reactionCountDetail={item?.reactionCountDetail}
              topComments={item?.topComments}
              />
          );
        else if (item.postType === "debate")
          return (
            <DebateFeedCard
              name={item?.postTypeId?.createdBy?.name}
              profilePic={item?.postTypeId?.createdBy?.profilePic}
              uid={item?.postTypeId?.createdBy?._id}
              title={item?.postTypeId?.title}
              reactionCount={item?.reactionCount}
              commentCount={item?.commentCount}
              createdAt={item?.postTypeId?.createdAt}
              media={item?.postTypeId?.media}
              postId={item?.postTypeId?._id}
              participants={item?.postTypeId?.participants}
              userReaction={item?.userReaction}
              followingCount={item?.followingCount}
              reactionCountDetail={item?.reactionCountDetail}
              topComments={item?.topComments}
              />
          );

        // else if (item.post_type === "video") return <SuggestionSection />;
      })}
      {isFetching ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}>
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 28,
                  }}
                  spin
                />
              }
            />
          </Box>
        </>
      ) : (
        <></>
      )}
      <Box sx={{ minHeight: "10em" }}></Box>
      <ToastContainer />
    </Box>
  );
};
