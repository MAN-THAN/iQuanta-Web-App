import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import { Box, Card, Divider, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import LikeEmojiGroup from "@/components/common/likeEmojiGroup";
import { getTimeAgo } from "@/utilities/utilityFunction";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { getUserPostComments } from "@/api/feed/user/comments";

const CommentSlider = ({ topComments, postId, isOpenComment}) => {
  console.log(isOpenComment)
  const [commentList, setCommentList] = useState([]);
  const { _id: uid } = useSelector((state) => state.userData);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["getAllComments", postId],
    queryFn: ({ pageParam = 1 }) => getUserPostComments(postId, pageParam, 10),
    // getNextPageParam: (lastPage, pages) => lastPage.data.data.pagination.page + 1,
    enabled:!!isOpenComment,
    onError: (error, variables, context) => {},
    onSuccess: (res, page) => {
      console.log(res);
      // let currentPageParam = res?.pageParams?.length - 1;
      setCommentList(res.pages[0]?.data?.data?.comment);
    },
  });

  return (
    <Box width="auto" p="4">
      <Swiper
        slidesPerView={1}
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
        className="mySwiper"
      >
        {[...commentList]?.map((item, ind) => (
          <SwiperSlide key={ind}>
            <Card bg="#F1F2F6" minW="280px" rounded="2xl">
              <HStack align="center" justifyContent="space-between" padding={["3", null, "4"]}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: ["auto", null, "280px"],
                  }}
                >
                  <Box boxSize={["28px", null, "38px"]}>
                    <Image
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      className="rounded-md"
                      src={item?.uid?.profilePic}
                      alt="Profile Image"
                    />
                  </Box>
                  <Box ml="2">
                    <p
                      style={{
                        fontSize: ["12px", null, "14px"],
                        color: "#171717",
                        fontWeight: "600",
                      }}
                    >
                      {item?.uid?.name}{" "}
                    </p>
                    <p style={{ fontSize: ["10px", null, "12px"], color: "#636363" }}>{getTimeAgo(item?.createdAt)}</p>
                  </Box>
                </Box>
              </HStack>
              <Text
                fontSize={["12px", null, "14px"]}
                fontWeight="500"
                color="#16222C"
                p={["2", null, "3"]}
                lineHeight={["20px", null, "24px"]}
              >
                {item?.comment} {"...read more"}
              </Text>
              <HStack align="center" padding={["3", null, "3"]}>
                <Text
                  style={{
                    fontSize: ["10px", null, "12px"],
                    fontWeight: "600",
                    color: "#455564",
                  }}
                >
                  Like
                </Text>
                <Divider border="0.2" orientation="vertical" />
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <LikeEmojiGroup />
                  <Text
                    style={{
                      fontSize: ["10px", null, "12px"],
                      fontWeight: "600",
                      color: "#455564",
                    }}
                  >
                    {item?.reactionCount}
                  </Text>
                </Box>
                <Divider border="0.2" orientation="vertical" />
                <Text fontSize={{ sm: "14px", md: "16px" }} color="#455564">
                  Reply
                </Text>
                <Divider border="0.2" orientation="vertical" />
                <Box display="flex" alignItems="end">
                  <span
                    style={{
                      fontSize: ["10px", null, "12px"],
                      fontWeight: "600",
                      color: "#455564",
                    }}
                  >
                    13
                  </span>
                  <Text
                    fontSize={{ sm: "14px", md: "16px" }}
                    style={{
                      fontWeight: "500",
                      color: "#8D96A5",
                      paddingLeft: ["2px", null, "5px"],
                    }}
                  >
                    comments
                  </Text>
                </Box>
              </HStack>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CommentSlider;
