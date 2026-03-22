import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";

import { Autoplay } from "swiper/modules";

const Hero = () => {
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
            <div className="relative w-full h-full">
              <video
                src="/first.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col md:justify-center justify-end mb-25 md:mb-0 px-6 md:px-16 text-white">
                <h1 className="text-3xl md:text-6xl mt-10 font-extrabold">
                  Dhurandhar - <br /> <p className="ml-36">The Revenge</p>
                </h1>
                <div className="flex items-center gap-5 mt-2">
                  <span> Action | Crime | Thriller </span>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4.5 h-4.5" /> 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4.5 h-4.5" /> 3h 50m
                  </div>
                </div>
                <p className=" mt-3 max-w-xl">
                  Jaskirat Singh Rangi descends deeper into his alias as Hamza
                  Ali Mazari, rising through Karachi's criminal hierarchy to
                  claim the feared title "Sher-e-Baloch" while balancing
                  loyalty, betrayal, and survival in a ruthless underworld.
                </p>
                <button className="hover:scale-102 mt-5 px-6 py-2.5 bg-[#f84565]/80 rounded-full w-fit flex items-center justify-center gap-2">
                  Explore Movies <ArrowRight className="h-4 w-4 mt-0.75" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <video
                src="/second.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col md:justify-center justify-end mb-25 md:mb-0 px-6 md:px-16 text-white">
                <h1 className="text-3xl md:text-6xl mt-10 font-extrabold">
                  Bhooth Bangla
                </h1>
                <div className="flex items-center gap-5 mt-2">
                  <span> Horror and Comedy </span>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4.5 h-4.5" /> 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4.5 h-4.5" /> 2h 53m
                  </div>
                </div>
                <p className=" mt-3 max-w-xl">
                  Bhooth Bangla is an upcoming horror-comedy film starring
                  Akshay Kumar, directed by Priyadarshan.
                </p>
                <button className="hover:scale-102 mt-5 px-6 py-2.5 bg-[#f84565]/80 rounded-full w-fit flex items-center justify-center gap-2">
                  Explore Movies <ArrowRight className="h-4 w-4 mt-0.75" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <video
                src="/third.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col md:justify-center justify-end mb-25 md:mb-0 px-6 md:px-16 text-white">
                <h1 className="text-3xl md:text-6xl mt-10 font-extrabold">
                  Crime 101
                </h1>
                <div className="flex items-center gap-5 mt-2">
                  <span> Action | Crime | Thriller </span>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4.5 h-4.5" /> 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4.5 h-4.5" /> 2h 20m
                  </div>
                </div>
                <p className=" mt-3 max-w-xl">
                  When an elusive thief whose high-stakes heists unfold along
                  the iconic 101 freeway in Los Angeles eyes the score of a
                  lifetime, with hopes of this being his final job, his path
                  collides with a disillusioned insurance broker who is facing
                  her own crossroads. Determined to crack the case, a relentless
                  detective closes in on the operation, raising the stakes even
                  higher.
                </p>
                <button className="hover:scale-102 mt-5 px-6 py-2.5 bg-[#f84565]/80 rounded-full w-fit flex items-center justify-center gap-2">
                  Explore Movies <ArrowRight className="h-4 w-4 mt-0.75" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <video
                src="/fourth.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col md:justify-center justify-end mb-25 md:mb-0 px-6 md:px-16 text-white">
                <h1 className="text-3xl md:text-6xl mt-10 font-extrabold">
                  Project Hail Mary
                </h1>
                <div className="flex items-center gap-5 mt-2">
                  <span> Science Fiction | Adventure | Mystery </span>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4.5 h-4.5" /> 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4.5 h-4.5" /> 2h 36m
                  </div>
                </div>
                <p className=" mt-3 max-w-xl">
                  Science teacher Ryland Grace wakes up alone on a spaceship
                  light-years from Earth. As his memory returns, he uncovers a
                  mission to stop a mysterious substance killing the sun, and
                  save Earth. An unexpected friendship may be the key.
                </p>
                <button className="hover:scale-102 mt-5 px-6 py-2.5 bg-[#f84565]/80 rounded-full w-fit flex items-center justify-center gap-2">
                  Explore Movies <ArrowRight className="h-4 w-4 mt-0.75" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-screen w-full bg-[#09090b] md:px-10 py-10">
        <h1 className=" text-white font-medium">Now Showing</h1>
      </div>
    </>
  );
};

export default Hero;
