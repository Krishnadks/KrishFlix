import { data } from "../assets/Data";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import timeformat from "../lib/timeformate";

const MovieCard = ({ limit }) => {
  const navigate = useNavigate();
  const moviesToShow = limit ? data.slice(0, limit) : data;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 z-10">
      {moviesToShow.map((d) => (
        <div
          key={d.imdbID}
          className="bg-[#111] rounded-xl overflow-hidden shadow-md 
          hover:shadow-pink-500/20 transition duration-300 hover:-translate-y-1 flex flex-col"
        >
          {/* 🎬 Poster */}
          <div className="relative">
            <img
              onClick={() => {navigate(`/moviedetails/${d.imdbID}`); window.scrollTo(0,0);}}
              src={d.Poster}
              alt={d.Title}
              className="w-full h-52 sm:h-60 object-cover cursor-pointer"
            />

            {/* ⭐ Rating Badge */}
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded text-xs">
              <Star className="w-3 h-3 text-[#f84565]" />
              {d.imdbRating}
            </div>
          </div>

          {/* 📄 Content */}
          <div className="p-3 flex flex-col flex-1 justify-between">
            <div>
              <h1 className="text-sm sm:text-base font-medium line-clamp-1">
                {d.Title}
              </h1>

              <p className="text-[11px] sm:text-xs text-gray-400 mt-1 line-clamp-2">
                {d.Released} • {d.Genre}
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                {timeformat(d.Runtime)}
              </p>
            </div>

            {/* 🎟 Button */}
            <button
              onClick={() =>
                navigate("/theaters", {
                  state: {
                    movieTitle: d.Title,
                  },
                })
              }
              className="mt-3 w-full py-1.5 text-xs sm:text-sm 
              bg-linear-to-r from-[#f84565] to-pink-500 
              rounded-full hover:opacity-90 transition"
            >
              Buy Tickets
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
