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
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { throttle } from "lodash";
import React from "react";
import { useInView } from "react-intersection-observer";
import { getAllPost } from "@/api/feed/user/posts";
import { getGroupPosts } from "@/api/feed/groups/post";

export const FeedPostList = ({triggeredFrom}) => {
  const { _id: uid } = useSelector((state) => state.userData);
  const { _id: groupId } = useSelector((state) => state.groupData);
  const { data, error,isLoading,isError, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
      queryKey: [triggeredFrom=="group"?"getGroupPosts":"getAllPosts", triggeredFrom == "group" ?groupId: uid],
      queryFn: ({ pageParam = 1, limit = 10 }) =>
        triggeredFrom == "group"?
        getGroupPosts(pageParam, limit, uid, groupId)
        : getAllPost(pageParam, 12, uid),

      getNextPageParam: (lastPage, pages) => lastPage.data.data.pagination.page + 1,
      onError: (error, variables, context) =>
        toast.error(`${error?.response?.data?.error?.message || "Some error"}`, {
          position: toast.POSITION.TOP_RIGHT,
        }),
      onSuccess: (res) => {console.log("res",res)},
    });  
  // Implement scrolling detection
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  console.log(data, "data");

  return (
    <Box>
      {isLoading ? (
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
      ) : isError ? (
        <Box>{error}</Box>
      ) : (
        data?.pages.map((page, ind) => (
          <React.Fragment key={ind}>
            {page.data.data.allPostData.map((item, ind) => {
              if (item.postType === "photo"||item.postType === "memes") {
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
                      triggeredFrom={triggeredFrom}
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
                      triggeredFrom={triggeredFrom}
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
                    triggeredFrom={triggeredFrom}
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
                    triggeredFrom={triggeredFrom}
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
                    triggeredFrom={triggeredFrom}
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
                    triggeredFrom={triggeredFrom}
                  />
                );

              // else if (item.post_type === "video") return <SuggestionSection />;
            })}
          </React.Fragment>
        ))
      )}
      {isFetching && (
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
      )}
      <Box ref={ref} sx={{ minHeight: "10em" }}></Box>
      <ToastContainer />
    </Box>
  );
};
