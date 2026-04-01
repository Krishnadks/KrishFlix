import { theatersData } from "../assets/Data";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlurCircle from "../components/BlurCircle";

const Theaters = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="py-30 h-[200vh] text-gray-300 bg-[#09090b] overflow-hidden">
        <BlurCircle right="0" bottom="0" />

        <div className="p-4 sm:p-6 md:p-8 z-5">
          <h1 className="text-xl sm:text-2xl font-medium mb-6">
            Nearby Theaters
          </h1>

          <div className="flex flex-col gap-6">
            {theatersData.map((theater) => (
              <div
                key={theater.id}
                className="bg-gray-900 z-5 rounded-xl p-4 sm:p-6 shadow-lg"
              >
                {/* 🎭 Theater Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {theater.name}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {theater.location}
                    </p>
                  </div>

                  <p className="mt-2 sm:mt-0 text-sm">
                    ⭐ {theater.rating}
                  </p>
                </div>

                {/* 🎬 Movies */}
                <div className="mt-4 flex flex-col gap-4">
                  {theater.movies.map((movie, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                    >
                      <h3 className="text-base sm:text-lg">
                        {movie.title}
                      </h3>

                      {/* ⏰ Timings */}
                      <div className="flex flex-wrap gap-2">
                        {movie.timings.map((time, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              navigate("/seat", {
                                state: {
                                  movieTitle: movie.title,
                                  theaterId: theater.id,
                                  time: time,
                                },
                              })
                            }
                            className="px-3 py-1 text-sm bg-[#f84565]/80 rounded-md hover:bg-[#f84565] transition"
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

      <Footer />
    </>
  );
};

export default Theaters;