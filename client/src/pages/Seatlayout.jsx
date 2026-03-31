import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { theatersData, seatLayouts } from "../assets/Data";

const Seatlayout = () => {
  const { state } = useLocation();

  const movieTitle = state?.movieTitle;
  const preSelectedTheaterId = state?.theaterId;
  const preSelectedTime = state?.time;

  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  useEffect(() => {
    // 🎯 Case 1: Data coming from Theaters page
    if (preSelectedTheaterId) {
      const theater = theatersData.find((t) => t.id === preSelectedTheaterId);
      setSelectedTheater(theater);
    }

    if (preSelectedTime) {
      setSelectedTime(preSelectedTime);
    }

    // 🎯 Case 2: Coming from MovieCard (no theater/time)
    if (movieTitle && !preSelectedTheaterId) {
      const theater = theatersData.find((t) =>
        t.movies.some((m) => m.title === movieTitle),
      );

      if (theater) {
        setSelectedTheater(theater);

        const movie = theater.movies.find((m) => m.title === movieTitle);

        if (movie) {
          setSelectedTime(movie.timings[0]); // auto first time
        }
      }
    }
  }, []);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId],
    );
  };

  const layout = selectedTheater ? seatLayouts[selectedTheater.id] : null;

  // 💰 Price calculation
  const totalPrice = selectedSeats.reduce((total, seat) => {
    const row = seat[0];
    let price = layout?.pricing[row] || 0;

    const rowIndex = layout?.rows.indexOf(row);

    if (rowIndex >= layout.rows.length - 2)
      price += 120; // premium
    else if (rowIndex >= layout.rows.length - 5) price += 60; // regular

    return total + price;
  }, 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
      {/* 🔴 LEFT DASHBOARD */}
      <div className="w-full lg:w-70 bg-[#111] p-4 rounded-xl border border-gray-800">
        <h2 className="text-lg mb-4">Booking Summary</h2>

        <p className="text-sm text-gray-400">{movieTitle}</p>

        <div className="mt-4">
          <p className="text-sm">Seats:</p>
          <p className="text-xs text-gray-400">
            {selectedSeats.length ? selectedSeats.join(", ") : "None"}
          </p>
        </div>

        <div className="mt-4">
          <p>Total: ₹{totalPrice}</p>
        </div>

        <button className="mt-6 w-full py-2 bg-pink-600 rounded hover:bg-pink-700">
          Proceed →
        </button>
      </div>

      {/* 🎬 RIGHT SIDE */}
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-lg sm:text-xl m-10">Select your seats</h1>

        {/* 🎥 SCREEN IMAGE */}
        <div className="w-full flex justify-center mb-30">
          <img
            src="/screenImage.svg"
            alt="screen"
            className="w-[70%] sm:w-[50%] opacity-80"
          />
        </div>

        {/* 💺 SEATS */}
        {selectedTime && layout && (
          <div className="w-full overflow-x-auto">
            <div className="flex flex-col gap-4 items-center min-w-max mx-auto">
              {layout.rows.map((row, rowIndex) => {
                let seatType = "economy";
                if (rowIndex >= layout.rows.length - 2) seatType = "premium";
                else if (rowIndex >= layout.rows.length - 5)
                  seatType = "regular";

                return (
                  <div key={row} className="flex items-center gap-2 sm:gap-3">
                    {/* Row Label */}
                    <span className="w-5 text-[10px] sm:text-xs text-gray-400">
                      {row}
                    </span>

                    {/* Seats */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {Array.from({ length: layout.cols + 2 }, (_, i) => {
                        const seatId = `${row}${i + 1}`;
                        const isSelected = selectedSeats.includes(seatId);

                        let sizeStyle = "";
                        let colorStyle = "";

                        if (seatType === "premium") {
                          sizeStyle = "w-9 h-9 sm:w-10 sm:h-10";
                          colorStyle = "bg-purple-600";
                        } else if (seatType === "regular") {
                          sizeStyle = "w-7 h-7 sm:w-8 sm:h-8";
                          colorStyle = "bg-green-600";
                        } else {
                          sizeStyle = "w-6 h-6 sm:w-7 sm:h-7";
                          colorStyle = "bg-blue-600";
                        }

                        return (
                          <button
                            key={seatId}
                            onClick={() => toggleSeat(seatId)}
                            className={`
                              ${sizeStyle}
                              ${isSelected ? "bg-pink-600 scale-110" : colorStyle}
                              text-[9px] sm:text-xs 
                              rounded-md border border-gray-800
                              transition-all duration-200
                              flex items-center justify-center
                              hover:scale-105
                            `}
                          >
                            {i + 1}
                          </button>
                        );
                      })}
                    </div>

                    {/* Seat Type Label */}
                    <span className="hidden sm:block text-[10px] text-gray-500 capitalize ml-2">
                      {seatType}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 🎨 LEGEND */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 text-xs text-gray-400 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            Premium
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            Regular
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            Economy
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-600 rounded"></div>
            Selected
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seatlayout;
