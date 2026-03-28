import { theatersData } from "../assets/Data";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"


const Theaters = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="py-30 text-gray-300 bg-[#09090b]">
      <div className="p-4 sm:p-6 md:p-8 ">
        <h1 className="text-xl sm:text-2xl font-medium mb-6">Nearby Theaters</h1>
        <div className="flex flex-col gap-6">
          {theatersData.map((theater) => (
            <div
              key={theater.id}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {theater.name}
                  </h2>
                  <p className="text-gray-400 text-sm">{theater.location}</p>
                </div>

                <p className="mt-2 sm:mt-0 text-sm">⭐ {theater.rating}</p>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                {theater.movies.map((movie, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                  >
                    <h3 className="text-base sm:text-lg">{movie.title}</h3>

                    <div className="flex flex-wrap gap-2">
                      {movie.timings.map((time, i) => (
                        <button
                          key={i}
                          onClick={() => navigate("/seat")}
                          className="px-3 py-1 text-sm bg-[#f84565]/80 rounded-md hover:bg-[#f84565]"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
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

export default Theaters;
