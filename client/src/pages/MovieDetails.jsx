import { useParams, useNavigate } from "react-router-dom";
import { data } from "../assets/Data";
import Navbar from '../components/Navbar';
import timeformat from "../lib/timeformate";
import { PlayCircle, Ticket } from "lucide-react";
import BlurCircle from '../components/BlurCircle';
import Footer from '../components/Footer';


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = data.find((m) => m.imdbID === id);

  if (!movie) {
    return <h1 className="text-white">Movie not found</h1>;
  }

  return (
    <>
    <Navbar/>
    <div className="py-40 bg-black px-6 lg:px-24 xl:px-30 text-white overflow-hidden">
    <div className=" flex flex-wrap gap-10">
    <img src={movie.Poster} alt="poster" className="w-70 z-10 rounded-xl" />
    <BlurCircle right="50px" top="80px"/>
    <div className="py-5 z-10">
      <h1 className="text-[2.5rem] text-[#f84565]/80 leading-none font-bold">{movie.Title}</h1>
      <p className="text-sm mt-3">{movie.Released} | {movie.Genre} | {timeformat(movie.Runtime)}</p>
      <p className="mt-3 text-base sm:text-lg">⭐ {movie.imdbRating} Rating</p>
      <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-2xl">{movie.Plot}</p>
      <div className="mt-20 flex gap-15">
        <button className="px-5 py-2 bg-[#f84565] rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:scale-102"><PlayCircle className="w-4.5"/> Watch Trailer</button>
        <button onClick={()=> navigate(`seat/${movie.imdbID}`)} className="px-5 py-2 bg-[#f84565] rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:scale-102"><Ticket className="w-4.5"/> Buy Ticket</button>
      </div>
    </div>
    </div>
    <h1 className=" mt-20 text-[1.2rem] font-medium">Movie Sceans</h1>
    <div className="flex flex-wrap gap-5 mt-10">
      {movie.Images.map((d,i)=>(
        <img
        key={i}
        src={d}
        className="w-145 rounded hover:scale-102"
        />
      ))}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default MovieDetails;