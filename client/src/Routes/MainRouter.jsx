import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Favorite from "../pages/Favorite";
import Seatlayout from "../pages/Seatlayout";
import Mybooking from "../pages/Mybooking";
import ComingSoon from "../pages/ComingSoon";
import Theaters from "../pages/Theaters";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/moviedetails/:id" element={<MovieDetails />} />
      <Route path="/seat/:id" element={<Seatlayout />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/mybooking" element={<Mybooking />} />
      <Route path="/theaters" element={<Theaters />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
    </Routes>
  );
};

export default MainRouter;