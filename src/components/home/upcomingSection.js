import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import './styles.css';
import { Navigation } from "swiper/modules";
import UpComeingCard from "../feature/upComeingCard";
import { Box, Flex, HStack, Heading } from "@chakra-ui/layout";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import CoursesAddCard from "../feature/coursesAddCard";

const UpcomingSection = () => {
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
            Upcomeing
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
      <Swiper modules={[Navigation]} slidesPerView={1.7} spaceBetween={10} className="mySwiper" ref={swiperRef}>
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
