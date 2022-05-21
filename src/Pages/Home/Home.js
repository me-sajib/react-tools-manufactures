import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="home-pages">
      <Navbar />
      <Banner />
      <Tools />
    </div>
  );
};

export default Home;
