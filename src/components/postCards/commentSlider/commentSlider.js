import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import { Box, Card, Divider, Flex, HStack, IconButton, Image, Input, Stack, Tag, Text } from "@chakra-ui/react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import { getTimeAgo } from "@/utilities/utilityFunction";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { getUserPostComments } from "@/api/feed/user/comments";
import { Check, MoreHorizontal, X } from "lucide-react";
import CommentCard from "./commentCard";
import React from "react";

const CommentSlider = ({ topComments, postId, isOpenComment }) => {
  console.log(isOpenComment);
  const [commentList, setCommentList] = useState([]);
  const { _id: uid } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllComments", postId],
    queryFn: ({ pageParam = 1 }) => getUserPostComments(postId, pageParam, 10),
    // getNextPageParam: (lastPage, pages) => lastPage.data.data.pagination.page + 1,
    enabled: !!isOpenComment,
    onError: (error, variables, context) => {},
    onSuccess: (res, page) => {
      console.log(res);
      // let currentPageParam = res?.pageParams?.length - 1;
      setCommentList(res.pages[0]?.data?.data?.comment);
    },
  });

  const handleEdit = useCallback((isConfirmed) => {
    if (isConfirmed === true) {
      setShowEditComment(true);
    }
  }, []);

  return (
    <Box width="auto" p="4">
      <Swiper
        slidesPerView={2}
        direction="horizontal"
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1.4,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1.8,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        // className="mySwiper flex"
      >
        {[...commentList]?.map((item, ind) => (
          <SwiperSlide key={ind}>
            <CommentCard key={ind} item={item} postId={postId} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default CommentSlider;
