import React,{ useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getGroupMediaPostList } from "@/api/feed/groups/post";
import { useInfiniteQuery } from "react-query";
import ImageFeedCard from "../home/feedPostCards/imageFeedCard";
import VideoFeedCard from "../home/feedPostCards/videoFeedCard";
import CardFeedCard from "../home/feedPostCards/cardFeedCard";

const MediaPostList = ({groupId}) => {
const [state, setState] = useState([]);
const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
        queryKey: ["getGroupMediaPostList", groupId],   
        queryFn: () => getGroupMediaPostList(groupId),
        onError: (error, variables, context) =>
          toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
            position: toast.POSITION.TOP_RIGHT,
          }),
        onSuccess: (res) => setState(res.data.data.groupPost),
        
      });
console.log("mediaList",state);
  return (
    state?.map((item, ind) => {
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
        else if (item.postType === "video")
          return (
            <VideoFeedCard
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
       
       
      })
  );
};

export default MediaPostList;
