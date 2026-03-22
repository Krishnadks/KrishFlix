import React from "react";
import Hero from "../components/Hero";
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
    </div>
    </>
  );
};

export default Home;