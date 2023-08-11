import {} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { testimoniesData } from "../../Data";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import "swiper/css";
import "swiper/css/free-mode";

export default function () {
  return (
    <Swiper
      className="max-h- px-28 py-20 tablet:px-14 mobile-max:px-7"
      direction="horizontal"
      grabCursor={true}
      slidesPerView={2.5}
      spaceBetween={28}
      freeMode={{
        enabled: true,
        momentumVelocityRatio: 0.5,
        momentumRatio: 0.5,
      }}
      modules={[FreeMode]}
      breakpoints={{
        1: {
          slidesPerView: 1.1,
          freeMode: {
            sticky: true,
          },
        },
        600: {
          direction: "horizontal",
          slidesPerView: 1.5,
          freeMode: {
            sticky: true,
          },
        },
        1024: {
          direction: "horizontal",
          slidesPerView: 2,
          freeMode: {
            sticky: false,
          },
        },
        1280: {
          direction: "horizontal",
          slidesPerView: 2.5,
          freeMode: {
            sticky: false,
          },
        },
        1600: {
          direction: "horizontal",
          slidesPerView: 3,
          freeMode: {
            sticky: false,
          },
        },
      }}
    >
      {testimoniesData.map((val, idx) => (
        <SwiperSlide key={`${val.lastName}${idx}`}>
          <TestimonialCard
            key={`${val.firstName}${idx}`}
            avatarImage={val.avatarImage}
            firstName={val.firstName}
            lastName={val.lastName}
            revenue={val.revenue}
            comment={val.comment}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
