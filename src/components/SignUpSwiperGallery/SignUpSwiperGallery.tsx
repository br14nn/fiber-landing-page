import { Swiper, SwiperSlide } from "swiper/react";
import SignUpImage from "../../assets/image/sign_up_image.webp";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Gallery from "./Gallery";

export default function () {
  return (
    <div className="flex w-1/2 flex-col justify-center bg-violet-blue px-14 laptop-max:px-28 tablet:hidden">
      <div>
        <Swiper
          className="py-10"
          id="signUpSwiper"
          pagination={{
            enabled: true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="flex flex-col items-center justify-center">
            <Gallery srcImg={SignUpImage} title="Unparalleled Templates">
              Crafted by a team of professional designers, our templates are
              unparalleled in the market.
            </Gallery>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <Gallery srcImg={SignUpImage} title="Lorem, ipsum.">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim
              quaerat, quis quisquam asperiores aspernatur ipsum labore numquam
              quos deserunt!
            </Gallery>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <Gallery srcImg={SignUpImage} title="Lorem, ipsum.">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim
              quaerat, quis quisquam asperiores aspernatur ipsum labore numquam
              quos deserunt!
            </Gallery>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <Gallery srcImg={SignUpImage} title="Lorem, ipsum.">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim
              quaerat, quis quisquam asperiores aspernatur ipsum labore numquam
              quos deserunt!
            </Gallery>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
