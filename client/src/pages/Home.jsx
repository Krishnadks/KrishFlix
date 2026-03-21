import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <>
    <div className="w-full h-screen">
      <Swiper
        className="h-full w-full"
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 60000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <video src="/first.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <video src="/second.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <video src="/third.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <video src="/fourth.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="h-screen w-full bg-[#09090b] md:px-10 py-10">
        <h1 className=" text-white font-medium">Now Showing</h1>
    </div>
    </>
  );
};

export default Home;