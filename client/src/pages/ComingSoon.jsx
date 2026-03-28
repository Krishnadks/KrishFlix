import { comingSoonData } from "../assets/Data";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import BlurCircle from "../components/BlurCircle";
import {toast} from 'react-hot-toast'

const ComingSoon = () => {

  const Notify = ()=> toast.success("🔔 Notify Later")

  return (
    <>
    <Navbar/>
      <div className="py-40 text-gray-300 bg-[#09090b] overflow-hidden">
        <BlurCircle bottom="0" left="-20px"/>
        <div className=" px-20 lg:px-24 xl:px-30">
          <h1 className="text-xl sm:text-2xl font-medium mb-15">Coming Soon 🎥 </h1>
          <div className="flex flex-wrap gap-10">
            {comingSoonData.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 w-66 z-5 items-center justify-center rounded-xl overflow-hidden hover:scale-103 transition duration-300"
              >
                <img src={movie.poster} className="w-full h-80 object-cover" />

                <div className="p-3">
                  <h2 className="text-sm sm:text-base font-semibold">
                    {movie.title}
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    📆 {movie.releaseDate}
                  </p>

                  <button onClick={Notify} className="mt-3 w-full py-1.5 text-sm bg-[#f84565] rounded-md hover:bg-[#ff2e55]">
                    🔔 Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ComingSoon;
