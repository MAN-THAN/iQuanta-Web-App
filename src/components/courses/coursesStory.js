import { Avatar, Box, Card, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Carousel, Divider } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";

const CoursesStory = () => {
  const slidesPerView = useBreakpointValue({ base: 1.3, sm: 1.8, md: 2.5 });

  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        // slidesPerView={slidesPerView}
        navigation={true}
      >
        {[...Array(4)].map((d, i) => (
          <SwiperSlide key={i}>
            <Card border="1px solid #EAEAEC" rounded="2xl" minWidth="260px" height="280px" align="center" p="6">
              <Image alt="image" objectFit="cover" src="/qouats.png" />
              <Text textAlign="center" lineHeight="" fontSize="12px" color="#16222C" pt="3" fontWeight="500">
                “The CAT course is well structured, easy to understand and the help that I got from iQuanta was amazing!
                Highly recommended!”
              </Text>
              <Divider />
              <Avatar size="md" src="/profile.jpeg" />
              <Text fontSize="12px" fontWeight="500" color="#8D96A5" pt="3">
                Aayush Gupta
              </Text>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CoursesStory;
