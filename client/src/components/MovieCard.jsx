import React from "react";
import { data } from "../assets/Data";
import { nanoid } from "nanoid";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import timeformat from "../lib/timeformate";

const MovieCard = () => {
  const navigate = useNavigate();

  const NewData = data;
  const Movie = NewData.slice(0, 4).map((d) => {
    let id = nanoid();
    return (
      <div
        key={id}
        className="flex flex-col justify-between z-5  py-4 px-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66"
      >
        <img
          onClick={() => navigate("/moviedetails")}
          src={d.Poster}
          className="w-[96%] h-70 ml-[2%] object-center rounded cursor-pointer"
        />
        <h1 className="mt-2 ml-2">{d.Title}</h1>
        <p className="text-sm ml-2 mt-2 text-gray-400">
          {" "}
          <small className="text-sm mr-1">{d.Released}</small> | {d.Genre} |{" "}
          <small className="text-sm">{timeformat(d.Runtime)}</small>{" "}
        </p>
        <div className="flex mt-4 justify-between px-1 items-center">
          <button
            onClick={() => navigate("/seat")}
            className=" cursor-pointer px-6 py-2 bg-[#f84565]/80 rounded-3xl text-sm"
          >
            Buy Tickets
          </button>
          <p className="flex gap-2 items-center">
            <Star className="w-5 h-5 text-[#f84565]/80" />
            {d.imdbRating}
          </p>
        </div>
      </div>
    );
  });

  return <>{Movie}</>;
};

export default MovieCard;
