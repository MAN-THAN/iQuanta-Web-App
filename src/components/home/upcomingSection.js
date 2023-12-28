import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import './styles.css';
import { Navigation } from "swiper/modules";
import UpComeingCard from "../feature/upComeingCard";
import { Box, Flex, HStack, Heading } from "@chakra-ui/layout";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import CoursesAddCard from "../feature/coursesAddCard";
import { getUpcomingEvents } from "@/api/events";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const UpcomingSection = () => {
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUpcomingEvents", uid],
    queryFn: () => getUpcomingEvents(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.event),
  });
  console.log(state);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="swiper-container">
      <Flex align="center" justify="space-between" pb="4">
        <HStack>
          <Heading fontSize="18px" fontWeight="500">
            Upcoming
          </Heading>
        </HStack>
        <HStack>
          <Box onClick={handlePrev}>
            <ChevronLeft />
          </Box>
          <Box onClick={handleNext}>
            <ChevronRight />
          </Box>
        </HStack>
      </Flex>
      <Swiper modules={[Navigation]} slidesPerView={1.8} spaceBetween={30} className="mySwiper" ref={swiperRef}>
        <SwiperSlide>
          <UpComeingCard />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesAddCard />
        </SwiperSlide>
        <SwiperSlide>
          <UpComeingCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UpcomingSection;
