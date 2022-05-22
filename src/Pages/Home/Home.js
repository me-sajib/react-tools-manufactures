import React from "react";
import Banner from "./Banner";
import Client from "./Client";
import OurBlog from "./OurBlog";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="home-pages">
      <Banner />
      <Tools />
      <OurBlog />
      <Client />
    </div>
  );
};

export default Home;
