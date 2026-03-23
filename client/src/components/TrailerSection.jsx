import { useState } from "react";
import { dummyTrailers } from "../assets/Data";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currentTrailer, setcurrentTrailer] = useState(dummyTrailers[0]);
  const getYouTubeEmbedUrl = (url) => {
    return url.replace("watch?v=", "embed/");
  };

  return (
    <div className=" bg-[#09090b] relative px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg">Trailers</p>

      <BlurCircle top="-100px" right="-100px" />

      <div className="relative mt-6">
        <div className="mx-auto w-full max-w-4xl aspect-video">
          <iframe
            src={getYouTubeEmbedUrl(currentTrailer.videoUrl)}
            className="w-full h-full rounded-xl"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className=" group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={()=> setcurrentTrailer(trailer)}
            className="z-10 flex-wrap relative group-hover:not-hover:opacity-50 hover:translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-l w-full mt-10 md:mt-0 h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
      <BlurCircle bottom="0" left="-80px" />
    </div>
  );
};

export default TrailerSection;
