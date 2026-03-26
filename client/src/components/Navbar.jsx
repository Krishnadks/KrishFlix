import { useState } from "react";
import { Search, TicketPlus } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { useNavigate, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="w-full fixed px-4 sm:px-6 md:px-10 py-5 flex items-center justify-between text-white">
      <Link to="/">
        <img src="/logo.jpeg" alt="logo" className="w-28 sm:w-32 md:w-40" />
      </Link>
      <ol
        className="hidden md:flex gap-8 lg:gap-10 px-6 lg:px-10 py-3 rounded-full 
        bg-white/10 backdrop-blur-lg border border-white/20 font-medium"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-400 " : "text-white hover:text-rose-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/movies"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white hover:text-rose-300"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to={"/theaters"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white hover:text-rose-300"
          }
        >
          Theaters
        </NavLink>
        <NavLink
          to={"/comingsoon"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white hover:text-rose-300"
          }
        >
          Coming Soon
        </NavLink>
      </ol>
      <div className="flex items-center gap-3 sm:gap-5">
        <Search className="hidden sm:block cursor-pointer" />

        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 sm:px-5 py-1 hover:scale-103 rounded-3xl bg-[#fc7773] font-medium text-white cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/mybooking")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        <button className="md:hidden">
          <label className="relative w-7 h-6 cursor-pointer block">
            <input
              type="checkbox"
              className="peer hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
            <span
              className="absolute left-0 top-0 h-0.75 w-full bg-white rounded transition-all duration-300 origin-left 
              peer-checked:rotate-45 peer-checked:top-0 peer-checked:left-1"
            />
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.75 w-full bg-white rounded transition-all duration-300 origin-left 
              peer-checked:w-0 peer-checked:opacity-0"
            />
            <span
              className="absolute left-0 bottom-0 h-0.75 w-full bg-white rounded transition-all duration-300 origin-left 
              peer-checked:-rotate-45 peer-checked:bottom-0 peer-checked:left-1"
            />
          </label>
        </button>
      </div>
      <div
        className={`fixed top-[8%] left-0 w-full h-[92%] md:hidden
  bg-linear-to-br from-black/60 via-black/40 to-black/60
  backdrop-blur-2xl border border-white/10
  flex flex-col items-center justify-center gap-10 text-2xl text-white z-40
  transform transition-all duration-500 ease-in-out
  ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        style={{ transformOrigin: "top left" }}
      >
        <Link to={"/"} className="hover:scale-110 hover:text-red-400 transition">Home</Link>
        <Link to={"/movies"} className="hover:scale-110 hover:text-red-400 transition">Movies</Link>
        <Link to={"/theaters"} className="hover:scale-110 hover:text-red-400 transition">
          Theaters
        </Link>
        <Link to={"/comingsoon"} className="hover:scale-110 hover:text-red-400 transition">
          Coming Soon
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
