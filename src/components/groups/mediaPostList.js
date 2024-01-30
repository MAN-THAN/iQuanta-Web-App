import React,{ useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getGroupMediaPostList } from "@/api/feed/groups/post";
import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import ImageFeedCard from "../home/feedPostCards/imageFeedCard";
import VideoFeedCard from "../home/feedPostCards/videoFeedCard";
import CardFeedCard from "../home/feedPostCards/cardFeedCard";

const MediaPostList = ({groupId}) => {
const [state, setState] = useState([]);
const { _id: uid } = useSelector((state) => state.userData);
const { isLoading, data, isError, error, isPending, isSuccess } = useInfiniteQuery({
        queryKey: ["getGroupMediaPostList", groupId],   
        queryFn: ({pageParam = 1, limit = 10 }) => getGroupMediaPostList(pageParam, limit, uid,groupId),
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
        onError: (error, variables, context) =>
          toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
            position: toast.POSITION.TOP_RIGHT,
          }),
        onSuccess: (res) => setState(res.pages[0]?.data.data.allPostData),
        
      });
console.log("mediaList",state);
  return (
    state?.map((item, ind) => {
        if (item.postType === "photo")
          return (
            <ImageFeedCard
              name={item?.postTypeId.createdBy?.name}
              uid={item?.postTypeId.createdBy?._id}
              title={item?.postTypeId?.title}
              reactionCount={item?.reactionCount}
              commentCount={item?.commentCount}
              createdAt={item?.postTypeId?.createdAt}
              media={item?.postTypeId?.media}
              profilePic={item?.postTypeId.createdBy?.profilePic}
            />
          );
        else if (item.postType === "video")
          return (
            <VideoFeedCard
            name={item?.postTypeId.createdBy?.name}
            uid={item?.postTypeId.createdBy?._id}
            title={item?.postTypeId?.title}
            reactionCount={item?.reactionCount}
            commentCount={item?.commentCount}
            createdAt={item?.postTypeId?.createdAt}
            media={item?.postTypeId?.media}
            profilePic={item?.postTypeId.createdBy?.profilePic}
            />
          );
        else if (item.postType === "memes")
          return (
            <CardFeedCard
            name={item?.postTypeId.createdBy?.name}
            uid={item?.postTypeId.createdBy?._id}
            title={item?.postTypeId?.title}
            reactionCount={item?.reactionCount}
            commentCount={item?.commentCount}
            createdAt={item?.postTypeId?.createdAt}
            media={item?.postTypeId?.media}
            profilePic={item?.postTypeId.createdBy?.profilePic}
            />
          );
       
       
      })
  );
};

export default MediaPostList;
